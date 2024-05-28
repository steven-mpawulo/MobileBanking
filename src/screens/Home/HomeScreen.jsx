import { StyleSheet, Text, View, BackHandler, StatusBar, FlatList} from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useStore} from '../../store/store'
import MyTransaction from '../../components/MyTransaction/MyTransaction';

const HomeScreen = () => {
  const user = useStore((state) => state.user)
  const transactions = useStore((state) => state.transactions)
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <View style={styles.homeScreen}>
       <StatusBar backgroundColor={'#007BFF'} barStyle={'light-content'} />
      <View style={[styles.greetingContainer, { height: 200 }]}>
        <Text style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: 'Poppins-Regular'
        }}>Mobile Banking</Text>
        <Text style={{
          color: 'white',
          fontSize: 14,
          fontFamily: 'Poppins-Regular'
        }}>Transact the easy way</Text>
        <View style={styles.mobileBankingCard}>
          <View style={styles.upperContainer}>
            <View style={styles.iconsContainer}>
              <Icon name='gift' color='white' size={30} />
              <Icon name='heart' color='white' size={30} style={{ marginLeft: 6 }} />
            </View>
            <Text style={{
              color: 'white',
              marginTop: 8,
              fontSize: 16,
              fontFamily: 'Poppins-Regular'
            }}>Welcome Back! 😊</Text>
            <Text style={styles.userName}>{user.fullName}</Text>
          </View>
          <View style={styles.lowerContainer}>
            <Text style={styles.accountBalance}>Your balance: {user.accountBalance}</Text>
          </View>
        </View>
      </View>
      <View style={styles.moreContent}>
      <Text style={{color: 'black'}}>Your Transactions</Text>
      <FlatList
        data={transactions}
        renderItem={({item}) => <MyTransaction amount={item.amount} date={item.date} reason={item.description}/>}
        keyExtractor={item => item.id}
      />
      
      </View>
     
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeScreen: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },

  greetingContainer: {
    display: 'flex',
    marginBottom: '2%',
    borderStyle: 'solid',
    borderColor: '#007BFF',
    borderWidth: 1,
    padding: 16,
    height: '30%',
    backgroundColor: '#007BFF',
    position: 'relative'

  },

  mobileBankingCard: {
    display: 'flex',
    marginBottom: '2%',
    borderStyle: 'solid',
    // height: '90%',
    height: 160,
    width: '100%',
    position: 'absolute',
    bottom: -40,
    left: 20,
    right: 20
  },

  upperContainer: {
    borderStyle: 'solid',
    borderColor: '#0C1618',
    borderWidth: 1,
    backgroundColor: '#0C1618',
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16

  },
  lowerContainer: {
    borderStyle: 'solid',
    borderColor: '#0C1618',
    borderWidth: 1,
    backgroundColor: '#0C1618',
    width: '100%',
    height: '25%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

  },

  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },

  greetingText: {
    color: 'white',
    fontSize: 25,
    marginRight: '2%',
    fontFamily: 'Poppins-Regular'
  },

  userName: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular'
  },

  accountBalance: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    marginLeft: 16
  },
  
  moreContent: {
    marginTop: '8%',
    padding: 16
  }
})