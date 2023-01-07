import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'

import Logo1 from '../../components/Logo/Logo1'
import Logo2 from '../../components/Logo/Logo2'

import Button from '../../components/Button/Button'
import TextInput from '../../components/TextInput/TextInput'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import { nameValidator } from '../../helpers/nameValidator'

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
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
        <Text style={{ fontSize: 25 }}>Iyandikishe</Text>
      </View>
      <TextInput
        label="Andika hano Amazina yawe"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
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
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Iyandikishe
      </Button>
      <View style={styles.row}>
        <Text>Usanzwe wariyandikishije? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.link}>Kanda hano winjire</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: '#00A1DE',
  },
})