import React, { useState } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './src/Reducers';

import Icon from 'react-native-vector-icons/Feather'


import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Repos from './src/pages/Repos';
import Seguidores from './src/pages/Seguidores';
import Seguindo from './src/pages/Seguindo';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


let store = createStore(Reducers);

const icons = {
  Home:{
    name: 'home'
  },
  Repo:{
    name: 'github'
  },
  Seguidores:{
    name: 'users'
  }, 
  Seguindo:{
    name: 'users'
  }
};


function Tabs(){
  return(
    <Provider store={store}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) =>{
            const {name} = icons[route.name];
            return <Icon name={name} color={color} size={30}/>
          }
        })}
        tabBarOptions={{
          style:{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingTop: 7
          },
          activeTintColor: '#131313'
        }}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Repo" component={Repos}/>
        <Tab.Screen name="Seguidores" component={Seguidores}/>
        <Tab.Screen name="Seguindo" component={Seguindo}/>
      </Tab.Navigator>
    </Provider>
  )
}


export default function App(){

  return(
    <Provider store={store}>
      <NavigationContainer>

        <Stack.Navigator initialRouteName="Login">

          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{headerShown: false}}
          />

          
          <Stack.Screen
            name="Repos"
            component={Repos}
          />

          <Stack.Screen
            name="Seguidores"
            component={Seguidores}
          />

          <Stack.Screen
            name="Seguindo"
            component={Seguindo}
          />

        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  )
}

