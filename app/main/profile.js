import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { goBack } from 'expo-router/build/global-state/routing'
import { useTheme } from 'styled-components/native';


export default function Profile() {
  const route = useRouter();
  const { colors } = useTheme();
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.background
  },
  Navbar: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: colors.contentsDefaultColor,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 100
  },
  NavbarText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    color: colors.onBackground
  },
  Content: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Circle: {
    padding: 40,
    borderWidth: 3,
    borderColor: colors.defaultColor,
    borderRadius: 150,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  UserContainer:{
      marginTop: 20,
      padding: 20,
      borderWidth: 1,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
  }
})
  return (
    <View style={styles.Container}>
      <View style={styles.Navbar}>
        <Ionicons name='arrow-back' size={30} color={colors.onBackground} onPress={() => route.back(goBack)} />
        <Text style={styles.NavbarText}> Perfil</Text>
      </View>

      <View style={styles.Content}>

        <View style={styles.Circle}>
          <Feather name="user" size={130} color="black" />
        </View>

        <View style={styles.UserContainer}>
          <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 22, marginBottom: 15,color: colors.onBackground}}>ROGER DA SILVA OLIVEIRA</Text>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 20, color: colors.defaultColor}}>N° de Matrícula:</Text>
          <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 18, color: colors.onBackground}}>45658</Text>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 20, color: colors.defaultColor}}>Telefone:</Text>
          <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 18, color: colors.onBackground}}>11 94987 - 5366</Text>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 20, color: colors.defaultColor}}>Email:</Text>
          <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 18, marginBottom: 25, color: colors.onBackground}}>roger.oliveira66@gmail.com</Text>

          <Pressable style={{ backgroundColor: colors.green, padding: 7, borderRadius: 10, marginBottom: 15}}>
            <Text style={{ fontFamily: 'Montserrat-Semibold', fontSize: 18, color:colors.onBackground}}>ATUALIZAR DADOS</Text>
          </Pressable>
          <Pressable style={{backgroundColor: colors.defaultColor, padding: 7, borderRadius: 10}}>
            <Text style={{ fontFamily: 'Montserrat-Semibold', fontSize: 18, color:colors.onBackground}}>REDEFINIR SENHA</Text>
          </Pressable>
        </View>

      </View>
    </View>
  )
}
