import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './store/store';
import { connect } from 'react-redux';
import { logIn } from './store/action';
import RootContainer from './navigation/RootStack';


function platronApp(props) {

  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );

}
const styles = StyleSheet.create({

});

const ConnectedRoot = connect(
  (state) => ({
    login: state.login
  }),
  logIn
)(RootContainer);




export default platronApp
