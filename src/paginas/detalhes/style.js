import { Dimensions, StyleSheet } from "react-native";
const largura = Dimensions.get('window').width / 2


const styles = StyleSheet.create ({ 

    movieImage: {
        alignItems: "center",
        marginLeft:'20%',
        marginRight:'10%',
        width: 300, 
        height: 300,
        marginBottom: 10, 
        marginTop: 30,
      },

      Titulos: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginLeft:'10%',
        marginRight:'10%',
      },

      infos:{
        marginLeft:'10%',
        marginRight:'10%',
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginTop: 10,
      },

      fundo:{
        backgroundColor: '#9083c1',
        width: '100%',
        height: '100%',

      },

      
      Descricao:{
        marginLeft:'10%',
        marginRight:'10%',
        fontSize: 15,
        marginTop: 10,
        color: "white",
        textAlign: "center",
      },

      

  

})
export default styles;