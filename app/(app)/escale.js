import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, ScrollView } from "react-native";
;
import { Calendar } from "react-native-calendars";
import { goBack } from "expo-router/build/global-state/routing";
import { useRouter } from 'expo-router';
import {useTheme} from 'styled-components';
//import ptBR from "../../utils/localeCalendarConfig";

//LocaleConfig.locales["pt-br"] = ptBR;
//LocaleConfig.defaultLocale = "pt-br";


export default function Escale() {
  const route = useRouter();
const {colors} = useTheme();
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  Navbar: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: colors.blue,
    justifyContent: 'flex-start',
    gap: 50,
    alignItems: 'center'
  },
  NavbarText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    color: colors.white
  },
  Content: {
    margin: 15
  },
  DetailsContainer: {
    flex: 1,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    gap: 15,
    
  },
  DetailsContainerTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    paddingHorizontal: 102,
    paddingVertical: 5,
    backgroundColor: colors.gray,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  DetailsContent: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    //borderRadius: 10,
    padding: 10,
    width: '100%',
    // iOS Shadow
    shadowColor: colors.black,
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.76,
    shadowRadius: 3.84,

    // Android Shadow
    elevation: 5,
  },
})
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.Navbar}>
        <Ionicons name="arrow-back" size={30} color={colors.white} onPress={() => route.back(goBack)} />
        <Text style={styles.NavbarText}> Minha Escala</Text>
      </View>

      <View style={styles.Content}>

        <Calendar
          style={{ gap: 10, borderRadius: 20 }}

          headerStyle={{
            backgroundColor: colors.gray,
            borderRadius: 20,
          }}

          theme={{
            textMonthFontFamily: 'Montserrat-SemiBold',
            textMonthFontSize: 18,
            monthTextColor: colors.blue,
            arrowColor: colors.blue,
            dayTextColor: colors.black,
            calendarBackground: colors.gray,
            textSectionTitleColor: colors.black,
            textDayHeaderFontFamily: 'Montserrat-SemiBold',
            textDayHeaderFontSize: 14,
            textDayFontFamily: 'Montserrat-SemiBold',
            todayTextColor: colors.black,
            
          }}

          hideExtraDays="true"
          markedDates={{
            '2025-03-03': { selected: true, customStyles: { container: { backgroundColor: 'yellow' }, text: { color: 'black', fontWeight: 'bold' } } },
            '2025-03-04': { selected: true, customStyles: { container: { backgroundColor: 'yellow' }, text: { color: 'black', fontWeight: 'bold' } } },
            '2025-03-05': { selected: true, customStyles: { container: { backgroundColor: '#194a5e' }, text: { color: 'white' } } },
            '2025-03-12': { selected: true, customStyles: { container: { backgroundColor: '#194a5e' }, text: { color: 'white' } } },
            '2025-03-19': { selected: true, customStyles: { container: { backgroundColor: '#194a5e' }, text: { color: 'white' } } },
            '2025-03-26': { selected: true, customStyles: { container: { backgroundColor: '#194a5e' }, text: { color: 'white' } } },
          }}
          markingType={'custom'}
        />


        <View style={{
          marginTop: 30,
          flexDirection: 'column',
          gap: 10
        }}>

          <View style={{
            flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
          }}>
            <View style={{
              backgroundColor: colors.blueLight,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              flexDirection: 'row-reverse',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <Text style={{
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                padding: 7,
                marginHorizontal: 80
              }}> Dias: 5 - 12 - 19 - 26 </Text>
              <View style={{
                backgroundColor: colors.blue,
                borderRadius: 10,
              }}>
                <Text style={{
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 18,
                  padding: 7,
                  color: colors.white
                }}> Folgas</Text>
              </View>
            </View>
          </View>

          <View style={{
            flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
          }}>
            <View style={{
              backgroundColor: colors.yellowLight,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              flexDirection: 'row-reverse',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                padding: 7,
                marginHorizontal: 1,
              }}> Dias: 3(Carnaval) - 4(Carnaval) - 5(Cinzas) </Text>
              <View style={{
                backgroundColor: colors.yellow,
                borderRadius: 10,
              }}>
                <Text style={{
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 16,
                  paddingVertical: 7
                }}> Feriados </Text>
              </View>
            </View>
          </View>

          <View style={{
            flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
          }}>
            <View style={{
              backgroundColor: colors.grayLight,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              flexDirection: 'row-reverse',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                padding: 7,
                marginHorizontal: 85
              }}> Horário: 8h - 18h </Text>
              <View style={{
                backgroundColor: colors.gray,
                borderRadius: 10,
              }}>
                <Text style={{
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 16,
                  paddingVertical: 7
                }}> Trabalho </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.DetailsContainer}>
        <Text style={styles.DetailsContainerTitle}> Esacala Detalhada</Text>

        <View style={styles.DetailsContent}>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Local: </Text>
          <Text style={{ fontFamily: 'Montserrat-Medium' }}> Secretaria de Mobilidade Urbana</Text>
        </View>

        <View style={styles.DetailsContent}>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Escala de Trabalho: </Text>
          <Text style={{ fontFamily: 'Montserrat-Medium' }}> 6 X 1 - Escala Semanal</Text>
        </View>

        <View style={styles.DetailsContent}>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Horário de Trabalho: </Text>
          <Text style={{ fontFamily: 'Montserrat-Medium' }}> 8h ás 18h - 10 horas de trabalho</Text>
        </View>

        <View style={styles.DetailsContent}>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.blue }}> Dia(s) de Folga: </Text>
          <Text style={{ fontFamily: 'Montserrat-Medium' }}> Quarta-Feira</Text>
        </View>

       
        </View>


    </ScrollView>
  )
}

