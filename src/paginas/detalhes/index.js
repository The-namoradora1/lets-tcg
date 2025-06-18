import {View, Text, Image} from "react-native-web";
import { useRoute } from "@react-navigation/native";
import styles from "./style";





export default function Detalhes() {

    const route = useRoute();


    return (
        
        <View style={styles.fundo}>
            <View>
                <Image source={route.params.imagem} style={styles.movieImage}>
            </Image>

            </View>
            <Text style={styles.Titulos}> {route.params.nome} </Text>
            <Text style={styles.infos}> Preço {route.params.preco} | Categoria: {route.params.categoria} </Text>
            <Text style={styles.Descricao}>{route.params.descricao}</Text> 


        </View>
    )

}