//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import CartItem from '../Components/CartItem/CartItem';
import SubTotal from '../Components/SubTotal/SubTotal';
import { cartContext } from '../reducer/context';
import { useNavigation } from '@react-navigation/native';

// create a component
const MyComponent = () => {
   
  const {state} = useContext(cartContext)
  const {cartItems} = state || []
  const navigation = useNavigation();

  const renderListItem = ({ item }) => (
    <CartItem item={item}/>
   );


    return (
      <View style={styles.container}>
    <View style={styles.headingContainer}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
            <View style={{ padding: 10 }}>
                <Icon name="arrow-left" size={24} color="#000" />
            </View>
        </TouchableOpacity>
      <View style={styles.heading}>
        <Text>Shopping Cart ({cartItems?.length || 0})</Text>
      </View>
    </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listView}
      />
      <View style={styles.subTotalContainer}>
        <SubTotal />
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
  headingContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  listView: {
    paddingBottom: 30, 
  },
  subTotalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  heading: {
    marginBottom:20,
    fontSize:16,
    lineHeight:24,
    color:'#1E222B',
    marginTop:20 
  },
  container: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
});

export default MyComponent;
