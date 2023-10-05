import React from 'react';
import {Image, Text, StyleSheet, Dimensions } from "react-native";
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

type Props ={
    titulo: string
}

export default function Topo({titulo}: Props){
    return <>
    <Image source={topo} style={styles.topo}/>
         <Text style={styles.titulo}>{titulo}</Text>
    </>
}

const styles = StyleSheet.create({
    topo:{
        width: '100%',  
        height: 578 / 786 * width,
    },
    titulo:{
      width: '100%',
      position: 'absolute',
      color: 'white',
      textAlign: 'center',
      fontSize: 24,
      lineHeight: 26,
      padding: 16,
      fontFamily: 'MontserratBold'
    },
});