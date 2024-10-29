import React, { useEffect, useState } from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from "../Styles";
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import ProjectList from './components/ProjectList';
import UserStats from './components/UserStats';
import UserBio from './components/UserBio';
import UserNameProfil from './components/UserNameProfil';
import { RootStackParamList } from '../../navigation/types';
import NoAccountConnected from '../NoAccountConnected';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ProfilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProfilScreen'>;

interface Props {
    navigation: ProfilScreenNavigationProp;
}

const { width } = Dimensions.get("window");
const userImageHeight = 300;

const ProfilScreen: React.FC<Props> = ({ navigation }) => {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useSharedValue(0);

    const [userInfo, setUserInfo] = useState<{ name: string; country: string; imageUrl: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [navigating, setNavigating] = useState(false);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollOffset.value = event.contentOffset.y;
    });

    const isValidJWT = (token: string) => {
        return token && token.split('.').length === 3;
    };

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('jwt_token');

            if (!token) {
                setNavigating(true);
                return; // Sortie de la fonction
            }

            if (isValidJWT(token)) {
                await fetchUserInfo(token);
            } else {
                setNavigating(true);
            }
        };

        checkToken();
    }, [navigation]);

    useEffect(() => {
        if (navigating) {
            navigation.navigate('NoAccountConnected');
        }
    }, [navigating, navigation]);

    const fetchUserInfo = async (token: string) => {
        setLoading(true);

        try {
            const decodedToken = jwtDecode(token);
            const userEmail = decodedToken.sub; 

            const response = await axios.get('http://localhost:8080/api/user/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: { email: userEmail }
            });

            const imageUrl = response.data.imageUrl 
                ? `http://localhost:8080/uploads/${response.data.imageUrl}` 
                : "https://as2.ftcdn.net/v2/jpg/06/85/17/31/1000_F_685173149_MsBL8hirpNeAglmgEKBXXPNk5dk6SA45.jpg";

            setUserInfo({
                name: `${response.data.firstName} ${response.data.lastName}`,
                country: response.data.country || "",
                imageUrl: imageUrl  
            });
        } catch (error) {
            console.error('Fetch user info error:', error);
        } finally {
            setLoading(false);
        }
    };

    const imageAnimatedStyle = useAnimatedStyle(() => {
        const height = interpolate(
            scrollOffset.value,
            [0, userImageHeight],
            [userImageHeight, 1]
        );

        const opacity = interpolate(
            scrollOffset.value,
            [0, userImageHeight],
            [1, 0]
        );

        return {
            height,
            opacity,
        };
    });

    if (loading) {
        return <ActivityIndicator size="small" color="black" style={{ margin: "auto" }} />;
    }
    

    if (userInfo) {
        const { name, country, imageUrl } = userInfo;

        return (
            <View style={styles.containerProfil}>
                <Animated.ScrollView
                    ref={scrollRef}
                    scrollEventThrottle={0}
                    onScroll={scrollHandler}
                    style={{ flex: 1, zIndex: 1, marginTop: 50 }}
                >
                    <Animated.Image
                        source={{ uri: imageUrl }}
                        style={[{
                            width,
                            height: userImageHeight,
                        }, imageAnimatedStyle]}
                        onError={(error) => {
                            console.error('Error loading image:', error.nativeEvent.error);
                        }}
                    />
                    <View style={styles.userDetails}>
                        <UserNameProfil
                            name={name}
                            country={country}
                        />
                        <UserStats />
                        <UserBio />
                        <ProjectList />
                    </View>
                </Animated.ScrollView>
            </View>
        );
    }

    return null;
};

export default ProfilScreen;
