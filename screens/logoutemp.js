import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { logOut } from '../store/action';

function logout(props)  { 
  const {navigation} = props;
  const _logOut = () => {
    props.logOut();
    console.log('Login bool = ', props.login);
    Alert.alert('Çıkış yapıldı, Anasayfaya yönlendiriliyorsunuz');
    navigation.navigate('Home');
  }
    return (
      <View style={styles.log}>
        <Text style={{ fontSize: 20, margin: '10%' }}/>
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
})

const mapStateToProps = state => ({login: state.login});
const mapDispatchToProps = {
  logOut
};
export default connect(mapStateToProps, mapDispatchToProps)(logout);