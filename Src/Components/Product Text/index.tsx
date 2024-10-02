import {Text, View} from 'react-native';
import {styles} from './Styles';

const ProductText = ({
  Texts,
  SubText,
  SmallText,
  fontSize=28,
  fontWeight='200',
  

}: {
  Texts: string;
  SubText: string;
  SmallText: string;
  fontSize?:number, 
  fontWeight?:string,
  
}) => {
  return (
    <View style={styles.Conatiner}>
      <View>
        <Text style={styles.Txt}>{Texts}</Text>
        <Text style={styles.subs}>{SmallText}</Text>
      </View>
      <View>
        <Text style={styles.subs}>{SubText}</Text>
      </View>
    </View>
  );
};

export default ProductText;
