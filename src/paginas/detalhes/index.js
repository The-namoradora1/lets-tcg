import {View, Text, Image, ScrollView} from "react-native-web";
import { useRoute } from "@react-navigation/native";
import styles from "./style";
import Cabecalho from "../../componentes/cabecalho/index.js";
import Pesquisa from "../../componentes/pesquiza/index.js";






export default function Produto() { const route = useRoute();


    return ( <View style={styles.fundo}>
            <Cabecalho></Cabecalho>
            
            <Pesquisa></Pesquisa>

            
            <ScrollView style={styles.scroll}>
        
            <View >
                <Image source={route.params.imagem} style={styles.movieImage}>
            </Image>

            </View>
            <Text style={styles.Titulos}> {route.params.nome} </Text>
            <Text style={styles.infos}> Preço {route.params.preco} | Categoria: {route.params.categoria} </Text>
            <Text style={styles.Descricao}>{route.params.descricao}</Text> 
     
</ScrollView>
        </View>
    )

}