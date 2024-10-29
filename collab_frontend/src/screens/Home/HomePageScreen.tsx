import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import { RootStackParamList } from '../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import HomeTabNavigator from "../../components/HomeTabNavigator";
import styles from "../Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

type HomePageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomePage'>;

interface Props {
    navigation: HomePageScreenNavigationProp;
}

const HomePageScreen: React.FC<Props> = ({ navigation }) => {

    const handleLogout = async () => {
        try {
            const token = await AsyncStorage.getItem('jwt_token');
            if (token) {
                // Appelez le point de terminaison de déconnexion
                await axios.post('http://localhost:8080/api/public/logout', {}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }
            // Supprimez le token du stockage local après déconnexion
            await AsyncStorage.removeItem('jwt_token');
            // Naviguez vers l'écran de connexion ou un autre écran approprié
            navigation.navigate('Login');
        } catch (error) {
            console.error("Erreur lors de la déconnexion:", error);
        }
    };
    
    return (

        <View style={{flex:1, justifyContent:"center"}}>
            
            <View style={styles.containerHomePage}>
                <View>
                    <Text style={{ margin: "auto", fontSize: 25, fontWeight: "800" }}>
                        Welcome to the Home page
                    </Text>
                </View>


                {/* Bouton de déconnexion */}
                <View style={styles.logoutButtonContainer}>
                    <Button title="Déconnexion" onPress={handleLogout} />
                </View>

            </View>


        </View>

    );
};

export default HomePageScreen;
