import React from "react"
import { SafeAreaView, View, Text } from "react-native";
import { RootStackParamList } from '../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

type HomePageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomePage'>;

interface Props {
    navigation: HomePageScreenNavigationProp;
}

const HomePageScreen : React.FC<Props> = ({ navigation }) => {

    return(
        <SafeAreaView style={{margin:"auto"}}>
            <View>
                <Text style={{fontSize:25, fontWeight:800}}>
                    Welcome to the Home page
                </Text>
            </View>
        </SafeAreaView>
    )

};

export default HomePageScreen