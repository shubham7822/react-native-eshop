import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({item}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item?.image }}
        style={styles.image}
      />
      <View style={styles.discountContainer}>
        <Text style={styles.heading}>Get</Text>
        <Text style={styles.discountText}>{item?.discount}</Text>
        <Text style={styles?.description}>{item?.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    heading:{
     fontSize:20,
     color:'white'
    },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F9B023',
    borderRadius: 10,
    overflow: 'hidden',
    height: 123,
    width: 269,
    margin: 10,
  },
  image: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
  },
  discountContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  description:{
    color:'white',
    fontSize:12,
  }
});

export default Card;
