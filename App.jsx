import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigation/StackNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.app}>
     <StackNavigation/>
     </View>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'white'
  }
})