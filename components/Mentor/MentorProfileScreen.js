import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MentorProfileScreen = () => {
    // Sample mentor data
    const mentorData = {
        name: 'Sudha',
        staffId: '123456',
        department: 'MCA',
        userId: 'johndoe',
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mentor Profile</Text>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{mentorData.name}</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Staff ID:</Text>
                <Text style={styles.value}>{mentorData.staffId}</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Department:</Text>
                <Text style={styles.value}>{mentorData.department}</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>User ID:</Text>
                <Text style={styles.value}>{mentorData.userId}</Text>
            </View>
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
        textAlign: 'center',
    },
    profileInfo: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        width: 120,
    },
    value: {
        flex: 1,
    },
});

export default MentorProfileScreen;
