/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';

import { Text, Image, ScrollView, Dimensions, StyleSheet, FlatList } from 'react-native';

const largura = Dimensions.get("screen").width;
const informacoes = [
  {
    usuario: "Ricardo",
  },
  {
    usuario: "Marina",
  },
  {
    usuario: "Henrique",
  },
];

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={informacoes}
        renderItem={({item}) =>
          <Fragment>
            <Text>{item.usuario}</Text>
            <Image
              source={require("./res/img/alura.jpg")}
              style={estilo.image}
            />
          </Fragment>
        }
      />
    </ScrollView>
  )
};

const estilo = StyleSheet.create({
  image: {
    width: largura,
    height: largura,
  },
});

export default App;
