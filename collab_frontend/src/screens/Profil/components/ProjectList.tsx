import React from 'react';
import { View, Text, Image } from 'react-native';
import { RootStackParamList } from '../../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from "../../Styles";


type ProfilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProfilScreen'>;

interface Props {
    navigation: ProfilScreenNavigationProp;
}

const ProjectList: React.FC = () => {

    return (

        <View style={{ marginTop: 10 }}>

            <View style={styles.boxProjets}>

                <View style={styles.boxProjet}>
                    <Image
                        source={require('../../../assets/project2Exemple.jpg')}
                        style={{
                            width: 145,
                            height: 145,
                            borderRadius: 20,
                        }}
                    />
                    <Text style={{ fontSize: 14, textAlign: "center", marginTop: 10 }}>
                        My E-Commerce
                    </Text>
                </View>

                <View style={styles.boxProjet}>
                    <Image
                        source={require('../../../assets/project3Exemple.webp')}
                        style={{
                            width: 145,
                            height: 145,
                            borderRadius: 20,
                        }}
                    />
                    <Text style={{ fontSize: 14, textAlign: "center", marginTop: 10 }}>
                        My E-Commerce
                    </Text>
                </View>

                <View style={styles.boxProjet}>
                    <Image
                        source={require('../../../assets/logoFeat.png')}
                        style={{
                            width: 145,
                            height: 145,
                            borderRadius: 20,
                        }}
                    />
                    <Text style={{ fontSize: 14, textAlign: "center", marginTop: 10 }}>
                        My E-Commerce
                    </Text>
                </View>

                <View style={styles.boxProjet}>
                    <Image
                        source={require('../../../assets/projectExemple.jpg')}
                        style={{
                            width: 145,
                            height: 145,
                            borderRadius: 20,
                        }}
                    />
                    <Text style={{ fontSize: 14, textAlign: "center", marginTop: 10 }}>
                        My E-Commerce
                    </Text>
                </View>

                <View style={styles.boxProjet}>
                    <Image
                        source={require('../../../assets/project2Exemple.jpg')}
                        style={{
                            width: 145,
                            height: 145,
                            borderRadius: 20,
                        }}
                    />
                    <Text style={{ fontSize: 14, textAlign: "center", marginTop: 10 }}>
                        My E-Commerce
                    </Text>
                </View>

                <View style={styles.boxProjet}>
                    <Image
                        source={require('../../../assets/project3Exemple.webp')}
                        style={{
                            width: 145,
                            height: 145,
                            borderRadius: 20,
                        }}
                    />
                    <Text style={{ fontSize: 14, textAlign: "center", marginTop: 10 }}>
                        My E-Commerce
                    </Text>
                </View>

                <View style={styles.boxProjet}>
                    <Image
                        source={require('../../../assets/logoFeat.png')}
                        style={{
                            width: 145,
                            height: 145,
                            borderRadius: 20,
                        }}
                    />
                    <Text style={{ fontSize: 14, textAlign: "center", marginTop: 10 }}>
                        My E-Commerce
                    </Text>
                </View>

                <View style={styles.boxProjet}>
                    <Image
                        source={require('../../../assets/projectExemple.jpg')}
                        style={{
                            width: 145,
                            height: 145,
                            borderRadius: 20,
                        }}
                    />
                    <Text style={{ fontSize: 14, textAlign: "center", marginTop: 10 }}>
                        My E-Commerce
                    </Text>
                </View>
            </View>

        </View>


    );
};

export default ProjectList;

