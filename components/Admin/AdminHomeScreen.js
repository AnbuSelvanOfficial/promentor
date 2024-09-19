import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

function AdminHomeScreen({ navigation }) {  
    return (
        
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
            
            <View style={styles.Container}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("AddStudent")}>
                    <Text style={styles.ButtonText}>Add Student</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Container}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("AddMentor")}>
                    <Text style={styles.ButtonText}>Add Mentor</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Container}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("ViewStudent")}>
                    <Text style={styles.ButtonText}>View Student</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Container}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("ViewMentor")}>
                    <Text style={styles.ButtonText}>View Mentor</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Container}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("AssignMentor")}>
                    <Text style={styles.ButtonText}>Assign Mentor</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    Container: {
        marginTop: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Button: {
        width: '80%',
        backgroundColor: '#37B3B3',
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        padding: 10,
    },
    ButtonText: {
        fontSize: 20,
        lineHeight: 18 * 1.4,
        marginHorizontal: 60,
        color: 'white',
    },
});

export default AdminHomeScreen;
