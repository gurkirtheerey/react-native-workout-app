/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Exercises from './screens/Exercises';
import Details from './screens/Details';
import {useState} from 'react';
import UserContext from './context/UserContext';
import Login from './screens/Login';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from './screens/Profile';
Icon.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    primary: '#9bf6ff',
    secondary: '#ffadad',
    background: '#fff',
    text: '#000',
    gray: 'gray',
  },
};

const tabOptions = {
  activeTintColor: 'lightgray',
  fontWeight: 'bold',
  style: {
    borderTopWidth: 0,
    height: 100,
  },
};

const Homepage = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Homepage" component={Home} />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={25} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <Tab.Navigator tabBarOptions={tabOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const ExerciseScreen = () => {
  return (
    <Tab.Navigator tabBarOptions={tabOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={Exercises}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="list" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Exercises" component={ExerciseScreen} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
