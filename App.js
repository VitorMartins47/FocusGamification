import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import Home from "./src/screens/home"
import Rotas from "./src/routes/routes"
export default function App() {
  return (
    <View style={{flex:1}}>
     
      <StatusBar/> 
      <SafeAreaView/>
      <Rotas/>
    </View>
  );
}

