import React from 'react';

import { Text, Image, View } from 'react-native';
import estilo from './estilo';

const Cabecalho = ({ nomeUsuario, urlImage }) => {
  return (
    <View style={estilo.cabecalho}>
      <Image style={estilo.fotoUsuario} source={{ uri: urlImage }} />
      <Text>{nomeUsuario}</Text>
    </View>
  )
}

export default Cabecalho;