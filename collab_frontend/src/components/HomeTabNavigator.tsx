import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

import HomePageScreen from '../screens/Home/HomePageScreen';
import ProfilScreen from '../screens/Profil/ProfilScreen';
import SignUpScreen from '../screens/Auth/SignUp/SignUpScreen';
import LoginScreen from '../screens/Auth/LoginScreen';

const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
    return (

        <Tab.Navigator
            initialRouteName="HomePage"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { height: 60, backgroundColor: 'red', borderTopWidth: 0.5, borderTopColor: '#ccc' },
            }}
        >
            <Tab.Screen
                name="HomePage"
                component={HomePageScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-outline" color={"black"} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={SignUpScreen}  // Remplacez par votre composant de chat si nécessaire
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="chatbubble-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="add-circle-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={SignUpScreen}  // Remplacez par votre composant de notifications si nécessaire
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="notifications-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfilScreen"
                component={ProfilScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}

export default HomeTabNavigator;

