import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

export default function Login() {
  return (

   <View style={styles.container}>
      <ImageBackground source={require('../components/images/loginbackground.png')} style={styles.logoimage}>
        <Image source={require('../components/images/logobarueri.png')} />
        <Text style={styles.titulo}>Escala<br></br>Barueri</Text>
      </ImageBackground>
    </View>
  
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoimage:{
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '70%',
    },
    titulo:{
        fontSize: 30,
        color: '#000000',
        FlexDirection: 'column',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat',
        letterSpacing: 10,
        textAlign: 'center',
    }
});
