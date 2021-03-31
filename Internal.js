import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { getCurrentScreen } from './features/appSlice';
import Splash from './screens/Splash';
import Auth from './screens/Auth';

const Internal = () => {
    const currentScreen = useSelector(getCurrentScreen);
    return (
        <View>
            <StatusBar style="auto" />
            {currentScreen==='splash' &&
                <Splash/>
            }
            {currentScreen==='auth' &&
                <Auth/>
            }
        </View>
    )
}

export default Internal

const styles = StyleSheet.create({})
