import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Kimisagara from '../../components/Logo/kimisagara'
import Logo1 from '../../components/Logo/Logo1'
import Logo2 from '../../components/Logo/Logo2'

export default function HomeScreen(props) {
  const { navigation } = props;


  return (
    <View style={styles.b1}>
      <View style={styles.b2}>
        <View style={styles.b3}>
          <View style={{ flexShrink: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, }} > 
            <View style={{ marginRight: 5}}><Logo1 /></View>
            <View style={{ alignItems: 'center' }} >
            <Text style={styles.title}>Umugi wa Kigali</Text>
            <Text style={styles.title}>Umurenge wa Kimisagara</Text>
          </View>
            <View style={{ marginLeft: 5}}><Logo2 /></View>
          </View>

          <View style={{ marginLeft: 5, marginRight: 5}}><Kimisagara /></View>
          
          <View style={{ flexShrink: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }} > 
            <View style={{ flexShrink: 1, marginLeft: -30, marginRight: 20  }} >
              <TouchableOpacity style={{fontSize: 20}} onPress={()=> {
               navigation.navigate("Login");
                 }
                }>
                <Text style={{fontSize: 20, marginLeft: -5, marginBottom: 20}}> kwinjira </Text>
              </TouchableOpacity> 
              <Text style={{fontSize: 20, marginBottom: 20}}>Igwingira</Text>
              <Text style={{fontSize: 20}}>Isuku</Text>
            </View>

            <View style={{ flexShrink: 1 }} > 
              <Text style={{fontSize: 20, marginBottom: 20}}> Musa </Text>
              <Text style={{fontSize: 20, marginBottom: 20}}> Ejo heza</Text>
              <Text style={{fontSize: 20}}> Umutekano</Text>
            </View>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', flexShrink: 1, width: '100%', marginTop: 20 }} > 
            <View style={{ backgroundColor: 'rgba(11,156,49,0.8)', justifyContent: 'center', alignItems: 'center', flexShrink: 1, width: '90%', alignItems: 'center', padding: 10 }} > 
              <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic'}}> DUHARANIRE KIMISAGARA IKEYE </Text>
              <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic'}}> KANDI IZIRA IGWINGIRA </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
