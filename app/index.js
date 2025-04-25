import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { Link, useRouter } from 'expo-router';
import colors from '../constants/colors';



export default function Login() {
   const router = useRouter();

  return (

   <View style={styles.Container}>
      <ImageBackground source={require('../components/images/background.png')} style={styles.fundoContainer} />

      <View style={styles.logoImage}>
        <Image source={require('../components/images/logo.png')} />
        <Text style={styles.Titulo}>Escala</Text>
        <Text style={styles.Titulo}>Barueri</Text> 
      </View>
    

      <View style={styles.inputContainer}>

        <Text style={styles.tituloInput}> LOGIN </Text>

        <TextInput style={styles.Input} 
        placeholder='Número de Matrícula'
        placeholderTextColor={colors.blue}
        keyboardType='numeric'>
        </TextInput>

        <TextInput style={styles.Input}
        placeholder='Senha'
        placeholderTextColor={colors.blue}
        keyboardType='numeric'>
        </TextInput>

        <TouchableOpacity 
        style={styles.botaoInput} onPress={() => router.navigate('(app)')}>
          <Text style={styles.textBotaoInput}> ENTRAR </Text>
        </TouchableOpacity>


        <Link href='email'style={styles.trocarInput}>
            <Text style={styles.textTrocarInput}> ESQUECI MINHA SENHA </Text>
        </Link>

        
      
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        margin: 0,
        alignItems: 'center',
    },
    fundoContainer:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage:{
        margin: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '40%',
    },
    Titulo:{
        fontSize: 50,
        fontWeight: 'regular',
        color: colors.white,
        FlexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat',
        letterSpacing: 8,
        textAlign: 'center',
    },
    inputContainer:{
      flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: '20%',
        borderTopLeftRadius: '20%',
        paddingHorizontal: 25,
        width: '100%',
        height: '100%',
    },
    tituloInput:{
        fontSize: 30,
        fontWeight: '900',
        marginBottom: 30,
        color: colors.blue
    },
    Input:{
        placeholderTextColor: colors.blue,
        width: 300,
        height: 50,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: colors.blue,
        borderRadius: 20,
        marginBottom: 40,
    },
    botaoInput:{
        width: 300,
        height: 50,
        backgroundColor: colors.blue,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 20,

            // iOS Shadow
            shadowColor: colors.black,
            shadowOffset: { width: 5, height: 7 },
            shadowOpacity: 0.76,
            shadowRadius: 3.84,

            // Android Shadow
            elevation: 10,
    },
    textBotaoInput:{
        color: 'white',
        fontFamily: 'Montserrat',
        letterSpacing: 10,
        fontSize: 20,
        fontWeight: 500
    },
    textTrocarInput:{
        color: colors.blue,
        fontFamily: 'Montserrat',
        letterSpacing: 5,
        fontSize: 10,
        fontWeight: 'regular',
        textDecorationLine: 'underline',
        underlineColor: colors.blue,  
      },
  }
);
