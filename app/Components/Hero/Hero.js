import React, { useEffect, useRef } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Card from './Card';


const data = [
  { id: '1', image: "https://i.dummyjson.com/data/products/26/thumbnail.jpg", discount: '30% OFF',description:"On first 03 orders" },
  { id: '2', image: "https://i.dummyjson.com/data/products/25/thumbnail.jpg", discount: '50% OFF',description:"On first 03 orders"  },
  { id: '3', image: "https://i.dummyjson.com/data/products/24/thumbnail.jpg", discount: '20% OFF',description:"On first 03 orders"  },
];

const Hero = () => {

  
  const renderListItem = ({ item }) => (
   <Card item={item}/>
  );

  return (
    <View style={styles.container}>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderListItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
     margin:10
  }
})

export default Hero;
