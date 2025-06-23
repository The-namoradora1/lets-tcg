import { TextInput, View, TouchableOpacity, Text } from "react-native-web";
import styles from "./style.js";
import { useState } from 'react';

async function fetchProducts(query) {
  return [
    { id: 1, nome: "Produto A" },
    { id: 2, nome: "Produto B" }
  ].filter(item => item.nome.toLowerCase().includes(query.toLowerCase()));
}

export default function Pesquisa() {
  const [pesquisaval, setpesquisa] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    const results = await fetchProducts(pesquisaval);
    setData(results);
  };

  return (
    <View style={styles.viewSearch}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Digite o que deseja buscar"
          onChangeText={setpesquisa}
          placeholderTextColor="#999"
          value={pesquisaval}
        />
        <TouchableOpacity
          style={styles.buttonSearch}
          onPress={handleSearch}
        >
          <Text style={{ fontSize: 20 }}>🔍</Text>
        </TouchableOpacity>
      </View>
      <View>
        {data.map(item => (
          <Text key={item.id}>{item.nome}</Text>
        ))}
      </View>
    </View>
  );
}
