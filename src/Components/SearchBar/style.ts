import { StyleSheet } from "react-native";
import colors from "../../Utils/colors";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.primaryWhite,
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 12,
      margin: 12,
    },
    imageStyle: {
      height: 40,
      width: 40,
    },
    input: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: 20,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 8,
      marginRight: 10,
    },
  });