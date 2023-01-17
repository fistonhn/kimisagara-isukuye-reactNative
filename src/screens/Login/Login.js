
import React, { useState, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Spinner from 'react-native-loading-spinner-overlay';

import { Text } from 'react-native-paper'
import Logo1 from '../../components/Logo/Logo1'
import Logo2 from '../../components/Logo/Logo2'

import Button from '../../components/Button/Button'
import TextInput from '../../components/TextInput/TextInput'
import { theme } from '../../core/theme'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'

export default function LoginScreen( props ) {
  const { navigation } = props;

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [errorMessage, setErrorMessage] = useState(null)

  const [loading, setLoading] = useState(false);

  const getToken = async() =>{
    const token = await AsyncStorage.getItem('token')
    if(token) {  return navigation.replace('Ibyiciro') }
  }

  useEffect(() => {
    getToken()
    const timer = setTimeout(() => {
      setErrorMessage(null)
    }, 4000)
    return () => clearTimeout(timer)
  })


  const onLoginPressed = async() => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    setLoading(true);

    try {
      const newData = JSON.stringify({
          number: email.value,
          password: password.value,
      })

      await fetch('https://kimisagara-isukuye.vercel.app/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: newData
    }).then((response) => response.json())
      .then((responseData) => {

        if(responseData.token) {

          setLoading(false);
          AsyncStorage.setItem('token', responseData.token)
          navigation.replace('Ibyiciro')

        } else if(responseData.status) {
          setLoading(false);
          setErrorMessage(responseData.error)
        }
      })

  } catch (error) { 
    setErrorMessage(error.error)
    setLoading(false);

   }
  }

  return (
    <View>
    <View style={{ margin: 30}}>
        <Spinner
          visible={loading}
          textContent={'Tegereza...'}
          textStyle={{color: '#FFF'}}
        />
      <View style={{ flexShrink: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} > 
        <View style={{ marginRight: 30}}><Logo1 /></View>
        <View style={{ marginLeft: 30}}><Logo2 /></View>
      </View>
      <View style={{ fontSize: 30, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 25 }}>Muhawe ikaze!</Text>
        {errorMessage &&(<Text style={{ fontSize: 16, backgroundColor: 'red', color: 'white', padding: 5 }}>{errorMessage}</Text>)}

      </View>
      <TextInput
        label="Andika hano numero ya telefone"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Andika hano umubare wibanga"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
          <Text style={styles.forgot}>Wibagiwe umubare wibanga?</Text>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Injiramo
      </Button>
      <View >
        <Text>Ntago wigeze wiyandikisha? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Kanda hano wiyandikishe</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: '#00A1DE',
    fontStyle: 'italic'
  },
})
