import React, { useContext } from 'react';
import { Image, View, StyleSheet,Text } from 'react-native';
import bagImage from '../../../assets/bag.svg'; // Use the PNG image
import Icon from 'react-native-vector-icons/FontAwesome';
import { cartContext } from '../../reducer/context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Basket = () => {

  const {state} = useContext(cartContext)
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('cartSection')}>
    <View  style={styles.container}>
      <Icon name="shopping-bag"  style={styles.basket} size={25} color="white" />
      <Text  style={styles.cartText}>{state?.cartItems?.length}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    marginRight:20,
    gap:20
  },
  cartText:{
    fontSize:13,
    backgroundColor:'#FFC83A',
    borderRadius:50,
    padding:8,
    width:30,
    textAlign:'center'
  },
  basket:{
    color:'#FFC83A'
  }
});

export default Basket;
