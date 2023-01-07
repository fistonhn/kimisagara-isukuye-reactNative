import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../../../assets/logo1.jpg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
})
