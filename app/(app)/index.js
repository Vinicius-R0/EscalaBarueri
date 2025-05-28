import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
;
import { SimpleLineIcons, Feather, FontAwesome, Octicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import {useTheme} from 'styled-components';



export default function Home() {
  const route = useRouter();
const {colors} = useTheme();;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white
  },
  Navbar: {
    padding: 30,
    flexDirection: 'row',
    backgroundColor: colors.blue,
    justifyContent: 'space-between',

  },
  User: {
    margin: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 25,
    color: colors.blue
  },

  buttonContainer: {
    flexDirection: 'row',
    margin: 20,
    gap: 20
  },
  buttonCalendar: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    borderRadius: 15,
    backgroundColor: colors.blueLight,
    aspectRatio: 1,
  },
  buttonsRight: {
    flex: 1,
    justifyContent: 'space-around',
    gap: 15
  },
  buttonProfile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    borderRadius: 15,
    backgroundColor: colors.blueDark,

  },
  buttonConfig: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    borderRadius: 15,
    backgroundColor: colors.blue,
  },
  notificationContainer: {
    flex: 1,
    gap: 10,
    margin: 20,
    borderRadius: 10,
    backgroundColor: colors.gray,
    alignItems: 'center',
    // iOS Shadow
    shadowColor: colors.black,
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.76,
    shadowRadius: 3.84,

    // Android Shadow
    elevation: 10,
  },
  notificationContainerTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    margin: 10
  },
  notificationContent: {
    margin: 0,
    flex: 1,
    backgroundColor: colors.white,
    gap: 10,
    justifyContent: 'center',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 10
  },


})
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.Navbar}>
        <SimpleLineIcons name="logout" color={colors.white} size={30} onPress={() => route.navigate('/login')} />
        <Octicons name="bell" color={colors.white} size={30} onPress={() => route.push('/notification')} />
      </View>

      <Text style={styles.User}>Olá, Rogério!</Text>

      <View style={styles.buttonContainer}>

        <Pressable style={styles.buttonCalendar} onPress={() => route.push('/escale')}>
          <Feather name='calendar' color={colors.black} size={100} />
          <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 20 }}> Minha Escala </Text>
        </Pressable>

        <View style={styles.buttonsRight}>

          <Pressable style={styles.buttonProfile} onPress={() => route.push('/profile')}>
            <Feather name='user' color={colors.white} size={40} />
            <Text style={{ color: colors.white, fontFamily: 'Montserrat-Medium', fontSize: 15 }}> Perfil </Text>
          </Pressable>

          <Pressable style={styles.buttonConfig} onPress={() => route.push('/config')}>
            <FontAwesome name='gear' color={colors.white} size={35} />
            <Text style={{ color: colors.white, fontFamily: 'Montserrat-Medium', fontSize: 15 }}> Config </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.notificationContainer}>
        <Text style={styles.notificationContainerTitle}> Notificações Recentes </Text>

        <View style={styles.notificationContent}>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Atualização </Text>
          <Text style={{ fontFamily: 'Montserrat-Medium' }}> Olá, Rogério da Silva Oliveira</Text>
          <Text style={{ fontFamily: 'Montserrat-Regular' }}>
            sua escala foi atualizada, verifique se necessário,
            para que não haja problema com horários ou dias trabalhados.
          </Text>

          <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
            <Text style={{ fontFamily: 'Montserrat-regular' }}>25/04/2025</Text>
          </View>
        </View>

        <View style={styles.notificationContent}>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Atualização </Text>
          <Text style={{ fontFamily: 'Montserrat-Medium' }}> Olá, Rogério da Silva Oliveira</Text>
          <Text style={{ fontFamily: 'Montserrat-Regular' }}>
            sua escala foi atualizada, verifique se necessário,
            para que não haja problema com horários ou dias trabalhados.
          </Text>

          <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
            <Text style={{ fontFamily: 'Montserrat-regular' }}>25/04/2025</Text>
          </View>
        </View>
      </View>


    </ScrollView>
  )
}

