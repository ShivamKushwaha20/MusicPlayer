import { Stack } from "expo-router";
import { StatusBar, StatusBarStyle } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "./constants/tokens";


const App=()=>{
  return(
    <SafeAreaProvider>
      <RootLayout/>
      <StatusBar  hidden={false} />
      



    </SafeAreaProvider>
  ) 
}




 function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{headerShown:false}} />
    </Stack>
  );
}

export default App;
