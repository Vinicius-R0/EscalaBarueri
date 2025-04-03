import { StyleSheet, View, Text } from "react-native"


export default function Verificacao() {
    return(
        <View style={styles.Container}>
            <Text> TESTE MODAL </Text>
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