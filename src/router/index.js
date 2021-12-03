import React from 'react';
import {Login, UserProfile, UpdateProfile, Home, History, Leaderboard, SetorSampah, DaurUlang} from '../pages';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={History} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">      
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SetorSampah"
        component={SetorSampah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DaurUlang"
        component={DaurUlang}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
