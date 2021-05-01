import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
const star = (props) => {

    const clicked = () => {
        if (props.starClick != 'undefined') {
            return () => {
                props.starClick(props.rating, 'click');
                // return props.setRating(props.rating)
            };
        }
    }
    return (
        <TouchableOpacity onPress={clicked()}>
            <Text style={{ color: props.color, fontSize: 40 }}
            >{'\u2605'}</Text>
        </TouchableOpacity>
    );
}

export default star;