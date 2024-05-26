import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MyTextInput = ({ label, 
    placeholder, 
    value, 
    onChangeText, 
    onBlur, 
    iconName, 
    forPassword, 
    isNotFullWidth,
     passwordError,
     isReadOnly,
     isForNumber,
     touched,
     error
    }) => {
        const [showPassword, setShowPassword] = useState(false)

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputContainer, {width: isNotFullWidth ? '60%': '100%', borderColor:touched && error ? 'red': 'black'}]}>
                <TextInput  
                style={styles.input} 
                placeholder={placeholder} 
                value={value} 
                onChangeText={onChangeText} 
                cursorColor={'black'} 
                onBlur={onBlur}
                secureTextEntry={forPassword ? !showPassword ? true : false : false}
                keyboardType= {isForNumber ? 'numeric' : 'default'}
                readOnly={isReadOnly}
                placeholderTextColor={'grey'}
                ></TextInput>
                <Pressable onPress={() => {
                    setShowPassword((value) => !value)
                }}>
                <Icon  style={styles.icon} name={forPassword ? !showPassword ? 'eye' : 'eye-off': iconName} size={20} color='black' />
                </Pressable>
            </View>
            {passwordError && <Text style={styles.error}>{passwordError}</Text>}
            
        </View>

    )
}

export default MyTextInput

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 5
    },
    inputContainer: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },

    input: {
       flex: 1.7,
        color: 'black',
        fontFamily: 'Poppins-Regular'
    },

    icon: {
        flex: 0.1
    },


    label: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 6,
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },

    error: {
        color: 'red',
        fontFamily: 'Poppins-Regular'
    }
})