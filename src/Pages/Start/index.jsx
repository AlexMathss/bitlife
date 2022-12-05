import React from "react";
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import DefaultButton from "../../Components/Common/DefaultButton";
import { useNavigation } from "@react-navigation/native";

import LifeStatus from "../../Components/Common/LifeStatus";

export default function Start(){

    const handleNavAppExplanation = () => {
        console.log("Testando o click")
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems: "center"}}>
                    <Image source={require("../../assets/icons/logo3.png")} style={styles.logo}/>
                    <LifeStatus/>
                    <Text style={styles.description}>Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"} o melhor nivel.</Text>
                </View>
                <DefaultButton
                    buttonText={'Continuar'}
                    handlePress={handleNavAppExplanation}
                    width={250}
                    height={50}
                />
            </ScrollView>
        </View>
    )
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(21, 21, 21, 0.98)',
        alignItems: 'center',
        
    },
    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },
    description: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 60
    }
})