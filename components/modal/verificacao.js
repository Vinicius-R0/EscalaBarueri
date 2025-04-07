
import { StyleSheet, View, Text,TouchableOpacity, SafeAreaView } from "react-native";
import colors from "../../constants/colors";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { useState } from "react";



export default function Verificacao(handleClose) {
    const [code, setCode] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
    return(
        <SafeAreaView style={styles.Container}>
        <Text style={styles.tituloInput}>DIGITE CÓDIGO</Text>
        <CodeField
          ref={ref}
          {...props}
            appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
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
      </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1, 
        padding: 20
    },

    tituloInput:{
        textAlign: 'center', fontSize: 30
    },
    codeFieldRoot:{
        marginTop: 20
    },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
}) 