import React from 'react'
import { Dimensions, StyleSheet, Image, Text, View, Pressable } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

const Splash = () => {
    let [fontsLoaded] = useFonts({
        'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
    });
    return (
        <View style={styles.splashcontainer}>
            <Image
                style={styles.splashImage}
                source={require('../assets/icons8-koala-96.png')}
                resizeMode="contain"
            />
            {fontsLoaded &&
            <>
                <Text style={[styles.splashTitle, {fontFamily: 'Ubuntu-Medium'}]}>Tudu</Text>
                <Text style={[styles.splashSubtitle, {fontFamily: 'Ubuntu-Light'}]}>Stay Productive</Text>
            </>
            }
            <Pressable style={styles.splashButton} onPress={()=>console.log('print')}>
                <AntDesign name="rightcircle" size={40} color={colors.clearWhite} />
            </Pressable>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    splashcontainer: {
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkBlue,
    },
    splashImage: {
        width: 400,
    },
    splashTitle: {
        fontSize: 35,
        color: colors.clearWhite,
    },
    splashSubtitle: {
        marginTop: 5,
        fontSize: 15,
        color: colors.clearWhite,
    },
    splashButton: {
        position: 'absolute',
        bottom: 50,
        width: 100,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
