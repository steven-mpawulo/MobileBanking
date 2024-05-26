import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import Spinkit from 'react-native-spinkit'

const MyButton = ({buttonText, buttonFunction, isLoading}) => {
  return (
    <Pressable style={styles.button} onPress={buttonFunction}>
      {isLoading ? <Spinkit type='Wave' color='white' size={30}/>:  <Text style={styles.buttonText}>{buttonText}</Text>}
    </Pressable>
  )
}

export default MyButton

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007BFF',
        borderStyle: 'solid',
        borderColor: '#007BFF',
        borderRadius: 30,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Regular'
    },

    iconLeft: {
        position: 'relative',
        left: 100
    },
})