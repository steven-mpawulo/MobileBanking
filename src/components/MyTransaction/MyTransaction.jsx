import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MyTransaction = ({amount, reason, date, handleOnPress}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={handleOnPress}>
    <View style={styles.transactionsContainer}>
        <View style={styles.firstContainer}>
        <View style={styles.iconContainer} >
        <Icon name={'gift'} size={30} color="black"/>
        </View>
        <View style={styles.valuesContainer}>
        <Text style={styles.amount}>{"Amount: " + amount}</Text>
        <Text style={styles.reason}>{"Reason: " + reason}</Text>
        </View>
        </View>
        
       <Text style={styles.date}>{date}</Text>
       
    </View>
    <View style={styles.divider}></View>
    </Pressable>
  )
}

export default MyTransaction

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: '2%',
        marginTop: '2%'
    },

    transactionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        
    },

    divider: {
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 0.3,
        marginTop: '2%'
    },

    iconContainer: {
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#EAEAEA',
        borderColor: '#EAEAEA',
        marginRight: 10

    },

    actionText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Regular'
    },

    firstContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    valuesContainer: {
        display: 'flex',
    },

    amount: {
        color: '#007BFF',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Regular'
    },

    date: {
        color: 'black',
        fontFamily: 'Poppins-Regular'
    },

    reason: {
        color: 'black',
        fontFamily: 'Poppins-Regular'
    }
})
