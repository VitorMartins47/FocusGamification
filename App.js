import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import Home from "./src/screens/home"
export default function App() {
  return (
    <View>
     
      <StatusBar style="auto" /> 
      <SafeAreaView/>
      <Home/>
    </View>
  );
}

