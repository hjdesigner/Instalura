/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState, useEffect } from 'react';

import { ScrollView, FlatList } from 'react-native';
import lerFotos from './src/api/feed';
import { Cabecalho } from './src/Components/Cabecalho';
import { Foto } from './src/Components/Foto';

const App = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    
    lerFotos(setFotos);
  },[]);

  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} urlImage={item.userURL} />
            <Foto urlFoto={item.url} descricao={item.description} qntLike={item.likes} />
          </Fragment>
        }
      />
    </ScrollView>
  )
};

export default App;
