import { Text, TextInput,TouchableOpacity, View, FlatList, Image } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import styles from "./stilo.js";


export default function Listaplana({nome, descricao, categoria, preco, imagem}) {

    const navigation = useNavigation();

    return (

      <TouchableOpacity style={styles.butao} onPress = {() => navigation.navigate('Detalhes', {nome, descricao, categoria, preco, imagem})}>
      <Image source={typeof imagem === 'string' ? { uri: imagem } : imagem} style={styles.movieImage} />
      <Text style={styles.movieText}>{nome} - Preço: {preco}</Text>
    </TouchableOpacity>

    );


}