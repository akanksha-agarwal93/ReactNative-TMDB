/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';

import HomeScreen from './home/HomeScreen';
import MovieDetailsScreen from './home/MovieDetailsScreen';
import LoginScreen from './components/LoginScreen';
import configureStore from "./store/configureStore";

const Stack = createStackNavigator();
const store = configureStore();

const App: () => React$Node = () => {
  return (
    <Provider store = {store}>
    <NavigationContainer > 
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Movie Details" component={MovieDetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
