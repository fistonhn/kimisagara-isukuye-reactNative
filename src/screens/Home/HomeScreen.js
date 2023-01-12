import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
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
            <Text style={{ textAlign: 'center', marginBottom: 5, color: '#00A1DE' }}>UMUGI WA KIGALI</Text>
            <Text style={{ textAlign: 'center', marginBottom: 5, color: '#00A1DE' }}>AKARERE KA NYARUGENGE</Text>
            <Text style={{ textAlign: 'center', marginBottom: 5, color: '#00A1DE' }}>UMURENGE WA KIMISAGARA</Text>
          </View>
            <View style={{ marginLeft: 5}}><Logo2 /></View>
          </View>

          <View style={{ marginLeft: 5, marginRight: 5}}><Kimisagara /></View>
          
          <View style={{ flexShrink: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }} > 
          
            <View style={{ flexShrink: 1, marginRight: 20 }} >
              <TouchableOpacity style={{fontSize: 20, }} onPress={()=> {
               navigation.navigate("Kwinjira");
                 }
                }>
                <View style={{ borderColor: '#00A1DE', borderWidth: 2, padding: 10, marginBottom: 5}}>
                  <Text style={{fontSize: 20, marginLeft: -5}}> kwinjira </Text>
                </View>
              </TouchableOpacity> 
              <View style={{ borderColor: '#00A1DE', borderWidth: 2, padding: 10, marginBottom: 5}}>
                <Text style={{fontSize: 20 }}> Igwingira</Text>
              </View>
              <View style={{ borderColor: '#00A1DE', borderWidth: 2, padding: 10}}>
                <Text style={{fontSize: 20}}>Isuku</Text>
              </View>
              
            </View>

            <View style={{ flexShrink: 1 }} >
              <View style={{ borderColor: '#00A1DE', borderWidth: 2, padding: 10, marginBottom: 5}}> 
                <Text style={{fontSize: 20}}> Musa </Text>
              </View>
              <View style={{ borderColor: '#00A1DE', borderWidth: 2, padding: 10, marginBottom: 5}}>
                <Text style={{fontSize: 20}}> Ejo heza</Text>
              </View>
              <View style={{ borderColor: '#00A1DE', borderWidth: 2, padding: 10, marginBottom: 5}}>
                <Text style={{fontSize: 20}}> Umutekano</Text>
              </View>
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
