import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, Dimensions } from 'react-native'
import BottomNav from '../components/BottomNav';
import CourseList from '../components/CourseList';
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
        }
    ];
    return (
        <View style={{ flex: 1, height: Dimensions.get('window').height-30, paddingTop:50}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{paddingHorizontal:30}}>
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
                        renderItem={(d) => (<View style={{ marginRight: 20, width: 264 }}><GameCard /></View>)}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={{ marginTop: 50, width: '100%' , paddingHorizontal:30 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={styles.listheader}>The Fundamentals</Text>
                        <View style={{ marginTop: 5 }}>
                            <View style={{ height: 2, width: 16, backgroundColor: '#6E6F8B' }}></View>
                            <View style={{ marginTop: 5, height: 2, width: 8, backgroundColor: '#6E6F8B', marginLeft: 'auto' }}></View>
                        </View>
                    </View>
                    <FlatList
                        data={DATA}
                        renderItem={(d) => (<View style={{ marginTop: 20 }}><CourseList/></View>)}
                    />

                </View>
            </ScrollView>
                <View style={styles.bottomnav}>
                    <BottomNav />
                </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 50,
        height: '100%',
        // height: Dimensions.get('window').height,
        position: 'relative',
        flex: 13,
        flexDirection: 'column',
        justifyContent: "space-between",
    },
    header: {
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
    cardlist: {
        marginTop: 40,
        paddingLeft:30
    },
    listheader: {
        color: '#0A3875',
        fontSize: 24,
        textAlign: 'left',
        lineHeight: 28,
        fontFamily: 'Metropolis-SemiBold',

    },
    bottomnav: {
        marginTop: 20,
        paddingHorizontal:30,
        paddingBottom:50
    }
})



{/* <View style={styles.container}>
                <View style={{ flex: 13 , flexDirection:'column' , height:'100%'}}>
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
                            renderItem={(d) => (<View style={{ marginRight: 20, width: 264 }}><GameCard /></View>)}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{ marginTop: 50, width: '100%' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={styles.listheader}>The Fundamentals</Text>
                            <View style={{ marginTop: 5 }}>
                                <View style={{ height: 2, width: 16, backgroundColor: '#6E6F8B' }}></View>
                                <View style={{ marginTop: 5, height: 2, width: 8, backgroundColor: '#6E6F8B', marginLeft: 'auto' }}></View>
                            </View>
                        </View>
                        <FlatList
                            data={DATA}
                            renderItem={(d) => (<View style={{ marginTop: 20}}><GameCard /></View>)}
                        />

                    </View>
                </View>
               
                <View style={{ flex: 1 }}>
                    <View style={styles.bottomnav}>
                        <BottomNav />
                    </View>
                </View>
            </View> */}