import React, { useState } from 'react'
import { View, ScrollView, TouchableOpacity, Button, Image } from 'react-native'
import { Text } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';

import Button2 from '../../components/Button/Button'

import TextInput from '../../components/TextInput/TextInput'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import { nameValidator } from '../../helpers/nameValidator'

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [village, setVillage] = useState(null);
  const [cell, setCell] = useState({ value: '', error: '' })
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    //   aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);

      console.log(image);

    }
  };

  const onPostPressed = () => {
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
    <ScrollView>
        <View style={{ margin: 30}}>
        <View style={{ fontSize: 30, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 25 }}>Shiramo Inkuru</Text>
        </View>
        <TextInput
            label="Andika hano umutwe winkuru"
            returnKeyType="next"
            value={name?.value}
            onChangeText={(text) => setName({ value: text, error: '' })}
            error={!!name.error}
            errorText={name.error}
        />
        <TextInput
            label="Andika hano inkuru"
            returnKeyType="next"
            value={email?.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!name.error}
            errorText={name.error}
            multiline = {true}
            numberOfLines = {6}
        />
        <TextInput
            label="Andika hano akagari"
            returnKeyType="next"
            value={cell?.value}
            onChangeText={(text) => setName({ value: text, error: '' })}
            error={!!name.error}
            errorText={name.error}
        />
        <TextInput
            label="Andika hano umudugudu"
            returnKeyType="next"
            value={village?.value}
            onChangeText={(text) => setName({ value: text, error: '' })}
            error={!!name.error}
            errorText={name.error}
        />
        <TextInput
            label="Shiramo Ifoto hano"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
        />

        <View>
        <Button title="Shiramo Ifoto" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: '100%', height: 150,  marginBottom: 8, }} />}
        </View>
        <Button2
            mode="contained"
            onPress={onPostPressed}
            style={{ marginTop: 24 }}
        >
            Post
        </Button2>
        </View>
    </ScrollView>
  )
}
