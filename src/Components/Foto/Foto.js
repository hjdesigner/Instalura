import React, { useState } from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import estilo from './estilo';

const ImgLike = (curtiu) => {
  if (curtiu) {
    return require('../../../res/img/s2-checked.png');
  }

  return require('../../../res/img/s2.png');
}

const Foto = ({ urlFoto, descricao, qntLike }) => {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qntLike);

  const curtiFoto = () => {
    let qnt = likes;

    if (curtiu) {
      qnt--;
    } else {
      qnt++;
    }
    setLikes(qnt);
    setCurtiu(!curtiu);
  }
  return (
    <>
      <Image
        source={{ uri: urlFoto }}
        style={estilo.image}
      />
      <Text>{descricao}</Text>
      <View style={estilo.viewLike}>
        <TouchableOpacity onPress={curtiFoto}>
          <Image
            style={estilo.like}
            source={ImgLike(curtiu)}
          />
        </TouchableOpacity>
        <Text>curtidas {likes}</Text>
      </View>
    </>
  )
}

export default Foto;