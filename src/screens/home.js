import React from "react";
import { StyleSheet, Text, Image, View  } from "react-native";
import styles from "../styles/styles";
import Perfil from "../../assets/Perfil.png"

export default function Home(){
    return<>
    <View style={styles.PerfilView}>
        <Image source={Perfil} style={styles.PerfilPhoto}/>
        <Text style={styles.PerfilName}>Vitor Havila Ferreira Martins</Text>
    </View>
    </>
}