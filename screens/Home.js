import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Constants from 'expo-constants'
import { colors } from '../Colors'
import Footer from '../components/Footer'
import Tudu from '../components/Tudu'
import { useDispatch } from 'react-redux'
import { openScreen } from '../features/appSlice'
import { useFonts } from 'expo-font';
import { fakeData } from '../FakeData'

const Home = () => {
    let [fontsLoaded] = useFonts({
        'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
        'Ubuntu-LightItalic' : require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    });
    const dispatch = useDispatch();
    const [homeList, setHomeList] = useState([])
    const [viewEmpty, setViewEmpty] = useState(homeList.length===0)
    useEffect(()=>{
        if(homeList.length>0){
            setViewEmpty(false);
        } else {
            setViewEmpty(true);
        }
    },[homeList])
    return (
        <View style={styles.homecontainer}>
            <Header
                mid="Home"
                left="exit"
                leftAction={()=>dispatch(openScreen({screen: 'auth'}))}
                right="rfsh" // onPress = refresh
            />
            <ScrollView style={styles.homecontents}>
                <View style={{display: 'flex', alignItems: 'center'}}>
                {homeList.map(item=>(
                    <Tudu
                    key={item.id}
                    tuduName={item.tuduName}
                    userName={item.userName}
                    completeStatus={item.completeStatus}
                    />
                ))}
                {viewEmpty &&
                <>
                    <Image
                        style={styles.homeImage}
                        source={require('../assets/urban-859.png')}
                        resizeMode="contain"
                    />
                    <Text style={[styles.homeEmptySubtitle, fontsLoaded && {
                        fontFamily: 'Ubuntu-Medium', marginTop: -15
                    }]}>{'Nothing To Do?\nGet Busy with Tudu!'}</Text>
                    <Text style={[styles.homeEmptySubsubtitle, fontsLoaded && {
                        fontFamily: 'Ubuntu-LightItalic'
                    }]}>{'"The tragedy in life doesn’t lie in\nnot reaching your goal.\nThe tragedy lies in\nhaving no goal to reach."\n\n-Benjamin E. Mays'}</Text>
                </>
                }
                </View>
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
    homeEmptySubtitle:{
        color: colors.darkGray,
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 15
    },
    homeEmptySubsubtitle:{
        color: colors.darkGray,
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 10,
        opacity: 0.5
    },
    homecontainer: {
        height: Dimensions.get('window').height+Constants.statusBarHeight,
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.clearWhite,
    },
    homecontents: {
        paddingVertical: 20,
        paddingBottom: 200,
    },
    homeImage: {
        width: Dimensions.get('screen').width,
        height: 280
    }
})
