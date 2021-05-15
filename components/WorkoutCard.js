import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WorkoutCard = ({title, description, time, color}) => {
  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: `${color}`,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
        width: '90%',
        height: 200,
        shadowColor: 'gray',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 5,
        shadowRadius: 5,
      }}>
      <View style={{margin: 20}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            color: 'white',
          }}>
          {title}
        </Text>
        <Text
          style={{
            // width: '80%',
            color: 'black',
            fontWeight: '900',
            fontSize: 11,
            textAlign: 'center',
            marginTop: 10,
          }}>
          {description}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          paddingVertical: 15,
          paddingHorizontal: 50,
          borderRadius: 30,
          marginTop: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="play" />
          <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 'bold'}}>
            {time} min
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutCard;
