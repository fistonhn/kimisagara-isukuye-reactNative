import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import Logo2 from '../../components/Logo/Logo2'

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <View>
          <View style={{ marginLeft: 5}}><Logo2 /></View>
        </View>
        <MenuButton
          title="ANDIKA INKURU"
          source={require("../../../assets/icons/add.png")}
          onPress={() => {
            navigation.navigate("Ibyiciro");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="AHABANZA"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Ahabanza");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="INKURU"
          source={require("../../../assets/icons/posts.png")}
          onPress={() => {
            navigation.navigate("Inkuru zose");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SHAKISHA"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Search");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="GUSOHOKA"
          source={require("../../../assets/icons/logout.png")}
          onPress={() => { 
            AsyncStorage.removeItem('token') 
            navigation.navigate('Kwinjira')
        }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
