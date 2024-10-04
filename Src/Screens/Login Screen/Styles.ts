import { StyleSheet } from 'react-native';
import { Fonts } from '../../Assets/Fonts';

export const styles = StyleSheet.create({
  Txts: {
    fontSize: 37,
    fontFamily: Fonts.MetrophobicRegular,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
    marginTop: '1%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    marginTop: '20%',
    padding: 9,
    backgroundColor: 'white',
  },
});
