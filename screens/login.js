import React, { Component, useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import { } from 'react-native-gesture-handler';
import { Input } from '../components/index';
import { connect } from 'react-redux';
import { addUserPhone, logOut } from '../store/action';


function login(props) {
  const { navigation, login,location } = props;
  console.log('LOCASYON BU',location);
  const [phone, setPhone] = useState('+90');

  const _logOut = () => {
    props.logOut();
    console.log('Login bool = ', props.login);
    Alert.alert('Çıkış yapıldı, Anasayfaya yönlendiriliyorsunuz');
    navigation.navigate('Home');
  }

  const _phoneNoInput = () => {
    props.addUserPhone(phone);
    console.log('Phone Input =', props.phone)
    navigation.navigate('OTP');
  };

  const _signUp = () => {
    console.log('signUP');
    navigation.navigate('phonesign');
  }

  if (!login)
    return (
            <Input
              place={phone}
              onChange={text => setPhone('+90' + text)}
              onPress={() => _phoneNoInput()}
              secondOnPress = {() => _signUp()}
              header = 'Giriş için telefon numaranızı giriniz.'
              question = 'Üyeliğiniz yok mu ?'
              directiveButton = 'Üye olun.'
            />
    );
  else
    return (
      <View style={styles.log}>
        <Text style={{ fontSize: 20, margin: '10%' }}>Oops.. Bir yanlışlık olmuş. Oturumunuz açık, çıkış yapmak için</Text>
        <TouchableOpacity
          onPress={() => _logOut()}>
          <Image
            style={styles.image}
            source={require('../datas/pictures/loggedin.jpg')} />
          <Text style={{ fontSize: 20, margin: '10%' }}>Kütüğe yavaşça tıklayın</Text>
        </TouchableOpacity>
      </View>
    )
}

const mapStateToProps = state => ({ phone: state.phone, login: state.login, location: state.location });
const mapDispatchToProps = {
  addUserPhone,
  logOut
};
export default connect(mapStateToProps, mapDispatchToProps)(login);

const styles = StyleSheet.create({
  login: {
    flex: 1,
    marginTop: '5%',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'green'
  },
  input: {
    borderColor: '#555',
    borderWidth: 1,
    width: '80%',
    height: 50,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  code: {
    borderWidth: 1,
    fontSize: 20,
  },
  header: {
    marginLeft: '4%',
    marginRight: '4%',
    flex: 1,
    borderWidth: 2,
    backgroundColor: 'yellow'
  },
  headerText: {
    fontSize: 23,
    marginLeft: '5%',
    color: 'grey',
  },
  inputContext: {
    marginLeft: '5%',
  },
  log: {
    alignItems: 'center',
    flex:1,
  }
});
