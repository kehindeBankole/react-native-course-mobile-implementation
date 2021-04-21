import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Link } from 'react-router-native'

export default function GameCard() {
    return (

        <View style={{ height: 224}}>
            <LinearGradient colors={['#702EEB', '#FF22B0']} style={{ borderRadius: 20, borderBottomRightRadius: 20 }}>
                <View style={{
                    width: '100%',
                    height: '100%'
                }}>
                    <Image source={require('../assets/Group.png')} style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                        position: 'absolute',
                    }} />
                    <Link to="/" style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, marginLeft: 10, backgroundColor: 'rgba(255, 255, 255, 0.3)', width: 92, height: 32, borderRadius: 20 }}>
                        <Text style={styles.subheader}>play</Text>
                    </Link>
                </View>
            </LinearGradient>
        </View>

    )
}

const styles = StyleSheet.create({
    subheader: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        fontFamily: 'Metropolis-Bold',
    },
})
