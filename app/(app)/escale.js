import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import colors from "../../constants/colors";
import { Calendar, LocaleConfig, WeekCalendar } from "react-native-calendars";
import { goBack } from "expo-router/build/global-state/routing";
import { useRouter } from "expo-router";
//import ptBR from "../../utils/localeCalendarConfig";

//LocaleConfig.locales["pt-br"] = ptBR;
//LocaleConfig.defaultLocale = "pt-br";


export default function Escale() {
  const route = useRouter()
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
            todayTextColor: colors.black
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

      </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white
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
    margin: 10
  }
})