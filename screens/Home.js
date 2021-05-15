import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Item from '../components/Item';
import {data} from '../data/data';
import {useContext} from 'react';
import UserContext from '../context/UserContext';
import WorkoutCard from '../components/WorkoutCard';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

const Home = ({navigation}) => {
  const {colors} = useTheme();
  const {user} = useContext(UserContext);

  return (
    <SafeAreaView
      style={styles.container}
      style={{backgroundColor: colors.background}}>
      <Header />
      <View>
        <View>
          <Text style={styles.text}>Select Muscle</Text>
        </View>
        <FlatList
          horizontal
          data={data}
          renderItem={({item}) => <Item item={item} navigation={navigation} />}
          keyExtractor={item => item.id}
        />
      </View>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <WorkoutCard
          title="Gurkirt's Chest Day 🏋️‍♂️"
          description="Get started with one of his favorite chest day worlouts!"
          time="45"
          color={colors.primary}
        />
        <WorkoutCard
          title="Sunshine's Therapeutic Yoga 🧘‍♀️"
          description="Unwind with a soothing yoga session with our instructor!"
          time="25"
          color={colors.secondary}
        />
        <WorkoutCard
          title="Gurkirt's Chest Day 🏋️‍♂️"
          description="Get started with one of his favorite chest day worlouts!"
          time="45"
          color={colors.primary}
        />
        <WorkoutCard
          title="Sunshine's Therapeutic Yoga 🧘‍♀️"
          description="Unwind with a soothing yoga session with our instructor!"
          time="25"
          color="#ffadad"
        />
        <WorkoutCard
          title="Gurkirt's Chest Day 🏋️‍♂️"
          description="Get started with one of his favorite chest day worlouts!"
          time="45"
          color={colors.primary}
        />
        <WorkoutCard
          title="Sunshine's Therapeutic Yoga 🧘‍♀️"
          description="Unwind with a soothing yoga session with our instructor!"
          time="25"
          color="#ffadad"
        />
        <WorkoutCard
          title="Gurkirt's Chest Day 🏋️‍♂️"
          description="Get started with one of his favorite chest day worlouts!"
          time="45"
          color={colors.primary}
        />
        <WorkoutCard
          title="Sunshine's Therapeutic Yoga 🧘‍♀️"
          description="Unwind with a soothing yoga session with our instructor!"
          time="25"
          color="#ffadad"
        />
        <WorkoutCard
          title="Gurkirt's Chest Day 🏋️‍♂️"
          description="Get started with one of his favorite chest day worlouts!"
          time="45"
          color={colors.primary}
        />
        <WorkoutCard
          title="Sunshine's Therapeutic Yoga 🧘‍♀️"
          description="Unwind with a soothing yoga session with our instructor!"
          time="25"
          color="#ffadad"
        />
        <WorkoutCard
          title="Gurkirt's Chest Day 🏋️‍♂️"
          description="Get started with one of his favorite chest day worlouts!"
          time="45"
          color={colors.primary}
        />
        <WorkoutCard
          title="Sunshine's Therapeutic Yoga 🧘‍♀️"
          description="Unwind with a soothing yoga session with our instructor!"
          time="25"
          color="#ffadad"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    margin: 20,
    width: '50%',
    fontWeight: 'bold',
    fontSize: 44,
    lineHeight: 50,
  },
});

export default Home;
