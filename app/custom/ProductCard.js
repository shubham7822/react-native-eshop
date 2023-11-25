import React,{useContext, useRef} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you have FontAwesome icons installed
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addItemToCart, removeItemFromCart } from '../reducer/actions';
import { cartContext } from '../reducer/context';




const ProductCard = ({ item }) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
     navigation.navigate('Details',{productId:item?.id})
    }

  return (
    <TouchableOpacity  style={styles.cardContainer}  onPress={() => handleNavigation()}>
    <View>
      <TouchableOpacity style={styles.favoriteIcon}>
        <FontAwesome name="heart" size={24} color="lightgray" />
      </TouchableOpacity>
      <Image source={{ uri: item?.thumbnail }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <View>
          <Text style={styles.price}>${item?.price}</Text>
          <Text style={styles.description}>{item?.title?.length > 15 ? item?.title?.substring(0,10) + '...' : item?.title} </Text>
        </View>
        <TouchableOpacity
          style={styles.addIcon}
        >
          <Icon name="plus" size={10} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
    overflow: 'hidden',
    elevation: 3,
    width: '50%',
    backgroundColor: '#F8F9FB',
    position: 'relative',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 1,
  },
  productImage: {
    width: '100%',
    aspectRatio: 1, // Maintain aspect ratio
    resizeMode: 'contain',
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    alignItems: 'center', // Center items vertically
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#616A7D',
  
  },
  addIcon: {
    backgroundColor: '#2A4BA0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 50,
  },
  icon: {
    color: 'white',
    padding: 5,
  },
});

export default ProductCard;
