import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, AsyncStorage } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { State } from 'react-native-gesture-handler';

import Rating from './Rating/Rating';
import { Value } from 'react-native-reanimated';

const AddReview = () => {


  const [state, setState] = useState({ name: '', rating: 0, comment: '', submtting: false });

  const nameChangeHandler = (n) => {
    setState(prev => ({ ...prev, name: n }));
  }

  const inputValue = async () => {
    const value = await AsyncStorage.getItem('name');
    let arr = value.split(" ");
    let temp = new Set(arr);
    let retu = "first name";
    if (temp.has(params.name)) {
      retu = params.name;
    }
    return retu;
  }

  const store = async (set) => {
    let temp = Array.from(set).join(' ');
    await AsyncStorage.setItem('name', temp);
  }
  const save = async () => {
    const value = await AsyncStorage.getItem('name');
    console.log(value)
    if (value == null) {
      let temp = new Set(); temp.add(state.name);
      store(temp);
    } else {
      let arr = value.split(" ");
      let temp = new Set(arr);
      if (!temp.has(state.name)) {
        temp.add(state.name);
        store(temp);
      }
    }
  }
  const submitHandler = () => {
    save();
    setState(prev => ({ ...prev, submtting: true }));
    setTimeout(() => {
      setState(prev => ({ ...prev, submtting: false }));
      navigation.navigate('CourseDetail');
    }, 1000);
  }

  return (
    <View style={styles.root}>
      <Text style={styles.addReview}>Add Review</Text>
      <TextInput value={inputValue()} style={styles.input} onChangeText={text => nameChangeHandler(text)} />
      <Text style={styles.addReview}>Your Rating</Text>
      <Rating />
      <TextInput style={styles.textarea} placeholder="Review"></TextInput>
      <Spinner
        visible={state.submtting}
        textStyle={styles.spinnerTextStyle}
      />
      <TouchableOpacity>
        <Text style={styles.submitButton} >Add Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
  },
  textarea: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    height: 120
  },
  spinnerTextStyle: {
    width: 100,
    height: 100
  },
  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0066cc',
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fffeff',
    textAlign: 'center',
  },
});

export default AddReview;
