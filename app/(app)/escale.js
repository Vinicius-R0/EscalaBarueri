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
    backgroundColor: colors.background,
  },
  Navbar: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: colors.contentsBlue,
    justifyContent: 'flex-start',
    gap: 50,
    alignItems: 'center'
  },
  NavbarText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    color: colors.onBackground
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
    backgroundColor: colors.contentsGray,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  DetailsContent: {
    backgroundColor: colors.contentsWhite,
    justifyContent: 'center',
    borderRadius: 10,
    //borderRadius: 10,
    padding: 10,
    width: '100%',
    // iOS Shadow
    shadowColor: '#000000',
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
        <Ionicons name="arrow-back" size={30} color={colors.onBackground} onPress={() => route.back(goBack)} />
        <Text style={styles.NavbarText}> Minha Escala</Text>
      </View>

      <View style={styles.Content}>

        <Calendar
          style={{ gap: 10, borderRadius: 20 }}

          headerStyle={{
            backgroundColor: colors.calendar,
            borderRadius: 20,
          }}

          theme={{
            textMonthFontFamily: 'Montserrat-SemiBold',
            textMonthFontSize: 18,
            monthTextColor: colors.defaultBlue,
            arrowColor: colors.defaultBlue,
            dayTextColor: colors.onBackground,
            calendarBackground: colors.calendar,
            textSectionTitleColor: colors.onBackground,
            textDayHeaderFontFamily: 'Montserrat-SemiBold',
            textDayHeaderFontSize: 14,
            textDayFontFamily: 'Montserrat-SemiBold',
            todayTextColor: colors.onBackground,
            
          }}

          hideExtraDays='true'
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
              backgroundColor: colors.onBlue,
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
                marginHorizontal: 80,
                color: colors.onBackground
              }}> Dias: 5 - 12 - 19 - 26 </Text>
              <View style={{
                backgroundColor: colors.defaultBlue,
                borderRadius: 10,
              }}>
                <Text style={{
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 18,
                  padding: 7,
                  color: colors.onBackground
                }}> Folgas</Text>
              </View>
            </View>
          </View>

          <View style={{
            flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
          }}>
            <View style={{
              backgroundColor: colors.onYellow,
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
                color: colors.onBackground
              }}> Dias: 3(Carnaval) - 4(Carnaval) - 5(Cinzas) </Text>
              <View style={{
                backgroundColor: colors.yellow,
                borderRadius: 10,
              }}>
                <Text style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 16,
                  paddingVertical: 7,
                  color: colors.onBackground
                }}> Feriados </Text>
              </View>
            </View>
          </View>

          <View style={{
            flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
          }}>
            <View style={{
              backgroundColor: colors.onGray,
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
                marginHorizontal: 85,
                color: colors.onBackground
              }}> Horário: 8h - 18h </Text>
              <View style={{
                backgroundColor: colors.gray,
                borderRadius: 10,
              }}>
                <Text style={{
                  fontFamily: 'Montserrat-SemiBold',
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
          <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.defaultBlue }}> Local: </Text>
          <Text style={{ fontFamily: 'Montserrat-Medium', color: colors.onBackground }}> Secretaria de Mobilidade Urbana</Text>
        </View>

        <View style={styles.DetailsContent}>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.defaultBlue }}> Escala de Trabalho: </Text>
          <Text style={{ fontFamily: 'Montserrat-Medium', color: colors.onBackground }}> 6 X 1 - Escala Semanal</Text>
        </View>

        <View style={styles.DetailsContent}>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.defaultBlue }}> Horário de Trabalho: </Text>
          <Text style={{ fontFamily: 'Montserrat-Medium', color: colors.onBackground }}> 8h ás 18h - 10 horas de trabalho</Text>
        </View>

        <View style={styles.DetailsContent}>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', color: colors.defaultBlue }}> Dia(s) de Folga: </Text>
          <Text style={{ fontFamily: 'Montserrat-Medium', color: colors.onBackground }}> Quarta-Feira</Text>
        </View>

       
        </View>


    </ScrollView>
  )
}

