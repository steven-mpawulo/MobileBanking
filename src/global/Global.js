import Snackbar from "react-native-snackbar";

export const showSnackBar = (message) => {
    return Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red'
      });
}