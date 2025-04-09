
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import colors from "../../constants/colors";
import { useState, useEffect } from "react";
import { getHash } from 'react-native-otp-verify';





export default function Verificacao({handleClose}) {
    const [code, setCode] = useState('');

    useEffect(() => {
      getHash().then((hash) => console.log("Hash ",hash));
    },[]);

  
    return(
        <View style={styles.Container}>
          <View style={styles.Content}>

        <Text style={styles.tituloInput}>Insira o código</Text>
        
        <View style={styles.codeArea}>
          <TextInput style={styles.codeInput} keyboardType="numeric" maxLength={1} />
          <TextInput style={styles.codeInput} keyboardType="numeric" maxLength={1}/>
          <TextInput style={styles.codeInput} keyboardType="numeric" maxLength={1}/>
          <TextInput style={styles.codeInput} keyboardType="numeric" maxLength={1}/>
        </View>

        <View style={styles.botaoArea}>
          <Pressable style={styles.botaoInput} onPress={handleClose}>
            <Text style={styles.textBotaoInput}> FECHAR </Text>
          </Pressable>
          
          <Pressable style={styles.botaoInput} onPress={handleClose}>
            <Text style={styles.textBotaoInput}> CONFIRMAR </Text>
          </Pressable>
        </View>

        </View>
      </View>
        
    )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1, 
        backgroundColor: colors.transparent,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Content:{
        width: '80%',
        height: '30%',
        backgroundColor: colors.white,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tituloInput:{
        textAlign: 'center', 
        fontSize: 30,
        color: colors.blue,
    },
    codeArea:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginTop: 20,
    },
    codeInput:{
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: colors.blue,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        color: colors.blue,
    },
    botaoArea:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 30,
    },
    botaoInput:{
        width: 120,
        height: 40,
        backgroundColor: colors.blue,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
    },
    textBotaoInput:{
      color: 'white',
      fontFamily: 'Montserrat',
      fontWeight: 900,
      letterSpacing: 2,
    }
    
}) 