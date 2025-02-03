import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/home.js"
import Task from "../screens/tarefas.js"
const Tab = createBottomTabNavigator()
export default function Rotas(){
    return <NavigationContainer>
        <Tab.Navigator 
        screenOptions={{
            headerTransparent:true,
            headerShown:false,
            tabBarActiveTintColor:'orange',
            tabBarInactiveTintColor:'white',
            tabBarLabelStyle:{
                width:'100%',
                flex:1,
                fontWeight:'bold',
                fontSize:'16',
                lineHeight:21,
                paddingTop:21,
                backgroundColor: 'red'
            },
            tabBarStyle:{
                width:'100%',
                height:60,
                lineHeight:21,
            },

            tabBarIconStyle:{
                display:'none'
            }
        }}>
            <Tab.Screen name ='Home' component={Home}/>
            <Tab.Screen name ='Task' component={Task}/>

        </Tab.Navigator>

    </NavigationContainer>
}