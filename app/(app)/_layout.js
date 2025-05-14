import { Stack } from "expo-router"
import color from "../../constants/colors"
import { Image, Text, View } from "react-native"

export default function MainLayout() {
  return (
  <Stack
    screenOptions={{
      headerStyle: { backgroundColor: color.white },
      headerTintColor: color.white,
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
              color: color.blue,
              fontFamily: 'Montserrat-SemiBold'
            }}> MOBILIDADE URBANA</Text>
          </View>
          <Image source={require('../../components/images/header.png')}
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
    </Stack>
  )
}