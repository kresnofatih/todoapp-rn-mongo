import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Constants from 'expo-constants'
import { colors } from '../Colors'
import Footer from '../components/Footer'
import Tudu from '../components/Tudu'
import { useDispatch } from 'react-redux'
import { openScreen } from '../features/appSlice'

const Home = () => {
    const dispatch = useDispatch();
    return (
        <View style={styles.homecontainer}>
            <Header
                mid="Home"
                left="exit"
                leftAction={()=>dispatch(openScreen({screen: 'auth'}))}
                right="rfsh" // onPress = refresh
            />
            <ScrollView style={styles.homecontents}>
                <Tudu/>
                <Tudu/>
                <Tudu/>
                <Tudu/>
                <Tudu/>
                <Tudu/>
                <Tudu/>
                <Tudu/>
                <Tudu/>
                <Tudu/>
                <Tudu/>
                <Tudu/>
                <Tudu/>
                <View style={{height: 100}}></View>
            </ScrollView>
            <Footer
                mid="New"
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homecontainer: {
        height: Dimensions.get('window').height+Constants.statusBarHeight,
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.clearWhite,
    },
    homecontents: {
        paddingHorizontal: 25,
        paddingVertical: 20,
        paddingBottom: 200
    }
})
