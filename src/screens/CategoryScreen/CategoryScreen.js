import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Kimisagara from '../../components/Logo/kimisagara'
import Logo1 from '../../components/Logo/Logo1'
import Logo2 from '../../components/Logo/Logo2'

export default function CategoryScreen(props) {
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

          <TouchableOpacity onPress={()=> { navigation.navigate("Inkuru zose") }}>
            <View style={{ borderColor: '#00A1DE', borderWidth: 2, padding: 10, marginBottom: 2, alignItems: 'center', marginTop: 5}}> 
              <Text style={{fontSize: 20, fontStyle: "italic", fontWeight: 'bold'}}>REBA INKURU ZOSE </Text>
            </View>
         </TouchableOpacity>

            <View style={{ flexShrink: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }} > 
              <Text style={{fontSize: 15, fontStyle: "italic", fontWeight: 'bold'}}>Andika inkuru</Text>
            </View>

          <View style={{ flexShrink: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }} > 

            <View style={{ flexShrink: 1 }} >
              <TouchableOpacity onPress={()=> { navigation.navigate("Andika inkuru") }}>
                <View style={{ borderColor: '#00A1DE', borderWidth: 2, padding: 10, marginBottom: 5, alignItems: 'center'}}> 
                    <Text style={{fontSize: 18}}> ISUKU N'ISUKURA </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> { navigation.navigate("Andika inkuru") }}>
                <View style={{ borderColor: '#00A1DE', borderWidth: 2, padding: 10, marginBottom: 5, alignItems: 'center'}}>
                    <Text style={{fontSize: 18}}> KURWANYA IGWINGIRA</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> { navigation.navigate("Andika inkuru") }}>
              <View style={{ borderColor: '#00A1DE', borderWidth: 2, padding: 10, marginBottom: 5, alignItems: 'center'}}> 
                <Text style={{fontSize: 18}}> HUMAN SECURITY </Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> { navigation.navigate("Andika inkuru") }}>
                <View style={{ borderColor: '#00A1DE', borderWidth: 2, padding: 10, marginBottom: 5, alignItems: 'center'}}>
                    <Text style={{fontSize: 18}}> MUSA</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> { navigation.navigate("Andika inkuru") }}>
                <View style={{ borderColor: '#00A1DE', borderWidth: 2, padding: 10, marginBottom: 5, alignItems: 'center'}}>
                    <Text style={{fontSize: 18}}> UMUTEKANO</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
}
