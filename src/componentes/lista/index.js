import { Text,TouchableOpacity,Image } from "react-native-web";
import { useNavigation, } from "@react-navigation/native";
import { BsFillCartPlusFill } from 'react-icons/bs';
import styles from "./stilo.js";
import { useState } from 'react';


export default function Listaplana({nome, descricao, categoria, preco, imagem}) {

    const navigation = useNavigation();
 const [numero, setNumero] = useState(0);

  const incrementar = () => {
    setNumero(numero + 1);
  };

    return (

      <TouchableOpacity style={styles.butao} onPress = {() => navigation.navigate('Produto', {nome, descricao, categoria, preco, imagem})}>
      <Image source={typeof imagem === 'string' ? { uri: imagem } : imagem} style={styles.movieImage} />
      <Text style={styles.movieText}>{nome} - Preço: {preco}</Text>
      <TouchableOpacity
       >
       <Text style={styles.numero}>{numero}</Text>
       <TouchableOpacity
         style={styles.cartButton}
         onPress={incrementar}
         
       >
        <BsFillCartPlusFill />
       </TouchableOpacity>
 
    

      </TouchableOpacity>
    </TouchableOpacity>

    );


}