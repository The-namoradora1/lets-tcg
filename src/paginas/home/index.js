import {View, Image, ScrollView, Dimensions} from "react-native";
import styles from '../../../style.js';
import  Cabecalho from '../../componentes/cabecalho/index.js'
import Pesquisa from '../../componentes/pesquiza/index.js';
import Listaplana from '../../componentes/lista/index.js';
import DATA from "../../../movies.js";
import { FlatList } from "react-native-web";



export default function Home() {
    let dimensions = Dimensions.get('window');
    let imageWidth = dimensions.width;
    let imageHeight = Math.round((dimensions.width * 9) / 16);

    return (
        <View style={styles.container}>
            <Cabecalho />
       
            <Pesquisa />

            <View style={styles.imageBanner}>
                <ScrollView horizontal={true}>
                    <Image style={{ width: imageWidth, height: imageHeight }} source={require('../../../Banner/1.jpg')} />
                    <Image style={{ width: imageWidth, height: imageHeight }} source={require('../../../Banner/2.jpg')} />
                    <Image style={{ width: imageWidth, height: imageHeight }} source={require('../../../Banner/3.jpg')} />
                </ScrollView>
            </View>

            <FlatList
                data={DATA}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Listaplana
                        nome={item.nome}
                        estoque={item.estoque}
                        imagem={item.image}
                        descricao={item.descricao}
                        localEnvio={item.localEnvio}
                        categoria={item.categoria}
                        preco={item.preco}
                    />
                )}
            />
        </View>
    );
}


