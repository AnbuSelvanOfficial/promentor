import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";

function AddMentorScreen({ navigation }) {
    const [name, setName] = useState("");
    const [staffId, setStaffId] = useState("");
    const [department, setDepartment] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        // Add your submit logic here
        Alert.alert("Mentor Added", `Name: ${name}\nStaffId: ${staffId}\nDepartment: ${department}\nUserId: ${userId}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Add Mentor</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="StaffId"
                value={staffId}
                onChangeText={setStaffId}
            />
            <TextInput
                style={styles.input}
                placeholder="Department"
                value={department}
                onChangeText={setDepartment}
            />
            <TextInput
                style={styles.input}
                placeholder="UserId"
                value={userId}
                onChangeText={setUserId}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#37B3B3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default AddMentorScreen;
