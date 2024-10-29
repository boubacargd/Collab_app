import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, View, Text, Alert, TextInput } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../Styles";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
    navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter both email and password.");
            return;
        }

        try {
            // Remplacez `localhost` par l’adresse IP de votre machine ou `10.0.2.2` si vous êtes sur l’émulateur Android
            const response = await axios.post('http://localhost:8080/api/public/signin', { 
                email,
                password,
            });

            // Vérifiez si la réponse contient un token
            const token = response.data;
            if (!token) {
                throw new Error('Token is missing in the response.');
            }

            console.log('Login successful. Token:', token);

            // Stocker le token dans AsyncStorage
            await AsyncStorage.setItem('jwt_token', token);

            Alert.alert("Success", "Login successful!");
            navigation.navigate('HomePage');
        } catch (error) {
            // Afficher les détails de l'erreur pour un meilleur débogage
            if (axios.isAxiosError(error)) {
                console.error('Login error (Axios):', error.response?.data || error.message);
                Alert.alert("Error", `Login failed: ${error.response?.data || error.message}`);
            } else {
                console.error('Login error:', error);
                Alert.alert("Error", "Failed to login. Please check your credentials.");
            }
        }
    };

    return (
        <SafeAreaView style={styles.containerLogin}>
            <View style={styles.formLogin}>
                <View style={styles.logo}>
                    <Text style={styles.logoFeat}>feat</Text>
                    <View style={styles.point}></View>
                </View>

                <TextInput 
                    placeholder="Email"
                    placeholderTextColor="#6a6a6a"
                    style={styles.inputButton}
                    value={email}
                    onChangeText={(text) => setEmail(text.toLowerCase())} 
                />

                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#6a6a6a"
                    style={styles.inputButtonPassword}
                    value={password}
                    onChangeText={setPassword} 
                />

                <TouchableOpacity style={styles.passwordForget}>
                    <Text style={{ fontWeight: "300", fontSize: 12 }}>Password Forget?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={{ color: "white" }}>Connect</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.line} />

            <View style={styles.askView}>
                <Text>
                    Don't have an account?{'  '}
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signUpText}>Sign up</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
