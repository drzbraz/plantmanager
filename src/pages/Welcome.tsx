import { Feather } from '@expo/vector-icons'
import React from 'react'
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'
import colors from '../styles/colors'
export function Welcome() {
    return (
        <SafeAreaView style={style.container}>
            {/* <Text style={style.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text> */}
            {/* <Image
                source={wateringImg}
                style={style.image}
                resizeMode='contain'
            /> */}
            {/* <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar
                você sempre que precisar.
            </Text> */}
            <TouchableOpacity style={style.button} activeOpacity={0.7}>
                <Text style={style.buttonText}>
                    <Feather name='chevron-right' style={style.buttonIcon} />
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonText: {
        color: colors.white,
        fontSize: 24,
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white,
    },
    image: {
        height: Dimensions.get('window').width * 0.7,
    },
})
