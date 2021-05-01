import React from 'react';
import Stars from './Stars';

import {
  StyleSheet, ScrollView, View, Text, TouchableOpacity
} from 'react-native';


const CourseDetails = ({ route: { params },navigation }) => {

  const addReview = () => {
    navigation.navigate('Add Review');
  };

  const { course } = params;
  console.log(params)
  return (
    <ScrollView style={styles.root}>
      <View >
        <Text style={styles.name}>{course.namw}</Text>
        <Text style={styles.faculty}>{course.code}</Text>
        <Text style={styles.faculty}>{course.faculty}</Text>
        <Stars style={styles.rating} rating={course.rating} />
        <TouchableOpacity style={styles.button} onPress={addReview}>
          <Text style={styles.buttonText}>Add Review</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoHeader: {
    flexDirection: 'row',
    padding: 20
  },
  info: {
    marginTop: 20,
  },
  name: {
    fontSize: 24,
  },
  faculty: {
    color: 'grey',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default CourseDetails;
