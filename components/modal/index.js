import { Pressable, Text, View, StyleSheet } from "react-native";
import {ThemeProvider } from '../../theme/Theme'
import { useTheme } from 'styled-components/native';

export default function PopUp({isOpen}) {

 const {colors} = useTheme();
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  modalView:{
    backgroundColor: '#fff',
    width: '100%',
    margin: 20,
    borderRadius: 20,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
  },
  headerTitle:{
    fontFamily: 'Montserrat-Bold',
    fontSize: 14
  },
  ContentText:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 10
  },
  Button:{
    backgroundColor: colors.defaultColor
  }
})
  if (isOpen) {
  return (
    <ThemeProvider>
    <View style={styles.Container}>
      <View style={styles.modalView}>

        <View style={styles.header}>
          <Text style={styles.headerTitle}> !ATUALIZAÇÃO NA ESCALA! </Text>
        </View>

        <View style={styles.Content}>
          <Text style={styles.ContentText}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Text>
        </View>

        <View> 
          <Pressable style={styles.Button} onPress>
            <Text style={styles.ButtonText}> Confirmar</Text>
          </Pressable>
        </View>
      </View>
    </View>
    </ThemeProvider>
  )
} return null
}
