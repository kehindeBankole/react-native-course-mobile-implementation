import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Link } from 'react-router-native'
import Vid from '../assets/Vector.svg'
import Svg , {Path} from 'react-native-svg'
export default function GameCard() {
    return (

        <View style={{ height: 224 }}>
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
                   <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center'}}>
                   <View style={styles.description}>
                  <View style={{flexDirection:'row'}}>
                  <Svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path opacity="0.2" d="M7.58785 0H1.07882C0.482986 0 0 0.501563 0 1.12031V7.87969C0 8.49844 0.482986 9 1.07882 9H7.58785C8.18368 9 8.66667 8.49844 8.66667 7.87969V1.12031C8.66667 0.501563 8.18368 0 7.58785 0ZM11.8625 0.883594L9.38889 2.65547V6.34453L11.8625 8.11406C12.341 8.45625 13 8.10703 13 7.50937V1.48828C13 0.892969 12.3432 0.541406 11.8625 0.883594Z" fill="white"/>
</Svg>
<Text style={styles.time}>70 hrs</Text>
                  </View>

                       <Text style={styles.text}>How to Create iOS 2D Games with SpriteKit 
and Swift 4</Text>
                   </View>
                   </View>
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
    description:{
        backgroundColor:'rgba(0 , 0 ,0 , 0.4)',
        height:125,
        width:"90%",
borderRadius:20,
marginHorizontal:10,
marginTop:20,
padding:20
    },
    text:{
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '400',
        marginTop: 20,
        fontFamily: 'Metropolis-Medium',
    },time:{
        color: '#FFFFFF',
        fontSize: 13,
        lineHeight: 20,
        fontWeight: '500',
        fontFamily: 'Metropolis-Medium',  
        marginLeft:10,
        marginTop:-5
    }
})
