import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';;
import HomeScreen from './Home';

const NativeButton = StackNavigator{{
  Home: { screen: HomeScreen },

}};
export default NativeButton;
