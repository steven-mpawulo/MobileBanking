import Snackbar from "react-native-snackbar";

export const showSnackBar = (message) => {
    return Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red'
      });
}

export const formatDate = (unformatedDate) => {
  let date = new Date(unformatedDate);
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0');
  let yyyy = date.getFullYear();
 return  date = mm + '/' + dd + '/' + yyyy;

}