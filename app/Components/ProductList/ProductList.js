import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { getRequestData } from '../../api/service';
import ProductCard from '../../custom/ProductCard';


const ProductList = () => {

     const[dataList,setDataList] = useState([])


    useEffect(() => {
      const getProductListData = async () => {
        try {
          const responseData = await getRequestData('/products');
            setDataList(responseData?.products);
        } catch (error) {
           console.log(error)
        }
      };
      getProductListData();
    },[])


  const renderListItem = ({ item }) => (
   <ProductCard item={item}/>
  );

  return (
    <FlatList
      data={dataList}
      keyExtractor={(item) => item.id}
      renderItem={renderListItem}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      numColumns={2}                 
      columnWrapperStyle={styles.row}
    />
  );
};



const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: "space-around",
        gap:20,
        marginLeft:20,
        marginRight:20
    }
});


export default ProductList;
