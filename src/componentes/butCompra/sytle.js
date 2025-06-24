import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

cartButton: {
  fontSize: 18,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 1,
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
  left: 25,
  marginLeft: 1,
  marginRight:1,
  color: 'white',
  backgroundColor: '#9083c1',
  width: 40,
  height: 40

},
butquant: {
  position: 'absolute', 
  backgroundColor: 'red',
  width: 15,
  height: 15,
  position: 'absolute',
  top: 0,
  left: 0,
  color: 'white',
  fontSize: 11,
  fontWeight: 600,
  borderRadius: 15,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

});

export default styles;
