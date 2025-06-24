
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './sytle.js';
import React from 'react';
 import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {numero} from '../lista/index.js'; // Importando o estilo do número

const Contador = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{numero}</Text>
      <TouchableOpacity
        style={styles.cartButton}
  
      >
        <AiOutlineShoppingCart />

      </TouchableOpacity>

    </View>
  );
};


export default Contador;
   
    