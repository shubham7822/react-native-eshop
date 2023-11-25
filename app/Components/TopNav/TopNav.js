import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Basket from '../Basket/Basket';

const TopNav = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hey Rahul</Text>
      <Basket />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    fontFamily:'Manrope',
    padding:10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading:{
    color:"#F8F9FB",
    fontSize:24
  }
});

export default TopNav;
