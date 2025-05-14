import { View, Text, StyleSheet, ScrollView } from "react-native";
import colors from '../../constants/colors'
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { goBack } from "expo-router/build/global-state/routing";

export default function Notification() {
  const route = useRouter()
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.Navbar}>
        <Ionicons name='arrow-back' size={30} color={colors.white} onPress={() => route.back(goBack)} />
        <Text style={styles.NavbarText}>Notificações</Text>
      </View>


    <View style={styles.notificationContainer}>
      <View style={styles.notificationContent}>
        <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Atualização </Text>
        <Text style={{ fontFamily: 'Montserrat-Medium' }}> Olá, Rogério da Silva Oliveira</Text>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>
          sua escala foi atualizada, verifique se necessário,
          para que não haja problema com horários ou dias trabalhados.
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text style={{ fontFamily: 'Montserrat-regular'}}>25/04/2025</Text>
        </View>
      </View>

      <View style={styles.notificationContent}>
        <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Atualização </Text>
        <Text style={{ fontFamily: 'Montserrat-Medium' }}> Olá, Rogério da Silva Oliveira</Text>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>
          sua escala foi atualizada, verifique se necessário,
          para que não haja problema com horários ou dias trabalhados.
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text style={{ fontFamily: 'Montserrat-regular'}}>25/04/2025</Text>
        </View>
      </View>

      <View style={styles.notificationContent}>
        <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Atualização </Text>
        <Text style={{ fontFamily: 'Montserrat-Medium' }}> Olá, Rogério da Silva Oliveira</Text>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>
          sua escala foi atualizada, verifique se necessário,
          para que não haja problema com horários ou dias trabalhados.
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text style={{ fontFamily: 'Montserrat-regular'}}>25/04/2025</Text>
        </View>
      </View>

      <View style={styles.notificationContent}>
        <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Atualização </Text>
        <Text style={{ fontFamily: 'Montserrat-Medium' }}> Olá, Rogério da Silva Oliveira</Text>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>
          sua escala foi atualizada, verifique se necessário,
          para que não haja problema com horários ou dias trabalhados.
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text style={{ fontFamily: 'Montserrat-regular'}}>25/04/2025</Text>
        </View>
      </View>

      <View style={styles.notificationContent}>
        <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Atualização </Text>
        <Text style={{ fontFamily: 'Montserrat-Medium' }}> Olá, Rogério da Silva Oliveira</Text>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>
          sua escala foi atualizada, verifique se necessário,
          para que não haja problema com horários ou dias trabalhados.
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text style={{ fontFamily: 'Montserrat-regular'}}>25/04/2025</Text>
        </View>
      </View>

      <View style={styles.notificationContent}>
        <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Atualização </Text>
        <Text style={{ fontFamily: 'Montserrat-Medium' }}> Olá, Rogério da Silva Oliveira</Text>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>
          sua escala foi atualizada, verifique se necessário,
          para que não haja problema com horários ou dias trabalhados.
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text style={{ fontFamily: 'Montserrat-regular'}}>25/04/2025</Text>
        </View>
      </View>

      <View style={styles.notificationContent}>
        <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Atualização </Text>
        <Text style={{ fontFamily: 'Montserrat-Medium' }}> Olá, Rogério da Silva Oliveira</Text>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>
          sua escala foi atualizada, verifique se necessário,
          para que não haja problema com horários ou dias trabalhados.
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text style={{ fontFamily: 'Montserrat-regular'}}>25/04/2025</Text>
        </View>
      </View>

      <View style={styles.notificationContent}>
        <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Atualização </Text>
        <Text style={{ fontFamily: 'Montserrat-Medium' }}> Olá, Rogério da Silva Oliveira</Text>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>
          sua escala foi atualizada, verifique se necessário,
          para que não haja problema com horários ou dias trabalhados.
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text style={{ fontFamily: 'Montserrat-regular'}}>25/04/2025</Text>
        </View>
      </View>

      <View style={styles.notificationContent}>
        <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Atualização </Text>
        <Text style={{ fontFamily: 'Montserrat-Medium' }}> Olá, Rogério da Silva Oliveira</Text>
        <Text style={{ fontFamily: 'Montserrat-Regular' }}>
          sua escala foi atualizada, verifique se necessário,
          para que não haja problema com horários ou dias trabalhados.
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'flex-end'}}>
        <Text style={{ fontFamily: 'Montserrat-regular'}}>25/04/2025</Text>
        </View>
      </View>


    </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white
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

  notificationContainer: {
    flex: 1,
    gap: 10,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.white
   
  },
  notificationContent: {
    margin: 0,
    flex: 1,
    backgroundColor: colors.white,
    gap: 10,
    justifyContent: 'center',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 10,

     // iOS Shadow
     shadowColor: colors.black,
     shadowOffset: { width: 5, height: 7 },
     shadowOpacity: 0.76,
     shadowRadius: 3.84,
 
     // Android Shadow
     elevation: 10,
  }
})