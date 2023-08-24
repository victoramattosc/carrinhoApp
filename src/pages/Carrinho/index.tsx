import React from "react"
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import topo from "../../../assets/topo.png";
import logo from "../../../assets/logo.png"

const width = Dimensions.get('screen').width;

export default function Carrinho(){
    return(
      <>
        <Image source={topo} style={styles.topo}/>
        <Text style={styles.titulo}>Detalhes do Carrinho</Text>
        <View  style={styles.carrinho}>
          <Text style={styles.nome}>Carrinho de Compras</Text>
          <View style={styles.fazenda}>
            <Image source={logo} style={styles.imgfazenda}/>
          <Text style={styles.nomefazenda}>Fazenda Etec Cidade do Livro</Text>
          </View>

          <Text style={styles.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha</Text>
          <Text style={styles.preco}>R$40,00</Text>
        </View>
      </>

    );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width
  },
  titulo: {
    width: "100%",
    position: 'absolute',
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 26,
    padding: 16,
    fontFamily: 'MBold'
  },
  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: '#4646464',
    fontFamily: 'MBold'
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12
  },
  imgfazenda: {
    width: 32,
    height: 32,
  },
  nomefazenda: {
    fontSize: 16,
    fontFamily: 'MBold',
    lineHeight: 26,
    marginLeft: 12
  },
  descricao: {
    color: '#A3A3A3',
    fontFamily: 'MItalic'
  },
  preco: {
    fontSize: 26,
    fontFamily: 'MRegular',
    color: '#2A9F85',
    marginTop: 8
  }
});
