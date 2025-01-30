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
    }
})