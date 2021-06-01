import {StyleSheet} from 'react-native';
import { Colors } from '../../const/colors';

export const styles = StyleSheet.create({
 container: {
   display: 'flex',
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: Colors.primary
 },
 formContainer: {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%',
   maxWidth: 400,
   padding: 8,
 },
 title: {
   fontSize: 20,
   fontWeight: 'bold',
   textTransform: 'uppercase',
   paddingVertical: 16,
   color: Colors.textPrimaryContrast
 },
 inputText: {
   padding: 4,
   paddingHorizontal: 12,
   backgroundColor: Colors.accent,
   borderStyle:'solid',
   borderColor: Colors.borderDefault,
   borderWidth: 1,
   borderRadius:4,
   marginVertical: 8,
   width: '100%'
 },
 button: {
  marginVertical: 16,
  paddingHorizontal: 16,
  alignItems: 'center',
  borderRadius: 4,
  borderStyle: 'solid',
  borderColor: Colors.accent,
  borderWidth: 1,
},
buttonTitle: {
   fontWeight: 'bold',
   textTransform: 'uppercase',
   paddingVertical: 16,
   color: Colors.textPrimaryContrast
}

});
