import React from 'react'
import { Dimensions, StyleSheet, Image, Text, View, Pressable, TouchableOpacity } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { openScreen } from '../features/appSlice'

const Splash = () => {
    const dispatch = useDispatch();
    let [fontsLoaded] = useFonts({
        'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
    });
    return (
        <View style={styles.splashcontainer}>
            {fontsLoaded &&
            <>
                <Image
                    style={styles.splashImage}
                    source={require('../assets/icons8-koala-96.png')}
                    resizeMode="contain"
                />
                <Text style={[styles.splashTitle, {fontFamily: 'Ubuntu-Light'}]}>Tudu</Text>
                <Text style={[styles.splashSubtitle, {fontFamily: 'Ubuntu-Light'}]}>Stay Productive</Text>
                <TouchableOpacity style={styles.splashButton} onPress={()=>dispatch(openScreen({screen: 'auth'}))}>
                    <AntDesign name="rightcircle" size={40} color={colors.clearWhite} />
                </TouchableOpacity>
            </>
            }
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
        fontSize: 40,
        color: colors.clearWhite,
    },
    splashSubtitle: {
        marginTop: 5,
        fontSize: 20,
        opacity: 0.7,
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
