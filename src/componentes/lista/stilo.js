import { Dimensions, StyleSheet } from "react-native";
const largura = Dimensions.get('window').width / 2


const styles = StyleSheet.create ({
  butao: {
    pandingTop: 20,
    paddingBottom: 16, 
    paddingRight: 8,
    paddingLeft: 8, 
    alignItems: "center", 
    width: largura,
    height: 'auto'
  },

    movieItem: {
        flex: 1,
        alignItems: "center",
        margin: 5,
        backgroundColor: "Gray",
        borderRadius: 10,
        padding: 10,
      },
      movieImage: {
        width: 130,
        height: 130,
        borderRadius: 10,
        marginBottom: 10, 
      },
      movieText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      },

butaoaddlista: {
  position: "absolute",
  top: 0,
  right: 0,
  width: 45,
  height: 45,
  marginTop: 12,
  marginRight: 15,
  color: "#0c5dd6",
  // display: "none", // Removed: not supported in React Native
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 0,
  borderRadius: 50,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  fontSize: 24, // 1.5rem is roughly 24px
  // cursor: pointer, // Not supported in React Native
},

})

export default styles;