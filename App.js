import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import Landing from './screens/Landing'
import { NativeRouter, Route, Link } from "react-router-native";
import Courses from './screens/Courses';
export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <NativeRouter>
        <View style={styles.container}>
          <Route path="/" component={Landing} exact />
          <Route path="/courses" component={Courses} exact />
        </View>
      </NativeRouter>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})
