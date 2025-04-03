import { TouchableOpacity } from "react-native"
import { StyleSheet, View, Text } from "react-native"


export default function Verificacao(handleClose) {
    return(
        <View style={styles.Container}>
            <Text> TESTE MODAL </Text>
       


        
                <TouchableOpacity onPress={handleClose}>
                    <Text>Voltar</Text>
                </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: 'rgba(24,24,24,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    }
}) 