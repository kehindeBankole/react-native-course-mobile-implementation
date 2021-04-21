import React from 'react'
import { StyleSheet, Text, View , FlatList, ScrollView} from 'react-native'
import GameCard from '../components/GameCard';

export default function Courses() {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
    return (
        <View style={styles.container}>
           <View>
           <Text style={styles.header}>
            Fundamentals 
Courses
            </Text>
            <Text style={styles.subheader}>
            Find the right iOS Game Development course for you. Answer a few questions to see what we'd recommend for you.
            </Text>
           </View>
           <View style={styles.cardlist}>
          <FlatList
          data={DATA}
        renderItem={(d)=>(<View style={{marginRight:20}}><GameCard/></View>)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:50
    },
    header:{
        color: '#0A3875',
        fontSize: 42,
        textAlign: 'left',
        lineHeight: 55,
        fontFamily: 'Metropolis-SemiBold',
 
    },
    subheader: {
        color: '#6E6F8B',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        marginTop: 20,
        fontFamily: 'Metropolis-Medium',
    },
    cardlist:{
        marginTop:40
    }
})
