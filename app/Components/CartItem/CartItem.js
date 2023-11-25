import React, { useContext, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { decreaseItemQuantity, increaseItemQuantity, removeItemFromCart } from '../../reducer/actions';
import { cartContext } from '../../reducer/context';

const CartItem = ({ item }) => {
  const { dispatch } = useContext(cartContext);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (item.quantity === 0) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500, 
        useNativeDriver: true,
      }).start(() => {
        decreaseItemQuantity(dispatch, { ...item });
      });
    }
  }, [item.quantity, fadeAnim, dispatch]);

  const handleAddToCart = () => {
    increaseItemQuantity(dispatch, { ...item });
  };

  const handleRemoveFromCart = () => {
    decreaseItemQuantity(dispatch, { ...item });
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text>${item?.price}</Text>
      </View>

      <View style={styles.increaseDecreaseQty}>
        <TouchableOpacity onPress={handleRemoveFromCart}>
          <Icon name="minus" size={10} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.input}>{item?.quantity}</Text>
        <TouchableOpacity onPress={handleAddToCart}>
          <Icon name="plus" size={10} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderLeftColor: 'none',
    marginBottom: 10, 
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    marginRight: 'auto',
  },
  increaseDecreaseQty: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    margin: 2,
    padding: 15,
    backgroundColor: '#E7ECF0',
    borderRadius: 50,
  },
  input: {
    padding: 4,
    marginHorizontal: 5,
    width: 25,
    textAlign: 'center',
  },
});

export default CartItem;
