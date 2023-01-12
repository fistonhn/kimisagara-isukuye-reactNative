import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableHighlight, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import { TextInput } from "react-native-gesture-handler";

export default function SearchScreen(props) {
  const { navigation } = props;

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
          <TextInput
            style={styles.searchInput}
            onChangeText={handleSearch}
            value={value}
          />
          <Pressable onPress={() => {setValue(""), setData([])}}>
            <Image style={styles.searchIcon} source={require("../../../assets/icons/close.png")} />
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [value]);

  useEffect(() => {}, [value]);

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

  const handleSearch = (text) => {
    setValue(text);

    const nameUpper = text.toUpperCase();
      const postsArray = [];
      posts?.map(res => {
        if (res.title.toUpperCase().match(nameUpper)) {
          postsArray.push(res);
        }

      });

      setData(postsArray)
  };



  const onPressItem = (itemId) => {
    const selectedItem = posts.filter((post)=> post.id === itemId)
    navigation.navigate("Inkuru irambuye", selectedItem[0] );
  };

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
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={data} renderItem={renderPosts} keyExtractor={(item) => `${item?.id}`} />
    </View>
  );
}
