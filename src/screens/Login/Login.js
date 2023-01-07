
import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
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

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'LandingScreen' }],
    })
  }

  return (
    <View>
    <View style={{ margin: 30}}>
      <View style={{ flexShrink: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} > 
        <View style={{ marginRight: 30}}><Logo1 /></View>
        <View style={{ marginLeft: 30}}><Logo2 /></View>
      </View>
      <View style={{ fontSize: 30, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 25 }}>Muhawe ikaze!</Text>
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
