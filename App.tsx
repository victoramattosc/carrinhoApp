import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { StatusBar, SafeAreaView } from "react-native";
import Carrinho from "./src/pages/Carrinho/index";

export default function App() {
  const [fonteCarregada] = useFonts({
    "MRegular" : Montserrat_400Regular,
    "MItalic" : Montserrat_400Regular_Italic,
    "MBold" : Montserrat_700Bold
  })

  if(!fonteCarregada){
    return null;
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <Carrinho />
    </SafeAreaView>
  );
}
