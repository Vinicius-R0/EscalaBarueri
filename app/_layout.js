import { Stack } from "expo-router";
import {useFonts} from 'expo-font';
import { ActivityIndicator } from "react-native";
export default function Layout() {
  const [fontLoad] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
  });
  if(!fontLoad){
    return <ActivityIndicator size="large" color="#f4511e"/>;
  }
  return(
    <Stack> 
      <Stack.Screen 
      name="login" 
      options={{ headerShown: false }} 
      />

      <Stack.Screen 
      name="email" 
      options={{ headerShown: false }} 
      />

      <Stack.Screen 
      name="telefone" 
      options={{ headerShown: false }} 
      />


      <Stack.Screen
      name='(app)'
      options={{headerShown: false}}/>


    </Stack>



    
  )
}