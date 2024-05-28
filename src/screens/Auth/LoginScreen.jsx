import { StyleSheet, Text, View, Pressable, StatusBar, ScrollView, Keyboard, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import MyTextInput from '../../components/MyTextInput/MyTextInput'
import MyButton from '../../components/MyButton/MyButton'
import { Formik } from 'formik';
import { object, string } from 'yup'
import { showSnackBar } from '../../global/Global';

let signInSchema = object({
    email: string()
        .required("Email is required"),
    password: string().required("Password is required")
});

const LoginScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false)
    const login = (email, password, setIsLoading) => {
        if (email !== 'johndoe@test.com' && password !== '123456'){
            setIsLoading(false)
            showSnackBar("Invalid credentials")
            return
        }
        setIsLoading(false)
        navigation.navigate('HomeScreen')
    }
    return (
        <Pressable style={styles.loginScreen} onPress={Keyboard.dismiss}>
            <SafeAreaView>
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
                    <View style={styles.textContainer}>
                        <Text style={styles.firstText}>Mobile Banking</Text>
                        <Text style={styles.secondText}>Please enter your details to sign in.</Text>
                    </View>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={signInSchema}
                        onSubmit={
                            (values, { resetForm, setFieldError }) => {
                                let email = values.email
                                let password = values.password
                                setIsLoading(true)
                                login(email, password)
                                resetForm()
                                setFieldError("email", false)
                                setFieldError("password", false)
                            }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View>
                                <MyTextInput label={"Email"}
                                    placeholder={"johndoe@gmail.com"}
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                    onBlur={handleBlur('email')}
                                    iconName={'email'}
                                    error={errors.email}
                                    touched={touched.email}
                                />
                                {touched.email && <Text style={styles.error}>{errors.email}</Text>}
                                <MyTextInput label={"Password"}
                                    placeholder={"**********"}
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                    onBlur={handleBlur('password')}
                                    iconName={'eye-off'}
                                    forPassword={true}
                                    error={errors.password}
                                    touched={touched.password}
                                />
                                {touched.password && <Text style={styles.error}>{errors.password}</Text>}
                                <View style={styles.buttonContainer}><MyButton buttonText={"Login"} buttonFunction={handleSubmit} isLoading={isLoading} /></View>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </SafeAreaView>
        </Pressable>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginScreen: {
        padding: 16,
        display: 'flex',
        flex: 1,
        backgroundColor: 'white'
    },

    image: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
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

    forgotPasswordContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    forgotPassword: {
        color: '#657E98',
        fontSize: 15,
        fontFamily: 'Poppins-Regular'
    },

    error: {
        color: 'red',
        fontFamily: 'Poppins-Regular'
    }
})