import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'
import Svg , {Path} from 'react-native-svg'
export default function CourseList() {
    return (
        <View style={styles.container}>
           <Image source={require('../assets/icon.png')} style={{width:50 , height:50}}/>
           <View style={styles.coursedetails}>
               <View style={{}}>
               <Text style={styles.text}>Learn to Code Making Games</Text>
               </View>
              <View style={{flexDirection:'row' , marginTop:3}}>
              <Text style={styles.coursename}>c#</Text>
              <Text style={styles.coursename}>unity</Text>
              </View>
              <View style={{flexDirection:'row' , marginTop:10}}>
              <Svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M9.33889 0H1.32778C0.594444 0 0 0.66875 0 1.49375V10.5063C0 11.3313 0.594444 12 1.32778 12H9.33889C10.0722 12 10.6667 11.3313 10.6667 10.5063V1.49375C10.6667 0.66875 10.0722 0 9.33889 0ZM14.6 1.17812L11.5556 3.54063V8.45938L14.6 10.8188C15.1889 11.275 16 10.8094 16 10.0125V1.98438C16 1.19062 15.1917 0.721875 14.6 1.17812Z" fill="#6E6F8B" fill-opacity="0.3"/>
</Svg>

<Text style={styles.time}>70 hrs</Text>
                  </View>
           </View>
           <View style={{}}>
               {/* <Image source={require('../assets/Vector.png')}/> */}
             <Text style={styles.ratings}> <Image source={require('../assets/Vector.png')}/> 4.3</Text>
             <Text style={{color:'#0A3875' , marginTop:10}}><Text style={styles.amount}>$30{" "}</Text>/mo</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
         justifyContent:'space-between'
    },
    coursedetails:{
flexDirection:'column',
width:'60%'
    },
    text:{
        color: '#0A3875',
        fontSize: 16,
        lineHeight: 23,
        fontWeight: '600',
        fontFamily: 'Metropolis-Bold',
    },
    coursename:{
        backgroundColor:'rgba(110, 111, 139, 0.2)',
        borderRadius:24,
        marginRight:5,
        textTransform:'capitalize',
        paddingVertical:2,
        paddingHorizontal:8,
        fontFamily: 'Metropolis-SemiBold',
        color:'#6E6F8B',
        fontSize:14
    },
    ratings:{
        backgroundColor:'#FF9343',
        // flexDirection:'row',
        // justifyContent:'space-between',
        // alignItems:'center',
        borderRadius:10,
        paddingVertical:8,
        paddingHorizontal:8,
        textTransform:'capitalize',
        fontFamily: 'Metropolis-SemiBold',
        color:'#FFFFFF',
        fontSize:14
        // marginRight:5,
        
    },
    ratevalue:{
        textTransform:'capitalize',
        fontFamily: 'Metropolis-SemiBold',
        color:'#FFFFFF',
        fontSize:14
    },
    amount:{
        color: '#0A3875',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '400',
        marginTop: 10,
        fontFamily: 'Metropolis-Bold',
    },
    time:{
        color: '#6E6F8B',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
        fontFamily: 'Metropolis-Bold', 
        marginLeft:10 ,
        marginTop:-4
    }
})

