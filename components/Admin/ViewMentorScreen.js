import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const sampleStudents = [
    { name: 'Sudha', staffId: '123456', department: 'MCA', userId: 'Sudha@MCA' },
    { name: 'Prema', staffId: '123456', department: 'MCA', userId: 'Prema@MCA' },
    { name: 'Siva Priya', staffId: '123456', department: 'MCA', userId: 'Sivapriya@MCA' },
    { name: 'Mary Joycy', staffId: '123456', department: 'MCA', userId: 'Maryjoycy@MCA' },
    { name: 'Shenbagam', staffId: '123456', department: 'MCA', userId: 'Shenbagam@MCA' },
];

const ViewMentorScreen = () => {
    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.staffId}</Text>
            <Text style={styles.cell}>{item.department}</Text>
            <Text style={styles.cell}>{item.userId}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.cell, styles.headerText]}>Name</Text>
                <Text style={[styles.cell, styles.headerText]}>StaffId</Text>
                <Text style={[styles.cell, styles.headerText]}>Department</Text>
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

export default ViewMentorScreen;
