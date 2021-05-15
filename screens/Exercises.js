import {useTheme} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {database} from '../data/data';
import Icon from 'react-native-vector-icons/FontAwesome';

const Exercises = ({route, navigation}) => {
  const {item} = route.params;
  const [exercises, setExercises] = useState([]);
  const {colors} = useTheme();

  useEffect(() => {
    const items = database.find(i => item.id === i.id);
    if (items) {
      setExercises(items.exercises);
    }
  }, [exercises]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', {item})}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.info}>
            <Text style={{color: 'gray'}}>Muscle: {item.targetedMuscle}</Text>
            <Text style={{color: 'gray'}}>Equipment: {item.equipment}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', marginRight: 2}}>Rating:</Text>
          <Text style={{marginRight: 5}}>{item.rating}</Text>
          <Icon name="arrow-right" size={15} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={styles.container}
      style={{backgroundColor: colors.background}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 40,
          marginVertical: 10,
          marginHorizontal: 5,
        }}>
        Exercises
      </Text>
      {exercises && exercises.length ? (
        <FlatList
          keyExtractor={exercise => exercise.id}
          data={exercises}
          renderItem={renderItem}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', color: 'red'}}>
            No exercises found...
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
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

export default Exercises;
