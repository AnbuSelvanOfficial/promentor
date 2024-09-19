import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const MentorViewStudentScreen = () => {
    const sampleStudents = [
        { id: 1, name: 'John Doe', regNo: '123456', dob: '01/01/2000', userId: 'johndoe' },
        { id: 2, name: 'Jane Smith', regNo: '123457', dob: '02/02/2000', userId: 'janesmith' },
        { id: 3, name: 'Alice Johnson', regNo: '123458', dob: '03/03/2000', userId: 'alicejohnson' },
    ];

    const renderStudentItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.regNo}</Text>
            <Text style={styles.cell}>{item.dob}</Text>
            <Text style={styles.cell}>{item.userId}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.cell, styles.headerText]}>Name</Text>
                <Text style={[styles.cell, styles.headerText]}>RegNo</Text>
                <Text style={[styles.cell, styles.headerText]}>Date of Birth</Text>
                <Text style={[styles.cell, styles.headerText]}>User ID</Text>
            </View>
            <FlatList
                data={sampleStudents}
                renderItem={renderStudentItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    header: {
        marginTop: 100,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
    },
    cell: {
        flex: 1,
        padding: 5,
        textAlign: 'center',
    },
    headerText: {
        fontWeight: 'bold',
    },
});

export default MentorViewStudentScreen;
