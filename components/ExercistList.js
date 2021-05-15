import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const ExercistList = ({exercises, getDetails}) => {
  const {colors} = useTheme(0);
  return (
    <FlatList
      keyExtractor={exercise => exercise.id}
      data={exercises}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.listItem}
          style={{backgroundColor: colors.backgroundColor}}
          onPress={() => getDetails(item)}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.info}>
              <Text style={{color: '#1b1717'}}>
                Muscle: {item.targetedMuscle}
              </Text>
              <Text style={{color: '#1b1717'}}>
                Equipment: {item.equipment}
              </Text>
            </View>
          </View>
          <Text>
            <Text style={{fontWeight: 'bold'}}>testRating:</Text> {item.rating}
          </Text>
          <View style={{backgroundColor: 'red'}}>
            <Icon name="user" size={25} color={color} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    alignItems: 'center',
  },
  info: {
    paddingHorizontal: 5,
    marginTop: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ExercistList;
