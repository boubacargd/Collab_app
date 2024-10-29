// src/screens/SignUpScreen.tsx
import React, { useState, useEffect } from 'react';
import styles from "../../Styles";
import { SafeAreaView, TouchableOpacity, View, Text, TextInput, Alert } from 'react-native';
import { RootStackParamList } from '../../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

interface Props {
    navigation: SignUpScreenNavigationProp;
}

const SignUpScreen: React.FC<Props> = ({ navigation }) => {

    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [activities, setActivities] = useState('');
    const [country, setCountry] = useState<string | null>(null);
    const [items, setItems] = useState<Array<{ label: string, value: string }>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                const sortedCountries = response.data
                    .map((country: any) => ({
                        label: `${country.name.common} (${country.cca2})`,
                        value: country.cca2,
                    }))
                    .sort((a, b) => a.label.localeCompare(b.label));

                setItems(sortedCountries);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
                setLoading(false);
            });
    }, []);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };


    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }
    
        const userData = {
            firstName,
            lastName,
            email,
            password,
            activities,
            country
        };
    
        try {
            const response = await axios.post('http://localhost:8080/api/public/signup', userData);
            console.log("User Data:", userData);
            console.log('User signed up successfully:', response.data);
            Alert.alert("Success", "User registered successfully!");
    
            const token = response.data.jwtToken; // Récupérer le token JWT depuis la réponse
    
            if (token) {
                await AsyncStorage.setItem('jwt_token', token); // Stocker le token dans AsyncStorage
                console.log("Token stored successfully");
    
                // Naviguer vers AddImgProfil ou une autre page après l'inscription
                navigation.navigate('AddImgProfil', { email });
            } else {
                console.error("No token found in response");
                Alert.alert("Error", "No token found. Please try again.");
            }
    
        } catch (error) {
            if (error.response) {
                console.log('Error status:', error.response.status);
                console.log('Error data:', error.response.data);
                console.log('Error headers:', error.response.headers);
            } else {
                console.error('Error without response:', error.message);
            }
            Alert.alert("Error", "Failed to sign up. Please try again.");
        }
    };
    
    
    
    
    

    return (
        <SafeAreaView style={styles.containerSignUp}>

            <View style={styles.logo}>
                <Text style={styles.logoFeat}>feat</Text><View style={styles.point}></View>
            </View>

            {step === 1 && (
                <View style={styles.formSignUp}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor="#6a6a6a"
                        value={firstName}
                        onChangeText={setFirstName}
                        style={styles.inputButton}
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={handleNextStep}>
                        <Text style={{ color: "white" }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            )}

            {step === 2 && (
                <View style={styles.formSignUp}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="#6a6a6a"
                        value={lastName}
                        onChangeText={setLastName}
                        style={styles.inputButton}
                    />
                    <View style={styles.navButtons}>
                        <TouchableOpacity onPress={handlePreviousStep}>
                            <Icon name="chevron-back-outline" size={23} color="#6a6a6a" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.singnUpButton} onPress={handleNextStep}>
                            <Text style={{ color: "white" }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {step === 3 && (
                <View style={styles.formSignUp}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="example@gmail.com"
                        placeholderTextColor="#6a6a6a"
                        value={email}
                        onChangeText={(text) => setEmail(text.toLowerCase())} style={styles.inputButton}
                    />
                    <View style={styles.navButtons}>
                        <TouchableOpacity onPress={handlePreviousStep}>
                            <Icon name="chevron-back-outline" size={23} color="#6a6a6a" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.singnUpButton} onPress={handleNextStep}>
                            <Text style={{ color: "white" }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {step === 4 && (
                <View style={styles.formSignUp}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#6a6a6a"
                        value={password}
                        onChangeText={setPassword}
                        style={styles.inputButton}
                    />
                    <View style={styles.navButtons}>
                        <TouchableOpacity onPress={handlePreviousStep}>
                            <Icon name="chevron-back-outline" size={23} color="#6a6a6a" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.singnUpButton} onPress={handleNextStep}>
                            <Text style={{ color: "white" }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {step === 5 && (
                <View style={styles.formSignUp}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#6a6a6a"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        style={styles.inputButton}
                    />
                    <View style={styles.navButtons}>
                        <TouchableOpacity  onPress={handlePreviousStep}>
                            <Icon name="chevron-back-outline" size={23} color="#6a6a6a" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.singnUpButton} onPress={handleNextStep}>
                            <Text style={{ color: "white" }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {step === 6 && (
                <View style={styles.formSignUp}>
                    <Text style={styles.label}>Your activities</Text>
                    <TextInput
                        placeholder="Your activities"
                        placeholderTextColor="#6a6a6a"
                        value={activities}
                        onChangeText={setActivities}
                        style={styles.inputButton}
                    />
                    <Text style={styles.label}>Country</Text>
                    {loading ? (
                        <Text>Loading countries...</Text>
                    ) : (
                        <RNPickerSelect
                            onValueChange={(value) => setCountry(value)}
                            items={items}
                            value={country}
                            style={{
                                inputIOS: styles.picker,
                                inputAndroid: styles.picker,
                                placeholder: styles.placeholder,
                            }}
                            placeholder={{ label: 'Select a country...', value: null }}
                        />
                    )}

                    <View style={styles.navButtons}>
                        <TouchableOpacity onPress={handlePreviousStep}>
                            <Icon name="chevron-back-outline" size={23} color="#6a6a6a" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.singnUpButton} onPress={handleSignUp}>
                            <Text style={{ color: "white" }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}


            <View style={styles.askView}>
                <Text >
                    Already have an account?{'  '}
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.signUpText}>Sign In</Text>
                    </TouchableOpacity>
                </Text>
            </View>
            <View style={styles.line} />

        </SafeAreaView>
    );
};

export default SignUpScreen;
