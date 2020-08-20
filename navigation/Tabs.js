
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from '../screens/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import {connect} from 'react-redux';
import { Alert } from 'react-native';

Icon.loadFont();
Icons.loadFont();

const Tab = createBottomTabNavigator();

const Tabs = ({login}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Screens.home}
        options={{
          title: 'Anasayfa',
          tabBarIcon: ({ focused }) => <Icon name="home" size={24} />
        }} />
      <Tab.Screen
        name="Basket"
        component={Screens.basket}
        options={{
          title: 'Sepet',
          tabBarIcon: ({ focused }) => <Icon name="shopping-cart" size={24} />
        }} />

      {login && (
        <Tab.Screen
          name="Logout"
          component={Screens.logout}
          options={{
            title: 'Çıkış Yap',
            tabBarIcon: ({ focused }) => <Icons name="logout" size={24} />
          }} />
      )}
      {!login && (
        <Tab.Screen
          name="Login"
          component={Screens.login}
          options={{
            title: 'Giriş Yap',
            tabBarIcon: ({ focused }) => <Icon name="user-o" size={24} />
          }} />
      )}
    </Tab.Navigator>
  );
}

const mapStateToProps = (state) => ({login: state.login});
export default connect(mapStateToProps)(Tabs);