
import { StyleSheet, Text, View, Pressable } from "react-native";
import colors from "../../constants/colors";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { useState } from "react";
import { Platform } from "react-native";


const CELL = 6;

export default function Verificacao({handleClose}) {
    const [code, setCode] = useState('');
  const ref = useBlurOnFulfill({code, cell: CELL});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });
    return(
        <View style={styles.Container}>
          <View style={styles.Content}>
        <Text style={styles.tituloInput}>Insira o código</Text>
        <CodeField
          ref={ref}
          {...props}
            appear
          value={code}
          onChangeText={setCode}
          cellCount={CELL}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
          testID="my-code-input"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor/> : null)}
            </Text>
          )}
        />
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
    codeFieldRoot:{
        marginTop: 20
    },
    cell: {
      margin: 8,
        width: 30,
        height: 40,
        lineHeight: 38,
        fontSize: 25,
        borderBottomWidth: 1,
        borderColor: colors.blue,
        textAlign: 'center',
        color: colors.blue,
    },
    focusCell: {
        borderColor: '#000',
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