import React, { useContext, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addItemToCart, removeItemFromCart } from '../../reducer/actions';
import { cartContext } from '../../reducer/context';

const Details = ({ price, discount, details ,productData}) => {

    const navigation = useNavigation()
    const {dispatch} = useContext(cartContext)
    const quantityRef = useRef(1)
    

    const handleAddClick = () => {
        return function(){
            addItemToCart(dispatch,{...productData,quantity:quantityRef.current })     
            navigation.navigate('cartSection')
        }
    }


  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price}</Text>
        {discount && (
          <View style={[styles.discountContainer, { backgroundColor: '#153075' }]}>
            <Text style={styles.discount}>{discount} OFF</Text>
          </View>
        )}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddClick()}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buttonTextBuyNow}>Buy Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsHeading}>Details</Text>
        <Text style={styles.detailsText}>{details}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  discountContainer: {
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  discount: {
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  addButton: {
    flex: 1,
    padding: 12,
    height:56,
    backgroundColor:'white',
    borderRadius:20,
    borderColor:'#2A4BA0',
    borderWidth:1,
    width:143,
    color:'#2A4BA0',
    marginEnd: 5,
    alignItems: 'center',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#2A4BA0',
    padding: 10,
    marginStart: 5,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#2A4BA0',
    fontWeight: 'bold',
  },
  buttonTextBuyNow:{
    color: 'white',
    fontWeight: 'bold',
  },
  detailsContainer: {},
  detailsHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Details;
