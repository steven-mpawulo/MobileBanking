import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, StatusBar, Keyboard } from 'react-native'
import React, { useState } from 'react'
import MyTextInput from '../../components/MyTextInput/MyTextInput'
import MyButton from '../../components/MyButton/MyButton'
import { Formik } from 'formik';
import { object, string } from 'yup'
import { useStore } from '../../store/store';
import { formatDate, showSnackBar } from '../../global/Global';


let signInSchema = object({
    accountNumber: string()
        .required("Account Number is required"),
    amount: string().required("Amount is required"),
    description: string().required("Description is required")
});
const TransactionScreen = ({ navigation }) => {
    const user = useStore((state) => state.user)
    const transactions = useStore((state) => state.transactions)
    const [isLoading, setIsLoading] = useState(false)
    const updateUser = useStore((state) => state.updateUser)
    const updateTransactions = useStore((state) => state.updateTransactions)

    const transfer = (accountNumber, amount, description, setIsLoading) => {
        if (Number(accountNumber) === 2) {
            let userAmount = Number(amount)
            let accountBalance = user.accountBalance
            let newBalance = Number(accountBalance) - amount
            let updatedUser = {fullName : user.fullName, accountNumber : user.accountNumber, accountBalance: newBalance}
            updateUser(updatedUser)
            let date = formatDate(Date.now())
            let transaction = {
                amount: userAmount,
                description: description,
                date: date
            }
            let newTransactions = [transaction, ...transactions ]
            updateTransactions(newTransactions)
            setIsLoading(false)
            navigation.navigate('HomeScreen')
        } else {
            setIsLoading(false)
            showSnackBar("User with provided account number not found")
        }



    }
    return (
        <Pressable style={styles.transactionScreen} onPress={Keyboard.dismiss}>
            <SafeAreaView>
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
                    <View style={styles.textContainer}>
                        <Text style={styles.firstText}>Mobile Banking</Text>
                        <Text style={styles.secondText}>Transfer Money</Text>
                    </View>
                    <Formik
                        initialValues={{ accountNumber: '', amount: '', description: '' }}
                        validationSchema={signInSchema}
                        onSubmit={
                            (values, { resetForm, setFieldError }) => {
                                let accountNumber = values.accountNumber
                                let amount = values.amount
                                let description = values.description
                                setIsLoading(true)
                                transfer(accountNumber, amount, description, setIsLoading)
                                resetForm()
                                setFieldError("accountNumber", false)
                                setFieldError("amount", false)
                                setFieldError("description", false)
                            }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View>
                                <MyTextInput label={"Account Number"}
                                    placeholder={"1"}
                                    onChangeText={handleChange('accountNumber')}
                                    value={values.accountNumber}
                                    onBlur={handleBlur('accountNumber')}
                                    iconName={'bank'}
                                    error={errors.accountNumber}
                                    touched={touched.accountNumber}
                                    isForNumber={true}
                                />
                                {<touched className="accountNumber"></touched> && <Text style={styles.error}>{errors.accountNumber}</Text>}
                                <MyTextInput label={"Amount"}
                                    placeholder={"100"}
                                    onChangeText={handleChange('amount')}
                                    value={values.amount}
                                    onBlur={handleBlur('amount')}
                                    iconName={'cash'}
                                    error={errors.amount}
                                    touched={touched.amount}
                                    isForNumber={true}
                                />
                                {touched.amount && <Text style={styles.error}>{errors.amount}</Text>}
                                <MyTextInput label={"Description"}
                                    placeholder={"data"}
                                    onChangeText={handleChange('description')}
                                    value={values.description}
                                    onBlur={handleBlur('description')}
                                    iconName={'message-text'}
                                    error={errors.description}
                                    touched={touched.description}
                                />
                                {touched.description && <Text style={styles.error}>{errors.description}</Text>}
                                <View style={styles.buttonContainer}><MyButton buttonText={"Transfer"} buttonFunction={handleSubmit} isLoading={isLoading} /></View>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </SafeAreaView>
        </Pressable>
    )
}

export default TransactionScreen

const styles = StyleSheet.create({
    transactionScreen: {
        padding: 16,
        display: 'flex',
        flex: 1,
        backgroundColor: 'white'
    },


    firstText: {
        fontSize: 30,
        color: '#000000',
        marginBottom: '2%',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Regular'
    },

    secondText: {
        color: '#657E98',
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },

    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10%',
        marginTop: '10%'
    },

    buttonContainer: {
        marginTop: '10%'
    },

    error: {
        color: 'red',
        fontFamily: 'Poppins-Regular'
    }
})