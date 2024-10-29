// AddImgProfile.tsx
import React, { useState } from 'react';
import styles from "../../Styles";
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const AddImgProfile = ({ navigation, route }) => {
    const [image, setImage] = useState(null);
    const email = route.params.email; // Récupérer l'email passé en navigation

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert("Permission d'accès à la galerie requise !");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0]);
            await uploadImage(result.assets[0]); // Appeler la fonction d'upload
        }
    };

    const uploadImage = async (selectedImage) => {
        const token = await AsyncStorage.getItem('jwt_token'); // Récupérer le token
    
        // Vérifier que selectedImage a les propriétés nécessaires
        if (!selectedImage.uri) {
            Alert.alert("Erreur", "L'image sélectionnée n'est pas valide.");
            return;
        }
    
        // Créer un objet FormData
        const formData = new FormData();
        formData.append('file', {
            uri: selectedImage.uri,
            name: selectedImage.fileName || 'photo.jpg',
            type: selectedImage.type || 'image/jpeg',
        } as any); // Si TypeScript insiste, tu peux garder ce cast
    
        try {
            const response = await fetch('http://localhost:8080/api/images/upload', {
                method: 'POST',
                body: formData,
                headers: {
                    // 'Content-Type': 'multipart/form-data', // Laisser ce champ à la gestion par fetch
                    'Authorization': `Bearer ${token}`
                },
            });
    
            if (!response.ok) {
                const errorData = await response.text(); // Récupérer la réponse d'erreur
                console.error('Error response:', errorData); // Afficher le message d'erreur
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json(); // Supposons que le serveur renvoie JSON
            console.log('Image uploaded:', data);
            await updateProfileImage(email, data.imageUrl); // Utiliser l'URL renvoyée
            navigation.navigate('HomePage');
        } catch (error) {
            console.error('Error uploading image inscription:', error);
            Alert.alert("Erreur lors de l'upload de l'image.", error.message);
        }
    };
    

    const updateProfileImage = async (email, imageUrl) => {
        const token = await AsyncStorage.getItem('jwt_token'); // Récupérer le token
    
        try {
            const response = await fetch('http://localhost:8080/api/public/user/updateProfileImage', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', // Indiquer le type de contenu
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ email, imageUrl }), // Passer les paramètres sous forme JSON
            });
    
            if (!response.ok) {
                const errorData = await response.json(); // Utiliser response.json() pour les erreurs
                console.error('Error response:', errorData); // Afficher le message d'erreur
                throw new Error(errorData.error || 'Failed to update profile image');
            }
    
            const data = await response.json();
            console.log('Profile image updated:', data.message); // Affiche le message de succès
        } catch (error) {
            console.error('Error updating profile image:', error);
            Alert.alert("Erreur lors de la mise à jour de l'image de profil.", error.message);
        }
    };
    
    

    const handleSkip = () => {
        navigation.navigate('HomePage'); // Action si l'utilisateur choisit de sauter
    };

    return (
        <SafeAreaView style={styles.containerAddImgProfil}>
            <View style={styles.logo}>
                <Text style={styles.logoFeat}>feat</Text>
                <View style={styles.point}></View>
            </View>

            <View style={{ height: "50%", justifyContent: "flex-start", alignItems: "center" }}>
                <Icon name="image" style={styles.iconAddImg} />
                <Text>Add your profile image or brand logo!</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.buttonAddImg} onPress={pickImage}>
                    <Text style={{ color: "white", textAlign: "center" }}>Choisir une image</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSkipImg} onPress={handleSkip}>
                    <Text style={{ textAlign: "center" }}>Skip</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AddImgProfile;
