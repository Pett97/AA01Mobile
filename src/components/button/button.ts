import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
const styles = StyleSheet.create({
  container: {
    width:200,
    height:90,
    borderWidth:3,
    borderRadius: 20,
    borderColor:COLORS.PRIMARY,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
});

export default styles;