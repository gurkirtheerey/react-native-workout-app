import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import UserContext from '../context/UserContext';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {useContext} from 'react';
import {useEffect, useState} from 'react';

const Login = ({navigation}) => {
  const {user, setUser} = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (user) {
    navigation.replace('Home');
    // }
    // setLoading(false);
  }, [user]);

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '151765368486-im7ib8iafp4ksmc8ugnrhbr00oenn2ae.apps.googleusercontent.com',
  //   });
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const {user} = await GoogleSignin.signInSilently();
  //       setUser(user);
  //       setLoading(false);
  //     } catch (error) {
  //       if (error.code === statusCodes.SIGN_IN_REQUIRED) {
  //         console.log('user has not signed in yet');
  //       } else {
  //         console.log('some other error');
  //       }
  //     }
  //   })();
  // }, []);

  const onGoogleButtonPress = async () => {
    try {
      const {user} = await GoogleSignin.signIn();
      setUser(user);
      console.log('NOTIN');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('CANCELLED');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN PROGRESS', error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('SERVICES UNAVAILABLE');
      } else {
        // some other error happened

        console.log('SOMETHING IS UNAVAILABLE', error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Fit-IT 💪</Text>
        <Text style={styles.paragraph}>Make the most of your workout!</Text>
        {loading && (
          <ActivityIndicator
            style={{marginTop: 25}}
            size="large"
            color="black"
          />
        )}
      </View>
      {/* <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleButtonPress}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 42,
  },
  paragraph: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
