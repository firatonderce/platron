import React, {Component,} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

function complete(){
    return(
        <View style={styles.ViewStyle}>
            <Image
             style={styles.image}
             source = {require('../datas/pictures/complete.png')}
            />
            <Text style={styles.TextStyle}> Siparişin alındı!</Text>
        </View>
    )
}
export default complete;

const styles = StyleSheet.create({
    ViewStyle:{
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'white',
     flex:1
    },
    TextStyle:{
        color :'#61A5EA',
    },
    image:{
        marginTop: '0%',
    }
})