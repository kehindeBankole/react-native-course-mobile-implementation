import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

export default function BottomNav() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <Image source={require('../assets/Rectangle22.png')} style={{ height: 28, width: 26 }} />
                <Text style={styles.text}>Home</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 50, justifyContent: 'space-between', flex: 2 }}>
                <Image source={require('../assets/discover.png')} style={{ height: 28, width: 26 }} />
                <Image source={require('../assets/polls.png')} style={{ height: 28, width: 26 }} />
                <Image source={require('../assets/user.png')} style={{ height: 28, width: 26 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 82,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    text: {
        marginLeft: 10, marginTop: 5, color: '#2F80ED', fontSize: 16, fontFamily: 'Metropolis-Bold',
    }
})
