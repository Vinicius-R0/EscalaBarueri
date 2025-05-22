import { View, StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Config(){
  const route = useRouter()
  return(
    <View style={styles.Container}>
       <View style={styles.Navbar}>
        <Ionicons name="arrow-back" size={30} color={colors.white} onPress={() => route.back(goBack)} />
        <Text style={styles.NavbarText}> Configurações </Text>
      </View>

      <View>
        <View>
          <Ionicons name='sunny-sharp' />
        </View>
        <View>
        <MaterialCommunityIcons name="human-handsup" size={24} color="black" />
        </View>
        <View></View>
        <View></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex: 1
  },
  Navbar: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: colors.blue,
    justifyContent: 'flex-start',
    gap: 50,
    alignItems: 'center'
  },
  NavbarText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    color: colors.white
  },
})