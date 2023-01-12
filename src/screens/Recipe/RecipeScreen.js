import React, { useLayoutEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import moment from 'moment';
import styles from "./styles";

import BackButton from "../../components/BackButton/BackButton";

export default function RecipeScreen(props) {
  const { navigation, route } = props;

  const item = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  return (
    <ScrollView >
        <View style={{marginTop: 80}}>
          <Image style={styles.image} source={{ uri: item.photos }} />
        </View>

        <View style={{marginTop: 250}}>
          <Text style={styles.infoRecipeName}>{item?.title}</Text>

          <View style={styles.infoContainer}>
              <Image
                style={styles.infoPhoto}
                source={require("../../../assets/icons/time.png")}
              />
              <Text style={styles.infoRecipe}>{moment(item?.createdAt).startOf('minute').fromNow()} </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={{fontSize: 14, marginLeft: 10}}>{item?.cell} / {item?.village}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item?.description}</Text>
          </View>
        </View>
    </ScrollView>
  );
}
