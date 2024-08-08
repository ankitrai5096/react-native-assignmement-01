import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors } from './../constants/Colors';

const NavigationButtons = ({ onPrevious, onNext }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button_1} onPress={onPrevious}>
                <Text style={styles.buttonText_1}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_2} onPress={onNext}>
                <Text style={styles.buttonText_2}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,

    },
    button_1: {
        backgroundColor: Colors.white,
        width: 160,
        height: 50,
        borderRadius: 25,
        borderColor: Colors.black,
        borderWidth: 1,
    },

    button_2: {
        backgroundColor: Colors.black,
        width: 160,
        height: 50,
        borderRadius: 25,
        borderColor: Colors.white,
        borderWidth: 1,
    },
    buttonText_1: {
        fontSize: 20,
        padding: 10,
        color: Colors.black,
        textAlign: 'center',
        fontWeight: 'bold',

    },

    buttonText_2: {
        fontSize: 20,
        padding: 10,
        color: Colors.white,
        textAlign: 'center',
        fontWeight: 'bold',

    },

});

export default NavigationButtons;
