import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function DefaultButton({
    buttonText,
    handlePress,
    width,
    height,
}){
    return(
        <View style={[styles.cont, { alignItems: 'center'}]}>
        <TouchableOpacity
            style={[styles.button, {width: width, height: height}]}
            activeOpacity={0.7}
            onPress={handlePress}
        >
            <Text style={styles.buttonText}>
                {buttonText}
            </Text>


        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderColor: '#FFF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
})