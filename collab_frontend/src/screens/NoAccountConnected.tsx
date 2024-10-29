import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


type NoAccountConnectedNavigationProp = StackNavigationProp<RootStackParamList, 'ProfilScreen'>;

interface Props {
    navigation: NoAccountConnectedNavigationProp;
}

const NoAccountConnected: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.containerNoAcc}>

    
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Icon name="person-circle" size={70} color="black" />
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>No account found</Text>
            </View>

            <View style={{ marginVertical: 60 }}>


                <TouchableOpacity style={styles.NoAccSignInBtn} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Sign In</Text>
                    <Icon name="enter" size={25} color="black" />
                </TouchableOpacity>

                <View style={styles.lineContainer}>
                    <View style={[styles.gradientLine, { marginRight: 10 }]} />
                    <Text style={styles.orText}>Or</Text>
                    <View style={[styles.gradientLine, { marginLeft: 10 }]} />

                </View>
                <TouchableOpacity style={styles.NoAccSignUpBtn} onPress={() => navigation.navigate('Login')} >
                    <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>Sign up</Text>
                    <Icon name="person-add" size={25} color="white" />
                </TouchableOpacity>



            </View>


        </View>
    );
};

export default NoAccountConnected;
