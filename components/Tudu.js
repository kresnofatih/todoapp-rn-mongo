import React, { useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import EditTudu from './EditTudu';


const Tudu = ({tuduName, completeStatus, userName, tuduId, refreshAction}) => {
    const [isDone, setIsDone] = useState(completeStatus);
    const [viewEditModal, setViewEditModal] = useState(false)
    let [fontsLoaded] = useFonts({
        'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
        'Ubuntu-LightItalic' : require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    });
    return (
        <View style={styles.tuducontainer}>
            <TouchableOpacity style={styles.tudutask} onPress={()=>setViewEditModal(true)}>
                <Text style={[
                    styles.tudutasktext,
                    fontsLoaded && {fontFamily: 'Ubuntu-Light'},
                    isDone && {textDecorationLine: 'line-through'}
                ]}>{tuduName}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tuduoption}>
                <Pressable style={[
                    styles.tuduoptionbtn,
                    isDone && {backgroundColor: colors.darkBlue}
                ]} onPress={()=>setIsDone(!isDone)}>
                    <Text style={[
                        styles.tuduoptiontext,
                        fontsLoaded && {fontFamily: 'Ubuntu-Light'}
                    ]}>{isDone ? 'Undo': 'Done'}</Text>
                </Pressable>
                <Pressable style={[
                    styles.tuduoptionbtn,
                    isDone && {backgroundColor: colors.darkBlue}
                ]}>
                    <Text style={[
                        styles.tuduoptiontext,
                        fontsLoaded && {fontFamily: 'Ubuntu-Light'}
                    ]}>Delete</Text>
                </Pressable>
            </TouchableOpacity>
            <EditTudu
                visible={viewEditModal}
                exitModalAction={()=>{setViewEditModal(false)}}
                tuduId={tuduId}
                tuduName={tuduName}
                refreshAction={refreshAction}
            />
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
