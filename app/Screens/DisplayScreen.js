import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Details from '../Components/Details/Details.js';
import StarsRating from '../Components/StarRatings/StarRating';
import Caresoul from '../custom/Caresoul';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Basket from '../Components/Basket/Basket';
import { getRequestData } from '../api/service';

const DisplayScreen = () => {

  const[productData,setProductData] = useState({})
  const route = useRoute();
  const { productId } = route.params;


    useEffect(() => {
      const getProductData = async () => {
        try {
          const responseData = await getRequestData(`/products/${productId}`);
            setProductData(responseData);
        } catch (error) {
           console.log(error)
        }
      };
      getProductData();

    },[])


      const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
     <View style={styles.topHeader}>
       <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Basket/>
    </View>
      <Text style={styles.heading}>Thin Choice</Text>
      <Text style={styles.headingTwo}>{productData?.title}</Text>
      <View style={styles.ratingsContainer}>
        <StarsRating rating={productData?.rating || 0} />
        <Text style={styles.reviews}> (120 Reviews)</Text>
      </View>

      <Caresoul images={productData?.images || []} style={styles.caresoul} />

      <View style={styles.details}>
        <Details 
          details={productData?.description}
          price={productData?.price}
          discount={productData?.discountPercentage}
          style={styles.detailsSection}
          productData={productData}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 topHeader: {
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  flexDirection:'row',
  marginBottom:20,
  marginTop:20
},
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    marginBottom: 16,
  },
  headingTwo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  reviews: {
    fontSize: 16,
    marginLeft: 8,
  },
  caresoul: {
    marginVertical: 16,
  },
  details: {
    marginVertical: 16,
  },
  detailsSection: {
    marginTop: 16,
  },
});

export default DisplayScreen;
