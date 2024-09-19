import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MentorHomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.button}   onPress={() => navigation.navigate("MentorViewStudent")}>
                <Text style={styles.buttonText}>View Students</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}   onPress={() => navigation.navigate("EditRemark")}>
                <Text style={styles.buttonText}>Edit Remarks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}   onPress={() => navigation.navigate("MentorProfile")}>
                <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    button: {
        backgroundColor: 'black',
        padding: 15,
    
        marginTop: 20,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default MentorHomeScreen;
