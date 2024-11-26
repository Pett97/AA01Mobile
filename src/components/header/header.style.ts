import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:COLORS.PRIMARY,
    height:100,
    alignItems:"center"
  },
  nameScreen:{
    color:"white",
    marginLeft:50
  },
  containerAction:{
    marginRight:10,
    borderWidth:2,
  }
});

export default styles;
