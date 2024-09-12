import { StyleSheet } from "react-native";
import colors from "../../Utils/colors";
import Fonts from "../../Utils/Fonts";

export const styles = StyleSheet.create({
    imageContainer: {
      padding: 20,
      marginTop: '30%',
      alignSelf: 'center',
    },
    imageStyle: {
      height: 80,
      width: 270,
    },
    pressed: {
      opacity: 0.75,
    },
    underText: {
      textDecorationLine: 'underline',
      fontSize: 14,
      fontFamily : Fonts.Poppins,
      color: colors.primaryTheme,
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });