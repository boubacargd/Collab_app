import React from 'react';
import { View, Text } from 'react-native';
import styles from "../../Styles";

interface UserNameProfilProps {
    name: string | undefined; // Ajouter des types pour les props
    country: string | undefined; // Ajouter des types pour les props
}

const UserNameProfil: React.FC<UserNameProfilProps> = ({ name, country }) => {
    return (
        <View style={styles.userNameFollow}>
            <View>
                <Text style={styles.userName}>{name || 'Nom inconnu'}</Text>
                <Text>{country || 'Pays inconnu'}</Text>
            </View>
        </View>
    );
};

export default UserNameProfil;
