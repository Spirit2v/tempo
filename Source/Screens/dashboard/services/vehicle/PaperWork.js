import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';

import PaperWorkButton from '../../../../Components/PaperWorkButton';
export default function PaperWork({navigation}) {
  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginBottom: 20}}></View>

      <PaperWorkButton value={false} text="Pollution Check" />

      <PaperWorkButton text="RC" />

      <PaperWorkButton  text="Permit" />

      <PaperWorkButton text="Road Taxes Document" />
      <View style={{marginBottom: 20}}></View>
<View
style={{justifyContent:'center',alignItems:'center',marginTop:12}}

>
<Button title="Continue" />
</View>
   
    </View>
  );
}
