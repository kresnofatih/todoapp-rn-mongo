import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';


const Tudu = () => {
    const [isDone, setIsDone] = useState(false)
    let [fontsLoaded] = useFonts({
        'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
        'Ubuntu-LightItalic' : require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    });
    return (
        <View style={styles.tuducontainer}>
            <TouchableOpacity style={styles.tudutask}>
                <Text style={[
                    styles.tudutasktext,
                    fontsLoaded && {fontFamily: 'Ubuntu-Light'},
                    isDone && {textDecorationLine: 'line-through'}
                ]}>Finish the tudu app</Text>
            </TouchableOpacity>
            <View style={styles.tuduoption}>
                <TouchableOpacity style={[
                    styles.tuduoptionbtn,
                    isDone && {backgroundColor: colors.darkBlue}
                ]} onPress={()=>setIsDone(!isDone)}>
                    <Text style={[
                        styles.tuduoptiontext,
                        fontsLoaded && {fontFamily: 'Ubuntu-Light'}
                    ]}>{isDone ? 'Undo': 'Done'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                    styles.tuduoptionbtn,
                    isDone && {backgroundColor: colors.darkBlue}
                ]}>
                    <Text style={[
                        styles.tuduoptiontext,
                        fontsLoaded && {fontFamily: 'Ubuntu-Light'}
                    ]}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Tudu

const styles = StyleSheet.create({
    tuducontainer: {
        backgroundColor: colors.clearWhite,
        width: Dimensions.get('window').width*0.8,
        borderColor: colors.lightBlue,
        borderRadius: 20,
        borderWidth: 1,
        overflow: 'hidden',
        marginVertical: 10
    },
    tuduoption: {
        flexDirection: 'row',
    },
    tudutask: {
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    tudutasktext: {
        fontSize: 18
    },
    tuduoptionbtn: {
        flex: 1,
        backgroundColor: colors.lightBlue,
        paddingVertical: 15
    },
    tuduoptiontext: {
        color: colors.clearWhite,
        textAlign: 'center',
        fontSize: 18
    }
})
