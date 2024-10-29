import React from 'react';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from "../../Styles";


type ProfilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProfilScreen'>;

interface Props {
    navigation: ProfilScreenNavigationProp;
}

const UserBio: React.FC = () => {

    return (

        <View style={styles.userBio}>
            <Text>
                Living vicariously through myself.
            </Text>
        </View>


    );
};

export default UserBio;

