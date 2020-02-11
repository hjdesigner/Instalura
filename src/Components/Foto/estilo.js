import { Dimensions, StyleSheet } from 'react-native';

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
  image: {
    width: largura,
    height: largura,
  },
});

export default estilo;