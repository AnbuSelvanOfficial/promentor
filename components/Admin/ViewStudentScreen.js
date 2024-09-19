import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const sampleStudents = [
    { name: 'Johnson ', regNo: '123456', dob: '01/01/2000', userId: 'johndoe' },
    { name: 'Smith', regNo: '123457', dob: '02/02/2000', userId: 'janesmith' },
    { name: 'Alice Joy', regNo: '123458', dob: '03/03/2000', userId: 'alicejohnson' },
    { name: 'David', regNo: '123459', dob: '04/04/2000', userId: 'bobbrown' },
    { name: 'Anbu', regNo: '123460', dob: '05/05/2000', userId: 'charliedavis' },
    { name: 'Kathiresan', regNo: '123461', dob: '06/06/2000', userId: 'davidevans' },
    { name: 'Manikandan', regNo: '123462', dob: '07/07/2000', userId: 'evefoster' },
    { name: 'Riyas', regNo: '123463', dob: '08/08/2000', userId: 'frankgreen' },
    { name: 'Basith', regNo: '123464', dob: '09/09/2000', userId: 'gracehall' },
    { name: 'Boopathi', regNo: '123465', dob: '10/10/2000', userId: 'hankirving' },
];

const ViewStudentScreen = () => {
    const renderItem = ({ item }) => (
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
                <Text style={[styles.cell, styles.headerText]}>UserId</Text>
            </View>
            <FlatList
                data={sampleStudents}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    header: {
        marginTop: 60,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    row: {
        marginTop: 10,
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

export default ViewStudentScreen;
