import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { cartContext } from '../../reducer/context';


const SubTotal = () => {

  const {state} = useContext(cartContext)

  const {cartItems} = state || {}

    function getsubTotal() {
       return  cartItems?.reduce((price, item) => price + item?.price * item?.quantity, 0)
          .toFixed(2);
    }


    return (
        <View style={styles.container}>
        <View style={styles.subTotalContainer}>
           <View styles={styles.subTotalLeftContainer}>
            <Text style={styles.textContentLeft}>SubTotal</Text>
            <Text style={styles.textContentLeft}>Delivery</Text>
            <Text style={styles.textContentLeft}>Total</Text>
           </View>
           <View style={styles.subTotalRightContainer}>
            <Text style={styles.textContentRight}>${getsubTotal()}</Text>
            <Text style={styles.textContentRight}>$2</Text>
            {/* ADDING DELIVERY FEE AS DELIVERY FEE IN UI */}
            <Text style={styles.textContentRight}>${getsubTotal()}</Text>
           </View>
        </View>

        <TouchableOpacity style={styles.proceed} onPress={() => null}>
          <Text style={styles.buttonText}>Proceed To Checkout</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#E7ECF0',
        height:260,
        borderRadius:10
    },
    subTotalContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
    },
    proceed:{
        backgroundColor: '#2A4BA0',
        padding: 10,
        width:'90%',
        margin: '0',
        height:56,
        textAlign:'center',
        paddingTop:10,
        borderRadius: 20,
        alignItems: 'center',
        alignSelf:'center'
    },
    textContentLeft:{
        fontSize:14,
        margin:15,
        color:'#606D76'
    },
    textContentRight:{
        fontSize:14,
        margin:15,
        color:'#1B262E'
    },
    buttonText:{
        color:'white',
        marginTop:10,
        marginBottom:10
    }
});

export default SubTotal;
