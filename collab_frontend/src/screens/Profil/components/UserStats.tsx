import React from 'react';
import { View, Text,} from 'react-native';
import { RootStackParamList } from '../../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from "../../Styles";
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

type ProfilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProfilScreen'>;

interface Props {
    navigation: ProfilScreenNavigationProp;
}


const UserStats: React.FC = () => {

    return (

        <ScrollView
            style={styles.userStats}
            horizontal={true}
            showsHorizontalScrollIndicator={false} >

            <View style={styles.userStat}>
                <Icon name="people-sharp" style={styles.statIcon} />
                <Text style={styles.statNumbers}>
                    1.190.034
                </Text>
            </View>

            <View style={styles.userStat}>
                <Icon name="folder-sharp" style={styles.statIcon} />
                <Text style={styles.statNumbers}>
                    312
                </Text>
            </View>

            <View style={styles.userStat}>
                <Icon name="thumbs-up" style={styles.statIcon} />
                <Text style={styles.statNumbers}>
                    22.123
                </Text>
            </View>

            <View style={styles.userStat}>
                <Icon name="repeat-outline" style={styles.statIcon} />
                <Text style={styles.statNumbers}>
                    20.000
                </Text>
            </View>

        </ScrollView>

    );
};

export default UserStats;
