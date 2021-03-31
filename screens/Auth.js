import { useFonts } from 'expo-font';
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, ScrollView, Image, View, TouchableOpacity } from 'react-native'
import { colors } from '../Colors';
import Header from '../components/Header';
import { Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Footer from '../components/Footer';
import Constants from 'expo-constants'
import { checkIfUsernameTaken, storeUserData } from '../actions/AuthActions';


const Auth = () => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [signupStatus, setSignupStatus] = useState(true);
    const [signupErrorMsg, setSignupErrorMsg] = useState('');
    const scrollViewRef = useRef(null);

    let [fontsLoaded] = useFonts({
        'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
        'Ubuntu-LightItalic' : require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    });
    const signUpButtonOnPress = () => {
        if(username.length>=6 && password.length>=6){
            checkIfUsernameTaken(
                username,
                //if taken=> setErrormsg 'taken'
                ()=>{setSignupErrorMsg('Error: Username Already Taken!')},
                //if not taken=> storeData, 
                ()=>{storeUserData(username, password, ()=>{
                        setUsername(''); setPassword(''); setSignupErrorMsg('');
                    });
                }
            );
            //then setUp initial todos
        } else {
            setSignupErrorMsg('Error: Username & Password Minimum 6 Characters!')
        };
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
              setKeyboardVisible(true); // or some other action
              scrollViewRef.current.scrollToEnd()
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, [])
    return (
        <ScrollView ref={scrollViewRef}>
            <View style={styles.authcontainer}>
                <Header
                    mid="Auth"
                    left="back"
                    right={signupStatus ? 'login': 'signup'}
                    rightAction={()=>setSignupStatus(!signupStatus)}
                />
                <Image
                    style={styles.authImage}
                    source={require('../assets/urban-843.png')}
                    resizeMode="contain"
                />
                <Text style={[styles.authSubtitle, fontsLoaded && {
                        fontFamily: 'Ubuntu-Medium'
                }]}>{signupStatus ? 'Create An Account!': 'Login with Account!'}</Text>
                <View style={styles.authInputContainer}>
                    <Ionicons name="person" size={24} color={colors.darkBlue} />
                    <View style={styles.authInputBox}>
                        <Text style={[styles.inputlabel,
                            fontsLoaded && {fontFamily: 'Ubuntu-Light'}
                        ]}>Username:</Text>
                        <TextInput
                            style={[styles.usernameInput, fontsLoaded && {fontFamily: 'Ubuntu-Light'}]}
                            placeholder="Input Username Here"
                            onChangeText={val=>setUsername(val)}
                            value={username}
                        />
                    </View>
                </View>
                <View style={styles.authInputContainer}>
                    <Feather name="key" size={24} color={colors.darkBlue} />
                    <View style={styles.authInputBox}>
                        <Text style={[styles.inputlabel,
                            fontsLoaded && {fontFamily: 'Ubuntu-Light'}
                        ]}>Password:</Text>
                        <TextInput
                            style={[styles.usernameInput, fontsLoaded && {fontFamily: 'Ubuntu-Light'}]}
                            placeholder="Input Password Here"
                            secureTextEntry={true}
                            onChangeText={val=>setPassword(val)}
                            value={password}
                        />
                    </View>
                </View>
                <TouchableOpacity style={{padding: 10}}
                onPress={()=>setSignupStatus(!signupStatus)}>
                    <Text style={[styles.hintMsg, fontsLoaded && {
                        fontFamily: 'Ubuntu-Light',
                    }]}>{signupStatus ? 'Already have an account? Login' : "Don't have an account? Signup"}</Text>
                </TouchableOpacity>
                <View style={{padding: 10}}>
                    <Text style={[styles.hintMsg, fontsLoaded && {
                        fontFamily: 'Ubuntu-LightItalic',
                        color: 'red'
                    }]}>{signupErrorMsg}</Text>
                </View>
                <Footer
                    mid={signupStatus ? 'Sign Up': 'Log In'}
                    midAction={signUpButtonOnPress}
                />
            </View>
        </ScrollView>
    )
}

export default Auth

const styles = StyleSheet.create({
    keyboardAvoider: {
        height: 100,
        backgroundColor: colors.clearWhite,
    },
    authcontainer: {
        height: Dimensions.get('window').height+Constants.statusBarHeight,
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.clearWhite,
    },
    authImage: {
        width: Dimensions.get('screen').width,
        height: 280
    },
    authSubtitle: {
        color: colors.darkGray,
        fontSize: 25,
        marginBottom: 10
    },
    usernameInput: {
        // backgroundColor: colors.darkBlue,
        fontSize: 20,
        marginBottom: 10,
        fontSize: 14,
        color: colors.darkGray
    },
    authInputContainer: {
        borderColor: colors.darkBlue,
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 20,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    inputlabel: {
        fontSize: 18,
        color: colors.lightBlue,
        paddingTop: 10,
        paddingBottom: 0
    },
    authInputBox: {
        flex: 1,
        paddingLeft: 15,
        marginLeft: 15,
        borderLeftColor: colors.darkBlue,
        borderLeftWidth: 1
    },
    hintMsg: {
        fontSize: 14,
        color: colors.darkGray
    }
})
