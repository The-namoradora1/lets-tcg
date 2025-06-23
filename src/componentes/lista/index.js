import { Text,TouchableOpacity,Image } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { BsFillCartPlusFill } from 'react-icons/bs';
import styles from "./stilo.js";



export default function Listaplana({nome, descricao, categoria, preco, imagem}) {

    const navigation = useNavigation();

    return (

      <TouchableOpacity style={styles.butao} onPress = {() => navigation.navigate('Produto', {nome, descricao, categoria, preco, imagem})}>
      <Image source={typeof imagem === 'string' ? { uri: imagem } : imagem} style={styles.movieImage} />
      <Text style={styles.movieText}>{nome} - Preço: {preco}</Text>
      <TouchableOpacity
        style={styles.butaoaddlista}
        onPress={() => {
          // Add your add-to-cart logic here
        }}
      >
        <BsFillCartPlusFill />
      </TouchableOpacity>
    </TouchableOpacity>

    );


}