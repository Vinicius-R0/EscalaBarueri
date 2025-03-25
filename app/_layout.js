import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image source={require('../components/images/logobarueri.png')} />

        <Text style={styles.titulo}>Escala<br></br>Barueri</Text>
      </View>

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
    containerLogo:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
        flexDirection: 'column',
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
