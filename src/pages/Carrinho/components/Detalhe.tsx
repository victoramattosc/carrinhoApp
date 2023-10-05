import React from "react";
import { StyleSheet, Dimensions, Text, View, Image } from "react-native";
import logo from "../../../../assets/logo.png";

const width = Dimensions.get("screen").width;

type Props = {
  nome: string,
  nomeFazenda: string,
  descricao: string,
  preco: string
}

export default function Detalhe({nome, nomeFazenda, descricao, preco}: Props) {
  return (
    <>
      <Text style={styles.nome}>Carrinho de Compras</Text>

      <View style={styles.fazenda}>
        <Image source={logo} style={styles.imagemfazenda} />
        <Text style={styles.nomefazenda}>{nomeFazenda}</Text>
      </View>

      <Text style={styles.descricao}>
        {descricao}
      </Text>
      <Text style={styles.preco}>{preco}</Text>
    </>
  );
}


const styles = StyleSheet.create({
    nome: {
      fontSize: 26,
      lineHeight: 42,
      color: "#464646",
      fontFamily: "MontserratBold",
    },
    fazenda: {
      flexDirection: "row",
      paddingVertical: 12,
    },
    imagemfazenda: {
      width: 32,
      height: 32,
    },
    nomefazenda: {
      fontSize: 16,
      fontFamily: "MontserratBold",
      lineHeight: 26,
      marginLeft: 12,
    },
    descricao: {
      color: "#a3a3a3",
      fontFamily: "MontserratItalic",
    },
    preco: {
      fontSize: 26,
      fontFamily: "MontserratRegular",
      color: "#2a9f85",
      marginTop: 8,
    },
  });
  