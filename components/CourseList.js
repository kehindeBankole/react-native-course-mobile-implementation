import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'

export default function CourseList() {
    return (
        <View style={styles.container}>
           <Image source={require('../assets/icon.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    }
})
