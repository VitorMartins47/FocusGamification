import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;
export default StyleSheet.create({


    PerfilView:{
        width: width,
        height: 100,
        backgroundColor:'orange',
        flexDirection: "row",
        alignItems:'center'
    },
    PerfilPhoto:{
        borderColor:"red",
        borderWidth: 1,
        borderRadius: 50,
        width:100,
        height:100,
        marginLeft: 20,
        marginRight: 20
    },

    PerfilName:{
        textAlign: 'center',
        fontSize: 20
    },

    LevelBarView:{
        backgroundColor:"",
        flexDirection: "row",
        justifyContent:'center'
    },

    MedalIcon:{
        width:120,
        height:120,
        margin:10,
    },

    Level:{
        width:120,
        height:120,
        margin:10,
    },

    TaskCompleteView:{
        flexDirection:"row",
        justifyContent:'center',
        marginTop:50
       
    },

    BronzeTaskImage:{
        width:100,
        height:100,
        margin:10,
    },

    SilverTaskImage:{
        width:100,
        height:100,
        margin:10,
    },

    GoldenTaskImage:{
        width:100,
        height:100,
        margin:5,
    }

})