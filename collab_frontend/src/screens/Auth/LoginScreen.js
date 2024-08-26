import React from "react"
import { StyleSheet, SafeAreaView, TouchableOpacity, View, Text, Image, TextInput } from "react-native";


export default function LoginScreen () {
    return (
        <SafeAreaView>
            <Text>Login Page</Text>
            <TextInput placeholder="email" 
            style={styles.inputButton} />

            <TextInput placeholder="password" 
            style={styles.inputButton} />    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputButton: {
        fontSize:20,
        fontWeight:"bold",
        width:"50%",
        borderWidth: 2,
        borderColor: "red",
        padding: 20,
        marginBottom: 30,
        borderBlockColor: "black"
    }
})