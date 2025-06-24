import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({

    viewSearch: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15,
        marginLeft: '1%',
        marginRight: '1%',
        paddingRight: 13,
        gap: 13,
      },

      inputSearch: {
        width: '70%',
        height: 40,
      },
      
      buttonSearch: {
        position: 'absolute',
        right: 20,
        top: 5,
        bottom: 5,
        width: 40,
        height: 30,
        backgroundColor: 'transparent',
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },

})

export default styles;