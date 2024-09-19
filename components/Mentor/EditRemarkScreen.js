import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const EditRemarkScreen = () => {
    const [selectedStudent, setSelectedStudent] = useState('');
    const [remark, setRemark] = useState('');

    const handleSubmit = () => {
        if (selectedStudent && remark) {
            Alert.alert(
                'Remark Submitted',
                `Remark for student ${selectedStudent}: ${remark}`,
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );
            // Additional logic, such as sending the remark to a server, can be added here
        } else {
            Alert.alert('Error', 'Please select a student and enter a remark');
        }
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Remark</Text>
            <View style={styles.pickerContainer}>
                <Text>Select Student:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedStudent}
                    onValueChange={(itemValue) => setSelectedStudent(itemValue)}
                >
                    <Picker.Item label="Select Student" value="" />
                    <Picker.Item label="John Doe" value="John Doe" />
                    <Picker.Item label="Jane Smith" value="Jane Smith" />
                    {/* Add other students here */}
                </Picker>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Enter Remark"
                onChangeText={(text) => setRemark(text)}
                value={remark}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        marginTop: 100,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    pickerContainer: {
        marginBottom: 20,
    },
    picker: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default EditRemarkScreen;
