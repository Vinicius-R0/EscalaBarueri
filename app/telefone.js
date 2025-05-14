import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, TextInput, Pressable } from 'react-native';
import colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React from 'react';



export default function Telefone() {
  const route = useRouter()
  return (

   <View style={styles.Container}>
      <ImageBackground source={require('../components/images/background.png')} style={styles.fundoContainer} />

      <View style={styles.logoImage}>
        <Image source={require('../components/images/logo.png')} />
        <Text style={styles.Titulo}>Escala</Text>
        <Text style={styles.Titulo}>Barueri</Text> 
      </View>
    

      <View style={styles.inputContainer}>

      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <Pressable style={styles.arrowBack}
          onPress={() => route.replace('login')}>
            <Ionicons name='arrow-back' size={24} color={colors.blue}/>
          </Pressable>
          <Text style={styles.tituloInput}> REDEFINIR SENHA </Text>
        </View>

        <TextInput style={styles.Input} 
        keyboardType='numeric'
        placeholder='Número de telefone'
        placeholderTextColor={colors.blue}>
        </TextInput>

        <TouchableOpacity style={styles.botaoInput}>
          <Text style={styles.textBotaoInput}> VERIFICAR </Text>
        </TouchableOpacity>

        
        <Link href={'/email'} style={styles.trocarInput} >
          <Text style={styles.textTrocarInput}> CONTINUAR COM EMAIL </Text>
        </Link>
      
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
           color: colors.white,
           FlexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
           fontFamily: 'Montserrat-Regular',
           letterSpacing: 5,
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
           fontSize: 25,
           fontFamily: 'Montserrat-Bold',
           letterSpacing: 3,
           marginBottom: 30,
           marginTop: 30,
           color: colors.blue,
       },
       Input:{
           placeholderTextColor: colors.blue,
           fontFamily: 'Inter-Regular',
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
           color: colors.white,
           fontFamily: 'Inter-Regular',
           letterSpacing: 8,
           fontSize: 20,
       },
       textTrocarInput:{
           color: colors.blue,
           fontFamily: 'Montserrat-Medium',
           letterSpacing: 2,
           fontSize: 12,
           textDecorationLine: 'underline',
           underlineColor: colors.blue,  
         },
     }
   );
   
