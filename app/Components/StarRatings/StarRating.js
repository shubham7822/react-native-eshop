import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StarsRating = ({ rating }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {[...new Array(Math.floor(rating))].map((item, index) => (
        <FontAwesome name="star" size={24} color="gold" key={index} />
      ))}
    </View>
  );
};

export default StarsRating;
