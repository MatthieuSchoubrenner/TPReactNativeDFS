import {View, Text} from 'react-native';
import React from 'react';
import Colors from '../Colors';
import CustomButton from '../components/CustomButton';

const ProductDetails = ({ navigation, route }) => {
console.log(route);
  return (
    <View>
      <Text>{route.params.produit.brand} {route.params.produit.title}{'\n'}</Text>
      <Text>{route.params.produit.category}{'\n'}</Text>
      <Text>{route.params.produit.description}{'\n'}</Text>
      <Text>Discount percentage : {route.params.produit.discountPercentage}%{'\n'}</Text>
      <CustomButton>
              Ajouter au panier
      </CustomButton>
    </View>
  );
};

export default ProductDetails;
