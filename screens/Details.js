import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useContext} from 'react';
import UserContext from '../context/UserContext';

const screen = Dimensions.get('screen');

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const {user} = useContext(UserContext);

  const saveExercise = async () => {
    const data = await firestore()
      .collection('Workouts')
      .add({
        name: item.name,
        id: item.id,
        rating: item.rating,
        level: item.level,
        userId: user.id,
      });
    if (data) {
      navigation.navigate('Exercises');
      alert(`Saved ${item.name}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text style={styles.header}>{item.name}</Text>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFjayUyMHdvcmtvdXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          }}
          style={styles.image}
        />
        <View style={styles.description}>
          <Text style={styles.text}>Equipment: {item.equipment}</Text>
          <Text style={styles.text}>Rating: {item.rating}</Text>

          <Text style={styles.info}>
            The Rickshaw is essentially a walk-in trap bar that's easier to
            load. It's more than just a trap bar though. Can be used for shrugs,
            deadlifts, squats, bent-over rows, handstand push-ups, bench dips,
            and incline push-ups. Comfortable handles make the Rickshaw great
            for farmers walk workouts. Loadable weight sleeves bolt to the main
            frame to allow for compact shipping and quick, simple assembly upon
            arrival. • Wide base provides plenty of foot space during use. The
            Rickshaw design provides a safer deadlifting set-up than using a
            traditional barbell. This is great for those who are new to
            deadlifting as it significantly lowers the chance of injury by
            improper form that can occur with a standard barbell.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => saveExercise()}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    // flex: 0.7,
    width: '90%',
    height: screen.height / 1.5,
    borderRadius: 20,
    resizeMode: 'stretch',
  },
  description: {
    // flex: 0.2,
    marginTop: 20,
    width: '90%',
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  info: {
    color: 'white',
    marginTop: 10,
    fontWeight: '300',
    fontSize: 12,
  },
  button: {
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'red',
    marginTop: 20,
    padding: 15,
  },
  header: {
    fontWeight: 'bold',
    margin: 10,
    fontSize: 24,
    color: 'white',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    margin: 2,
  },
  backgroundVideo: {
    position: 'absolute',
    height: 200,
    width: 300,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Details;
