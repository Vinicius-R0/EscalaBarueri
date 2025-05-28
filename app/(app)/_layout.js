import { Stack } from "expo-router"
import { Image, Text, View } from "react-native"
import { useTheme } from 'styled-components/native'

export default function MainLayout() {
  const {colors} = useTheme();
  return (
   
  <Stack
    screenOptions={{
      headerStyle: { backgroundColor: colors.white },
      headerTintColor: colors.white,
      headerBackVisible: false,
      headerTitle: () => (
        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 100
        }}>
          <View style={{
            justifyContent: "center",
            alignItems: "center",

          }}>
            <Text style={{
              fontFamily: 'Montserrat-regular'
            }}> Secretaria de </Text>,
            <Text style={{
              color: colors.blue,
              fontFamily: 'Montserrat-SemiBold'
            }}> MOBILIDADE URBANA</Text>
          </View>
          <Image source={require('../../assets/images/header.png')}
          />
        </View>
      ),
    }}>

      <Stack.Screen
        name='index'
      />

      <Stack.Screen
      name="profile"
      />

      <Stack.Screen
      name="notification"
      />
      
      <Stack.Screen
      name="escale"
      />

      <Stack.Screen
      name="config"
      />
    </Stack>
  )
}