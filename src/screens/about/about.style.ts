import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  header:{
    width: '100%'
  },
  link: {
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: COLORS.PRIMARY, 
    marginBottom: 20, 
  },
  version: {
    fontSize: 16,  
    marginBottom: 10, 
  },
  developer: {
    fontSize: 16, 
    color: COLORS.SECONDARY, 
    textAlign: 'center', 
    marginBottom: 20,
  },
});

export default styles;
