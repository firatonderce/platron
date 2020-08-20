
import React from 'react';
import {connect} from 'react-redux';

import * as Screens from '../screens/index';
import Tabs from './Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const RootContainer = props =>  {
    console.log(JSON.stringify(props, null, 2));
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="locationPage">
          <Stack.Screen name="login" component={Screens.login} />
          <Stack.Screen options={{ headerShown: false }} name="Platron" component={Tabs} />
          <Stack.Screen name="basket" component={Screens.basket} />
          <Stack.Screen name="products" component={Screens.products} />
          <Stack.Screen name="OTP" component={Screens.OTP} />
          <Stack.Screen name="categoryPage" component={Screens.categoryPage} />
          <Stack.Screen name="complete" component={Screens.complete} />
          <Stack.Screen name="signIn" component={Screens.signin} />
          <Stack.Screen name="locationPage" component={Screens.locationScreen} />
          <Stack.Screen name="phonesign" component={Screens.signinfirst} />
          <Stack.Screen name="Logout" component={Screens.logout} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  };

const mapStateToProps = (state) => ({login: state.login});
export default connect(mapStateToProps)(RootContainer);