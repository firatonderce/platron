import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import { connect } from 'react-redux';
import {addUserLocation} from '../store/action';

Geocoder.init('AIzaSyAbSLlXJiwG1XqRICA1aZGEcof-6K9d4sI');

function locationScreen(props) {
    const maps = useRef();
    const marker = useRef();
    const {navigation} = props;
    const [location, setLocation] = useState('Selam');
    const initialRegion = { longitude: 29.0231832, latitude: 41.0322351, latitudeDelta: 0.05, longitudeDelta: 0.05 };


    useEffect(() => {
        getLastLocation();
        return;
    }, []);

    const getLastLocation = () => {
        Geolocation.getCurrentPosition(location => {
            moveToRegion(location.coords);
            reverseGeocode(location.coords);
            //  return location;
        }, error => console.log('===getLastLocation error response=', error), {
            enableHighAccuracy: false,
            timeout: 2000,
        }
        );
    };

    const reverseGeocode = (location) => {
        const { latitude, longitude } = location;
        console.log('=====reverseGeocode location====', location);
        Geocoder.from(latitude, longitude)
            .then(json => {
                const addressComponent = json.results[0].address_components[0]
                console.log('====Geocoder adressComponent ====', addressComponent)
                setLocation(addressComponent);
            })
            .catch(console.warn);
    };


    const onRegionChange = (region) => {
        marker.current.animateMarkerToCoordinate(region, 1000);
        console.log('===onregionchange value===',region)
        reverseGeocode(region);
    };

    const moveToRegion = (location) => {
        const region = { 
            latitude : location.latitude, 
            longitude: location.longitude,
            latitudeDelta: 0.05, 
            longitudeDelta: 0.05 };
        maps.current.animateToRegion(region, 100);
    };
    
    const onPress = () => {
     console.log('onpressteki state değeri==',location)
     props.addUserLocation(location);
     Alert.alert('Adresiniz başarılıya kaydedildi.');
     navigation.navigate('Platron');
     
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#9933ff' }} >
            <View style={styles.header}>
                <Text style={styles.headerText}>Konumunuzu bulmamıza yardımcı olun</Text>
            </View>
            <View style={styles.mainView}>
                <View style={styles.mapContainer}>
                    <MapView
                        ref={maps}
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        showsUserLocation
                        loadingEnabled
                        scrollEnabled
                        onRegionChangeComplete={onRegionChange}
                        initialRegion={initialRegion}>
                        <Marker ref={marker} coordinate={initialRegion} />
                    </MapView>


                </View>
                <View style={{ marginTop: '1%' }}>
                    {location.types == "street_number" &&
                      <Text style={{fontStyle:'italic'}}>Sokak numarası:{location.long_name}</Text>
                    }
                    {location.types != "street_number" && location.long_name != "Unnamed Road" &&
                      <Text>{location.long_name}</Text>
                    }
                    {location.types == "route" && location.long_name === "Unnamed Road" &&
                      <Text style={{fontStyle:'italic'}}>Isimsiz bölge</Text>
                    }
                  
                    
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={styles.continue}
                    onPress={() => onPress()}
                >
                    <Text style={{ color: 'white' }}>Devam</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const mapStateToProps = state => ({location: state.location });
const mapDispatchToProps = {
    addUserLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(locationScreen);
const styles = StyleSheet.create({
    mainView: {
        flex: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2F3A47', //'#9933ff'
    },
    boxes: {
        borderWidth: 1,
        flex: 1,
        margin: 15,

    },
    boxView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        height: '80%',
        overflow: 'hidden',
        borderWidth: 2,
        borderRadius: 500,
    },
    map: {
        height: '100%',
        width: '100%',
        position: 'absolute'

        // overflow: 'hidden' 
    },
    customCursor: {
        height: '100%',
        width: '100%',

    },
    continue: {
        borderWidth: 1,
        borderColor: '#9933ff',
        backgroundColor: '#61A5EA',
        width: '75%',
        height: '30%',
        alignItems: 'center',
        marginLeft: 50,
    },
    headerText: {
        fontSize: 23,
        marginLeft: '5%',
        paddingTop: '5%',
        color: 'white',
    },
    header: {             //Header-View style
        flex: 1
    },
})

/*

   <View style={{height:'15%',width:'15%' ,borderColor:'#cc0000', borderWidth:3,borderRadius:50}}>

            */