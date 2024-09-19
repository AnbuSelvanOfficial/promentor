import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const sampleStudents = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
];

const sampleMentors = [
    { id: 1, name: 'Shenbagam' },
{ id: 2, name: 'Sudha' },
{ id: 3, name: 'Mary Jocy' },
{ id: 3, name: 'Prema' },
{ id: 3, name: 'Siva Priya' },
];

const AssignMentorScreen = () => {
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedMentor, setSelectedMentor] = useState('');

    const assignMentor = () => {
        if (selectedStudent && selectedMentor) {
            Alert.alert(
                'Mentor Assigned',
                `Assigned mentor ${sampleMentors.find(mentor => mentor.id === selectedMentor).name} to student ${sampleStudents.find(student => student.id === selectedStudent).name}`,
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );
        } else {
            Alert.alert('Error', 'Please select both a student and a mentor');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Assign Mentor</Text>
            <View style={styles.pickerContainer}>
                <Text>Student:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedStudent}
                    onValueChange={(itemValue) => setSelectedStudent(itemValue)}
                >
                    <Picker.Item label="Select Student" value="" />
                    {sampleStudents.map((student) => (
                        <Picker.Item key={student.id} label={student.name} value={student.id} />
                    ))}
                </Picker>
            </View>
            <View style={styles.pickerContainer}>
                <Text>Mentor:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedMentor}
                    onValueChange={(itemValue) => setSelectedMentor(itemValue)}
                >
                    <Picker.Item label="Select Mentor" value="" />
                    {sampleMentors.map((mentor) => (
                        <Picker.Item key={mentor.id} label={mentor.name} value={mentor.id} />
                    ))}
                </Picker>
            </View>
            <TouchableOpacity style={styles.assignButton} onPress={assignMentor}>
                <Text style={styles.assignButtonText}>Assign Mentor</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    picker: {
        flex: 1,
        height: 40,
    },
    assignButton: {
        backgroundColor: '#37B3B3',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    assignButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default AssignMentorScreen;
