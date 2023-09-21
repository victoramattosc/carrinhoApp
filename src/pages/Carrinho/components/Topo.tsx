import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Detalhe from "./components/Detalhe";
import Topo from "./components/Topo";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <Topo />
      <View style={styles.carrinho}>
        <Detalhe/>
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
