import React, {useState} from 'react'
import { Dimensions, Modal, Image, TextInput, StyleSheet, Text, View, Pressable } from 'react-native'
import Header from './Header'
import Constants from 'expo-constants'
import Footer from './Footer'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import { Keyboard} from 'react-native'
import { updateTudu } from '../actions/AppActions'

const EditTudu = ({visible, exitModalAction, refreshAction, tuduId, tuduName}) => {
    const [currentTaskname, setCurrentTaskname] = useState(tuduName);
    let [fontsLoaded] = useFonts({
        'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
        'Ubuntu-LightItalic' : require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    });
    return (
        <Modal
            animationType="slide"
            visible={visible}
        >
            <Pressable style={styles.modalContent} onPress={()=>Keyboard.dismiss()}>
                <Header
                    mid="Edit"
                    left="cancel"
                    leftAction={exitModalAction}
                />
                <View style={styles.newtudubox}>
                    <Text style={[styles.newtudulabel, fontsLoaded && {fontFamily: 'Ubuntu-Regular'}]}>Tudu:</Text>
                    <TextInput
                        style={[styles.newtuduinput, fontsLoaded && {fontFamily: 'Ubuntu-Regular'}]}
                        onChangeText={text=>setCurrentTaskname(text)}
                        blurOnSubmit={true}
                        value={currentTaskname}
                        multiline
                        autoFocus
                        numberOfLines={3}
                        placeholder="Input New Task Here ..."
                    />
                    <Image
                        style={styles.homeImage}
                        source={require('../assets/urban-urban-line.png')}
                        resizeMode="contain"
                    />
                    <Text style={[styles.homeEmptySubtitle, fontsLoaded && {
                        fontFamily: 'Ubuntu-Medium'
                    }]}>{'Stay Productive\nwith Tudu!'}</Text>
                    <Text style={[styles.homeEmptySubsubtitle, fontsLoaded && {
                        fontFamily: 'Ubuntu-LightItalic'
                    }]}>{'"You miss 100% of the shots\nyou don’t take."\n\n-Wayne Gretzky'}</Text>
                </View>
                <Footer
                    mid="Save"
                    midAction={()=>{
                        updateTudu(
                            currentTaskname,
                            tuduId,
                            ()=>{
                                // refresh the home
                                refreshAction();
                                // exit edit screen
                                exitModalAction();
                            }
                        )
                    }}
                />
            </Pressable>
        </Modal>
    )
}

export default EditTudu

const styles = StyleSheet.create({
    homeEmptySubtitle:{
        color: colors.darkGray,
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 10
    },
    homeEmptySubsubtitle:{
        color: colors.darkGray,
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.5
    },
    homeImage: {
        marginTop: 15,
        width: Dimensions.get('screen').width,
        height: 250
    },
    modalContent: {
        marginTop: -Constants.statusBarHeight,
        height: Dimensions.get('window').height+Constants.statusBarHeight,
        width: Dimensions.get('screen').width,
        alignItems: 'center'
    },
    newtudulabel: {
        width: '100%',
        paddingBottom: 10,
        // backgroundColor: colors.darkBlue,
        fontSize: 18
    },
    newtudubox: {
        width: '80%',
        alignItems: 'center',
        paddingVertical: 20
    },
    newtuduinput: {
        marginTop: 5,
        padding: 20,
        width: '100%',
        borderColor: colors.lightBlue,
        borderRadius: 20,
        borderWidth: 1,
        fontSize: 18,
        color: colors.clearWhite,
        textAlignVertical: 'top',
        color: colors.darkBlue
    }
})
