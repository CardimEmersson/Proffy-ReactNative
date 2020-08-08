import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import Landing from './src/pages/Landing';
import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo';
import {Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import AppStack from './src/routes/AppStack';

//instalar fonts do google
//expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

//rotas
//yarn add @react-navigation/native
//expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
//navegação em stack/pilha
//yarn add @react-navigation/stack
//navagação em abas
//yarn add @react-navigation/bottom-tabs 
//yarn add axios
//expo install @react-native-community/async-storage
export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })
  if(!fontsLoaded){
    return <AppLoading/>
  } else{
    return (
      //React fragment
      <>   
        <AppStack />  
        <StatusBar style="light" />
      </>
     );
  }
 
}

