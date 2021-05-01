import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CourseList from './components/CoursesList';
import CourseDetails from './components/CourseDetails';
import AddReview from './components/AddReview';
import AboutUs from './components/About'

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Course List" component={CourseList} />
      <Stack.Screen name="Course_Details" component={CourseDetails} />
      <Stack.Screen name="Add Review" component={AddReview} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Course" component={Home}  />
          <Tab.Screen name="About" component={AboutUs} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
