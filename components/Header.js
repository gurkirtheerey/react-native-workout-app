import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={{
        alignItems: 'flex-end',
        margin: 20,
      }}>
      <Icon name="bars" size={30} />
    </TouchableOpacity>
  );
};

export default Header;
