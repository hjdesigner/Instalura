import React, { Fragment, useState, useEffect } from 'react';
import {
  FlatList,
  StatusBar,
  View,
  Platform,
} from "react-native";
import { Cabecalho } from './src/Components/Cabecalho';
import { Foto } from './src/Components/Foto';
import {Comentarios} from './src/Components/Comentarios'
import lerFotos from './src/api/feed';


const App = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  let altura = 0;
  if (Platform.OS == "ios") {
    altura = 35;
  }

  return (
    <View style={{ marginTop: altura }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho
              nomeUsuario={item.userName}
              urlImage={item.userURL} />
            <Foto
              urlFoto={item.url}
              descricao={item.description}
              qntLikes={item.likes}
            />
            <Comentarios comentarios={item.comentarios}/>
          </Fragment>}
      />
    </View>
  )
};
export default App;
