import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import Hero from '../Components/Hero/Hero';
import ProductList from '../Components/ProductList/ProductList';
import ProductCard from '../custom/ProductCard';

const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Header />
        <Hero />
        <ProductList />
        <Footer />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', // Set a background color or adjust as needed
    },
  });

  export default HomeScreen