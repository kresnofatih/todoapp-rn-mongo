import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font';
import { colors } from '../Colors'
import Constants from 'expo-constants'

const Footer = ({mid, left, right, leftAction, rightAction, midAction}) => {
    let [fontsLoaded] = useFonts({
        'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
    });
    return (
        <View style={styles.footerButton}>
            <TouchableOpacity style={styles.sideButton} onPress={leftAction}>
                <Text style={[styles.sideButtonText, fontsLoaded && {
                    fontFamily: 'Ubuntu-Light'
                }]}>{left}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeButton} onPress={midAction}>
                <Text style={[styles.midButtonText, fontsLoaded && {
                    fontFamily: 'Ubuntu-Light'
                }]}>{mid}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideButton} onPress={rightAction}>
                <Text style={[styles.sideButtonText, fontsLoaded && {
                    fontFamily: 'Ubuntu-Light'
                }]}>{right}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 15,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: colors.darkBlue,
        position: 'absolute',
        bottom: 0
    },
    sideButton: {
        flex: 0.3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sideButtonText:{
        color: colors.lightBlue,
        fontSize: 20
    },
    midButtonText:{
        color: colors.lightBlue,
        fontSize: 20
    },
    homeButton: {
        flex: 0.4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: colors.lightBlue
    }
})
