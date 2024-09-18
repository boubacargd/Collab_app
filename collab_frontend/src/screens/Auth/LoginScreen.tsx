import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import styles from "../Styles";


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
    navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.containerLogin} >

            <View style={styles.formLogin}>

                <View style={styles.logo}>
                    <Text style={styles.logoFeat}>Featuring</Text>
                </View>

                <TextInput placeholder="Email"
                    placeholderTextColor="#6a6a6a"
                    style={styles.inputButton} />

                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#6a6a6a"
                    style={styles.inputButtonPassword} />

                    <TouchableOpacity style={styles.passwordForget}><Text style={{fontWeight:"300", fontSize:12}}>Password Forget?</Text></TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomePage')}>
                    <Text style={{ color: "white" }}>Connect</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.line} />

            <View style={styles.askView}>
                    <Text >
                        Don't have an account?{'  '}
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.signUpText}>Sign up</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
        </SafeAreaView>
    )
}

export default LoginScreen;
