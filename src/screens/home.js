import React from "react";
import { StyleSheet, Text, Image, View, ImageBackground  } from "react-native";
import styles from "../styles/styles";
import Perfil from "../../assets/Perfil.png"
import Medal from "../../assets/MedalIcon.png"
import Level from "../../assets/Level.png"
import Golden from "../../assets/Golden.png"
import Silver from "../../assets/Silver.png"
import Bronze from "../../assets/Bronze.png"
import { ScrollView } from "react-native-web";



export default function Home(){
    return<ScrollView>
    <View style={styles.PerfilView}>
        <Image source={Perfil} style={styles.PerfilPhoto}/>
        <Text style={styles.PerfilName}>Vitor Havila</Text>
    </View>

    <View style={styles.HomeBody}>

        <View style={styles.LevelBarView}>

            <View style={styles.MedalImageView}>
                <Image source={Medal} style={styles.MedalIcon}/>
            </View>

            <View style={styles.LevelImageView}>
                <Image source={Level} style={styles.Level}/>
            </View>

        </View>

        <View style={styles.TaskCompleteView}>
            
                <Image source={Bronze} style={styles.BronzeTaskImage}/>
     
                <Image source={Silver} style={styles.SilverTaskImage}/>

                <Image source={Golden} style={styles.GoldenTaskImage}/>
          

        </View> 


    </View>
    </ScrollView>
}