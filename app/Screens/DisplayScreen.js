import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Details from '../Components/Details.js/Details';
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

    const images = [
        {
          image_url:
            "https://img.freepik.com/free-photo/young-female-jacket-shorts-presenting-comparing-something-looking-confident-front-view_176474-37521.jpg?w=1800&t=st=1693037944~exp=1693038544~hmac=97e967909706f9b73b4b47d521acf54806f4b9b3efab6196bc8a69f07efff554",
          caption: "Image 1"
        },
        {
          image_url:
            "https://img.freepik.com/free-photo/girl-grey-shirt-showing-something-her-hand_144627-51099.jpg?t=st=1693037931~exp=1693038531~hmac=63713e5a5cf2d23f53ca82b9996ad224ac6e92d0275a53b6debbe6523d7df020",
          caption: "Image 2"
        },
        {
          image_url:
            "https://img.freepik.com/free-photo/young-lady-shirt-jacket-making-scales-gesture-looking-cheerful-front-view_176474-85195.jpg?t=st=1693037931~exp=1693038531~hmac=2f83b6689538e4056912c96f448163e9ef10998f48f671b7e50279f81611fbe6",
          caption: "Image 3"
        },
        {
          image_url:
            "https://img.freepik.com/free-photo/girl-wide-opening-hands-giving-explanation-high-quality-photo_144627-60466.jpg?w=1800&t=st=1693038021~exp=1693038621~hmac=d4520cd86b2aea3e5dda765ede05bb53d70e18a574756d0f41a6806fe325d26d",
          caption: "Image 4"
        }
      ];

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
