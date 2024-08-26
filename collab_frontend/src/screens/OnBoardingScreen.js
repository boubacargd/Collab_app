import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text, Image } from "react-native";
import Onboarding from "../assets/Onboarding.png";

export default function OnBoardingScreen() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View style={{ marginTop: 20 }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 200
                }}>
                    Collab App
                </Text>
            </View>

            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Image
                    source={Onboarding}
                    style={{
                        width: 300,
                        height: 300
                    }}
                />
            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: "black",
                    padding: 20,
                    width: "90%",
                    borderRadius: 10,
                    marginBottom: 50,
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <Text style={{
                    color:"white",
                    fontSize: 18,
                    textAlign: "center",
                    fontWeight: "bold",

                }}>
                    Let's Collab
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};
