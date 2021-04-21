import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { NativeRouter, Route, Link } from "react-router-native";

export default function Landing() {
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/image4.png')} />
                </View>
                <View style={{ marginTop: 50 }}>
                    <Text style={styles.header}>Game Development
Fundamentals Courses</Text>
                    <Text style={styles.subheader}>
                        Find the right iOS Game Development course for you. Answer a few questions to see what we'd recommend for you.
</Text>
                    <Link to="/courses" style={styles.button} onPress={()=>console.log(12)}>
                        {/* <Pressable style={styles.button}> */}
                            <Text style={styles.buttontext}>get started</Text>
                        {/* </Pressable> */}
                        </Link>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    image: {
        marginTop: 80,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    header: {
        color: '#0A3875',
        fontSize: 28,
        textAlign: 'left',
        lineHeight: 35,
        fontFamily: 'Metropolis-Bold',

    },
    subheader: {
        color: '#6E6F8B',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        marginTop: 20,
        fontFamily: 'Metropolis-Medium',
    },
    button: {
        marginTop: 20,
        height: 48,
        width: 140,
        backgroundColor: '#2F80ED',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttontext: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Metropolis-Medium',
        lineHeight: 32,
        fontWeight: '600',
        textTransform: 'capitalize'
    },
    link: {
        backgroundColor: 'white'
    }
})
