import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, TextInput } from 'react-native';

export default function Login() {
  return (

   <View style={styles.Container}>
      <ImageBackground source={require('../components/images/loginbackground.png')} style={styles.fundoContainer} />

      <View style={styles.logoImage}>
        <Image source={require('../components/images/logobarueri.png')} />
        <Text style={styles.Titulo}>Escala</Text>
        <Text style={styles.Titulo}>Barueri</Text> 
      </View>
    

      <View style={styles.inputContainer}>

        <Text style={styles.tituloInput}> LOGIN </Text>

        <TextInput style={styles.Input} 
        placeholder='Número de Matrícula'
        placeholderTextColor={'#288B94'}
        keyboardType='numeric'>
        </TextInput>

        <TextInput style={styles.Input}
        placeholder='Senha'
        placeholderTextColor={'#288B94'}
        keyboardType='numeric'>
        </TextInput>

        <TouchableOpacity style={styles.botaoInput} >
          <Text style={styles.textBotaoInput}> ENTRAR </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.trocarInput} >
          <Text style={styles.textTrocarInput}> ESQUECI MINHA SENHA </Text>
        </TouchableOpacity>
      
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
    Container:{
        flex: 1
    },
    fundoContainer:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage:{
       backgroundColor: '#003B40FF4',
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
        color: '#FFFFFFFF',
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
        backgroundColor: '#FFFFFFFF',
        width: '100%',
        height: '100%',
    },
    tituloInput:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#288B94',
        fontFamily: 'Montserrat',
    },
    Input:{
        placeholderTextColor: '#288B94',
        width: 300,
        height: 50,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#288B94',
        borderRadius: 20,
        marginBottom: 40,
    },
    botaoInput:{
        width: 300,
        height: 50,
        backgroundColor: '#288B94',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 20
    },
    textBotaoInput:{
        color: 'white',
        fontFamily: 'Montserrat',
        letterSpacing: 10,
        fontSize: 20,
        fontWeight: 500
    },
    textTrocarInput:{
        color: '#288B94',
        fontFamily: 'Montserrat',
        letterSpacing: 5,
        fontSize: 10,
        fontWeight: 'regular',
        textDecorationLine: 'underline',
        underlineColor: '#288B94',  
      },
  }
);
