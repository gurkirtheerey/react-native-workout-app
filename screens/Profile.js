import React, {Component} from 'react';
import {useContext} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import UserContext from '../context/UserContext';

const Profile = () => {
  const {user} = useContext(UserContext);
  console.log('USER: ', user);

  return (
    <SafeAreaView>
      <Text> Portfolio </Text>
    </SafeAreaView>
  );
};

export default Profile;
