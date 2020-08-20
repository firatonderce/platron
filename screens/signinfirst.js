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


function SigninFirst(props) {
  const { navigation, login } = props;
  const [phone, setPhone] = useState('+90');


  const _phoneNoInput = () => {
    props.addUserPhone(phone);
    console.log('Phone Input=', props.phone)
    navigation.navigate('OTP');
  };
   
  const _mailPage = () =>{
    console.log('mailPageWorked');
    navigation.navigate('signIn');
  }
  const _login = () => {
    navigation.navigate('login')
  }
    return (
      <Input
      place={phone}
      onChange={text => setPhone('+90' + text)}
      onPress={() => _mailPage()}
      secondOnPress = {() => _login()}
      header = 'Kayıt için telefon numaranızı giriniz.'
      question = 'Zaten hesabınız var mı ?'
      directiveButton = 'Giriş Yap'
      />
    );
}

const mapStateToProps = state => ({ phone: state.phone, login: state.login });
const mapDispatchToProps = {
  addUserPhone,
  logOut
};
export default connect(mapStateToProps, mapDispatchToProps)(SigninFirst);

const styles = StyleSheet.create({
  login: {
    marginTop: '10%',
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
  },
  headerText: {
    fontSize: 23,
    marginLeft: 15,
    color: 'grey',
  },
  inputContext: {
    marginTop: '20%',
    marginLeft: 25,
  },
  log: {
    alignItems: 'center'
  }
});
