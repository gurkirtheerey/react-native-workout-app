import React, {useContext, useEffect, useState} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import UserContext from '../context/UserContext';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';

const Profile = ({navigation}) => {
  const {user, setUser} = useContext(UserContext);
  const [exercises, setExercises] = useState([]);
  const [view, setView] = useState('exercises');

  const logout = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser(null);
      navigation.navigate('Login');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('user has not signed in yet');
      } else {
        console.log('some other error');
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const workouts = await firestore().collection('Workouts').get();
        if (workouts && workouts.docs) {
          setExercises(workouts.docs);
        }
      } catch (e) {
        console.log('ERROR: ---------', e);
      }
    })();
  }, []);

  let jsx = user ? (
    <SafeAreaView
      style={{
        width: '100%',
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 0.4,
          width: '100%',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <TouchableOpacity
          style={{
            flex: 0.2,
            alignSelf: 'flex-end',
            justifyContent: 'center',
            marginHorizontal: 20,
          }}
          onPress={() => logout()}>
          <Icon name="sign-out" size={30} color="#000" />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              textAlign: 'center',
            }}>
            {user.name}
          </Text>
          <Image
            source={{uri: user.photo}}
            style={{
              resizeMode: 'contain',
              height: 110,
              width: 110,
              borderRadius: 100,
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 10,
                color: '#585858',
                textAlign: 'center',
              }}>
              {user.email}
            </Text>
          </View>
        </View>
      </View>
      <View style={{width: '100%', flex: 0.6, backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => setView('exercises')}>
            <Text
              style={{
                fontSize: 16,
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                paddingLeft: 10,
                paddingVertical: 10,
              }}>
              Saved Exercises
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setView('workouts')}>
            <Text
              style={{
                fontSize: 16,
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                paddingLeft: 10,
                paddingVertical: 10,
              }}>
              Saved Workouts
            </Text>
          </TouchableOpacity>
        </View>
        {view === 'exercises' ? (
          exercises && exercises.length ? (
            <ScrollView style={{width: '100%', marginTop: 10, flex: 0.3}}>
              {exercises.map(exercise => {
                const ex = exercise.data();
                return (
                  <TouchableOpacity
                    key={ex.id}
                    style={{
                      paddingHorizontal: 10,
                      flex: 1,
                      flexDirection: 'row',
                      height: 80,
                      justifyContent: 'space-between',
                      borderBottomWidth: 1,
                      alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('Details', {item: ex})}>
                    <View>
                      <Text>{ex.name}</Text>
                      <View>
                        <Text style={{color: 'gray'}}>
                          Muscle: {ex.targetedMuscle}
                        </Text>
                        <Text style={{color: 'gray'}}>
                          Equipment: {ex.equipment}
                        </Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={{fontWeight: 'bold', marginRight: 2}}>
                        Rating:
                      </Text>
                      <Text style={{marginRight: 5}}>{ex.rating}</Text>
                      <Icon name="arrow-right" size={15} />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          ) : (
            <Text style={{textAlign: 'center', fontSize: 16}}>
              It's empty... find some exercises from our catalog!
            </Text>
          )
        ) : (
          <Text style={{textAlign: 'center', fontSize: 16}}>
            It's empty... hit the plus icon to create a workout!
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: '88%',
          left: '75%',
          padding: 25,
          borderRadius: 50,
        }}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  ) : null;

  return <SafeAreaView style={styles.container}>{jsx}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
});

export default Profile;
