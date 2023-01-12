import React, { useLayoutEffect, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";

export default function LandingScreen(props) {
  const { navigation } = props;
  const [posts, setPosts] = useState(null);

  const getToken = async() =>{
    const token = await AsyncStorage.getItem('token')
    if(!token) {  return navigation.replace('Kwinjira') }
  }

  useEffect(() => {
    getToken()

  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);


  const onPressItem = (itemId) => {
    const selectedItem = posts.filter((post)=> post.id === itemId)
    navigation.navigate("Inkuru irambuye", selectedItem[0] );
  };

  const getData = async ()=>{
    const token = await AsyncStorage.getItem('token')
    const config = { headers: {  Authorization: token } };

    try {
      fetch('https://kimisagara-isukuye.vercel.app/api/getAllPosts', config)
      .then((response) => response.json())
      .then((responseData) => {
        setPosts(responseData.data);

      })

  } catch (error) { setErrorMessage(error.error) }
  }
  getData()

  const orderedPosts = posts?.sort()?.reverse();

  const renderPosts = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressItem(item.id)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photos }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={{fontSize: 14, marginBottom: 10}}>{item.cell} / {item.village}</Text>

      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={orderedPosts} renderItem={renderPosts} keyExtractor={(item) => `${item.id}`} />
    </View>
  );
}
