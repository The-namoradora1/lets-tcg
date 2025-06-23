import { Text, View,TouchableOpacity } from "react-native-web"
import {Feather} from "@expo/vector-icons"
import styles from "./stilo"
import Comprabutton from '../butCompra/index.js';




export default function Cabecalho() {

    return (

<View style={styles.viewHeader}>
<TouchableOpacity>
  <Feather name='menu' size={30} color="#fff" />
</TouchableOpacity>
<Text style={styles.textHeader}> Let's Film </Text>
    <Comprabutton />
</View>
)
}
