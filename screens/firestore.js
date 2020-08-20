import firestore from '@react-native-firebase/firestore';
import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

class firebaseapp extends Component {
    state = {
        user: {
            name: " ",
            otp: " ",
            phone: "+905414003877"
        }
    }
 constructor(props){
     super(props);
     this.getUsers();
 }
 

 getUsers = async () => {
     const users =await firestore()
     .collection('users')
     .where('phone','==', this.state.user.phone)
     .get();
     console.log('Kullanıcılar=' ,users._docs[0]._data.name);
     this.setState({
         user:{
             name: users._docs[0]._data.name,
             otp: users._docs[0]._data.otp,
             phone: users._docs[0]._data.phone,
         }
     })
 }
 
    render(){
        return(
            <View>
                <Text>{this.state.user.name}</Text>
                <Text>{this.state.user.otp}</Text>
                <Text>{this.state.user.phone}</Text>
            </View>
        )
    }
}
export default firebaseapp