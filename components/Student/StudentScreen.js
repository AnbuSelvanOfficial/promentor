import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentScreen = () => {
    // Sample student data
    const studentData = {
        name: 'Jane Smith',
        regNo: '123456',
        department: 'Computer Science',
        userId: 'janesmith',
    };

    // Sample remarks
    const remarks = [
        { heading: 'Remark 1', statement: 'Lorem ipsum dolor sit amet.' },
        { heading: 'Remark 2', statement: 'Consectetur adipiscing elit.' },
        { heading: 'Remark 3', statement: 'Sed do eiusmod tempor incididunt.' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Student Profile</Text>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{studentData.name}</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Reg No:</Text>
                <Text style={styles.value}>{studentData.regNo}</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Department:</Text>
                <Text style={styles.value}>{studentData.department}</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>User ID:</Text>
                <Text style={styles.value}>{studentData.userId}</Text>
            </View>
            <Text style={styles.remarksTitle}>Remarks</Text>
            {remarks.map((remark, index) => (
                <View key={index} style={styles.remark}>
                    <Text style={styles.remarkHeading}>{remark.heading}</Text>
                    <Text style={styles.remarkStatement}>{remark.statement}</Text>
                </View>
            ))}
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
    remarksTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    remark: {
        marginBottom: 10,
    },
    remarkHeading: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    remarkStatement: {},
});

export default StudentScreen;
