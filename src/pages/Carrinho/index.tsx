import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Detalhe from "./components/Detalhe";
import Topo from "./components/Topo";
import  carrinho from '../../mocks/carrinho';

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <Topo titulo={carrinho.topo.titulo} />
      <View style={styles.carrinho}>
        <Detalhe
        nome={carrinho.detalhes.nome}
        nomeFazenda={carrinho.detalhes.nomeFazenda}
        descricao={carrinho.detalhes.descricao}
        preco={carrinho.detalhes.preco}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
});
