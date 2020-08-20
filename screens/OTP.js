import React, { useState } from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { addOtp, logIn } from '../store/action';
import OTPTextView from 'react-native-otp-textinput';
import CountDown from 'react-native-countdown-component';
import firestore from '@react-native-firebase/firestore';


function OTP(props) {
  const [otpC, setOtpc] = useState('');
  const { phone, navigation } = props;
  const [counter, setCounter] = useState(180);
  console.log('Sayac', counter);
  const _doRequest = async () => {
    try {
      const users = await firestore()
        .collection('users')
        .where('otp', '==', otpC)
        .where('phone', '==', phone)
        .get();
      console.log('Response =', users);
      if (users._docs.length) {
        props.addOtp(otpC);
        props.logIn(true);
        navigation.navigate('Home');
        Alert.alert('Oturum Açıldı');
      }
      else {
        Alert.alert('Yanlış OTP kodu girdiniz.')
        navigation.navigate('login')
      }
    } catch (e) {
      Alert.alert('kullanıcı bulunamadı');
    }
  };
  return (
    <View>
      <View>
        <Text style={styles.warnText}>
          Telefonunuza gelen doğrulama kodunu 180 saniye içinde giriniz.
        </Text>
      </View>
      <View style={styles.boxView}>
        <OTPTextView
          handleTextChange={otcode => {
            setOtpc(otcode);
          }}
          defaultValue={otpC}
          textInputStyle={styles.boxes}
          inputCount={6}
          inputCellLength={1}
        />
      </View>
      <CountDown
        until={counter}
        onFinish={() => {
          setCounter(180),
            Alert.alert('Süreniz doldu'),
            navigation.navigate('login');
        }}
        timeToShow={['S']}
        timeLabels={{ m: 'MM' }}
        digitStyle={{ backgroundColor: '' }}
        size={40}
      />
      <TouchableOpacity style={styles.continue} onPress={() => _doRequest()}>
        <Text style={{ color: 'white' }}>Doğrula</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({ otp: state.otp, phone: state.phone, login: state.login });
const mapDispatchToProps = {
  addOtp,
  logIn
};
export default connect(mapStateToProps, mapDispatchToProps)(OTP);

const styles = StyleSheet.create({
  warnText: {
    fontSize: 20,
    padding: 15,
    color: 'grey',
  },
  boxes: {
    borderWidth: 1,
    width: '9%',
    margin: 15,
  },
  boxView: {
    flexDirection: 'row',
    marginTop: '20%',
  },
  continue: {
    marginTop: '25%',
    borderWidth: 1,
    backgroundColor: '#61A5EA',
    width: 300,
    alignItems: 'center',
    marginLeft: 50,
  },
});
