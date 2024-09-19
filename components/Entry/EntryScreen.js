import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

function EntryScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
            <View style={styles.headerContainer}>
                <Text style={styles.title}>PROJECT MENTOR </Text>
                
            </View>
            <View style={styles.headerContainer2}>
            <Text style={styles.title2}>You are!!!</Text>
            </View>
            
            <View style={styles.signinContainer}>
                <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate("AdminLogin")}>
                    <Text style={styles.signinButtonText}>ADMIN</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.signinContainer}>
                <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate("MentorLogin")}>
                    <Text style={styles.signinButtonText}>MENTOR</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.signinContainer}>
                <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate("StudentLogin")}>
                    <Text style={styles.signinButtonText}>STUDENT</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        marginTop: 200,
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerContainer2: 
    {
      marginHorizontal: 20,
      justifyContent: 'center',
      paddingVertical: 0,
      flexDirection: 'row',
      alignItems: 'center',
  },
    title: {
        fontSize: 30,
        lineHeight: 20 * 3.4,
        color: 'black',
        fontWeight: '600',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    title2: {
      fontSize: 20,
      lineHeight: 20 * 3.4,
      color: 'black',
      fontWeight: '600',
      marginHorizontal: 20,
      alignItems: 'center',
  },
    signinContainer: {
        marginTop: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    signinButton: {
        width: 200,
        backgroundColor: '#37B3B3',
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    signinButtonText: {
        fontSize: 20,
        lineHeight: 18 * 1.4,
        color: 'white',
    },
});

export default EntryScreen;
