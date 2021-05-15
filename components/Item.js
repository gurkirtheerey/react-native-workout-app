import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Item = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate('Exercises', {
          screen: 'Exercises',
          params: {item},
        })
      }>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  itemText: {
    fontStyle: 'italic',
    color: 'black',
    fontWeight: '800',
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
});

export default Item;
