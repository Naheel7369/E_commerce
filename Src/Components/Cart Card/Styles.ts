import { StyleSheet } from 'react-native';
import { Fonts } from '../../Assets/Fonts';

const styles = StyleSheet.create({
  Container: {
    width: '90%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 1,
    marginLeft: '7%',
    margin: 8,
  },
  TextContainer: {
    flex: 1,
    marginRight: 10,
  },
  Titles: {
    fontSize: 20,
    color: 'black',
    fontFamily: Fonts.MetrophobicRegular,
    fontWeight: 'bold',
  },
  Price: {
    fontSize: 16,
    color: 'black',
    position: 'absolute', 
    right: 0,
    top: 40,
  },
  Images: {
    width: 140,
    height: 100,
    borderRadius: 5,
  },
  IconContainer: {
    flexDirection: 'row',
    marginTop: 5, 
  },
  Icon: {
    marginLeft: 10,
    alignSelf: 'center',
  },
  Quantity: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
});

export default styles;
