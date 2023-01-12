import React, { useState, useEffect } from 'react'
import { View, ScrollView, Button, Image } from 'react-native'
import { Text } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

import Button2 from '../../components/Button/Button'
import TextInput from '../../components/TextInput/TextInput'

import { titleValidator } from '../../helpers/titleValidataor'
import { descriptionValidator } from '../../helpers/descriptionValidator'
import { cellValidator } from '../../helpers/cellValidator'
import { villageValidator } from '../../helpers/villageValidator'


export default function AddPostScreen() {
  const [title, setTitle] = useState({ value: '', error: '' })
  const [description, setDescription] = useState({ value: '', error: '' })
  const [village, setVillage] = useState({ value: '', error: '' })
  const [cell, setCell] = useState({ value: '', error: '' })
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const [loading, setLoading] = useState(false);


 useEffect(() => {
  const timer = setTimeout(() => {
    setErrorMessage(null)
    setSuccessMessage(null)

  }, 4000)
  return () => clearTimeout(timer)
})

const pickImage = async ()=>{
    let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[1,1],
        quality:0.5
    });
    if(!data.cancelled){
      setImage(data.uri);
        let newFile = {
            uri:data.uri,
            type:`test/${data.uri.split(".")[1]}`,
            name:`test.${data.uri.split(".")[1]}`};
        handleUpload(newFile);
    }
  }

  const handleUpload = (image) => {
    setLoading(true);
    const data = new FormData();
    data.append('upload_preset', 'kimisagara');
    data.append('cloud_name','ddzlnjnsf');

    data.append('file', image);
    fetch("https://api.cloudinary.com/v1_1/ddzlnjnsf/image/upload",{  
      method:'post', 
      headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
      timeout: 5000,
      body:data
    })
    .then(res=>res.json())
    .then(data=> {
      setImageUrl(data)
      setLoading(false)
      }
      );
  }
  

  const onPostPressed = async() => {

    const titleError = titleValidator(title.value)
    const descriptioError = descriptionValidator(description.value)
    const villageError = villageValidator(village.value)
    const cellError = cellValidator(cell.value)

    if (titleError || descriptioError || villageError || cellError) {
      setTitle({ ...title, error: titleError })
      setDescription({ ...description, error: descriptioError })
      setVillage({ ...village, error: villageError })
      setCell({ ...cell, error: cellError })
      return
    }
 
    if (imageUrl === null) { return setErrorMessage('Shiramo ifoto') }

    setLoading(true);

    try {
    const token = await AsyncStorage.getItem('token')
    const newData = JSON.stringify({
        title: title.value,
        description: description.value,
        village: village.value,
        cell: cell.value,
        photos: imageUrl.secure_url,
    })

    await fetch('https://kimisagara-isukuye.vercel.app/api/createPost', {
        method: 'POST',
        headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json',
          Authorization:  token,
        },
        body: newData,
        
    }).then((response) => response.json())
      .then((responseData) => {
        if(responseData.status === 201) {

          setSuccessMessage(responseData.message);
          setLoading(false);
        } else {
          setErrorMessage(responseData.error)
          setLoading(false);

        }
      })

  } catch (error) { 
    setLoading(false);
    setErrorMessage(error.error) 
  }
  
  }

  return (
    <ScrollView>
        <View style={{ margin: 30}}>
        <Spinner
          visible={loading}
          textContent={'Tegereza...'}
          textStyle={{color: '#FFF'}}
        />
        <View style={{ fontSize: 30, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 25 }}>Shiramo Inkuru!..</Text>
        </View>
        <TextInput
            label="Andika hano umutwe winkuru"
            returnKeyType="next"
            value={title?.value}
            onChangeText={(text) => setTitle({ value: text, error: '' })}
            error={!!title.error}
            errorText={title.error}
        />
        <TextInput
            label="Andika hano inkuru"
            returnKeyType="next"
            value={description?.value}
            onChangeText={(text) => setDescription({ value: text, error: '' })}
            error={!!description.error}
            errorText={description.error}
            multiline = {true}
            numberOfLines = {6}
        />
        <TextInput
            label="Andika hano akagari"
            returnKeyType="next"
            value={cell?.value}
            onChangeText={(text) => setCell({ value: text, error: '' })}
            error={!!cell.error}
            errorText={cell.error}
        />
        <TextInput
            label="Andika hano umudugudu"
            returnKeyType="next"
            value={village?.value}
            onChangeText={(text) => setVillage({ value: text, error: '' })}
            error={!!village.error}
            errorText={village.error}
        />

        <View>
        {errorMessage &&(<Text style={{ fontSize: 16, backgroundColor: 'red', color: 'white', padding: 5 }}>{errorMessage}</Text>)}

        <Button title="Shiramo Ifoto" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: '100%', height: 150,  marginBottom: 8, }} />}
        </View>
        {successMessage && (<Text style={{ fontSize: 17, backgroundColor: '#4BB543', color: 'white', padding: 5 }}>{successMessage}</Text>)}

        <Button2
            mode="contained"
            onPress={onPostPressed}
            style={{ marginTop: 24 }}
        >
            Emeza inkuru
        </Button2>
        </View>
    </ScrollView>
  )
}
