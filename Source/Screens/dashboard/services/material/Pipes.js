import React from 'react';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
import {View, Text,TouchableOpacity, ScrollView} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';

import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
export default function Pipes({navigation}) {
  const Types=['Selct All','Cast Iron Pipe',
    'Galvanized Iron Pipe',
    'Cast Iron Pipes','Stroneware Pipes',
    'PVC Pipes','PVC Suction pipes','UPVC Pipes',
    'HDPE Pipes',
    'Asbestos Cement Pipe',
   ' Concrete Pipe']
  return (
    <ScrollView>
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
  
     <DropdownCheckbox
   Types={Types}
   placeholder="Select Types"
   />

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
        <Buttonq title="save" hi={42} wi={53} />
            <View style={{paddingHorizontal: 10}}></View>
            <Buttonq1 title="Add more service" hi={42} wi={133} />
      </View>
      </View>
    </View>
    </ScrollView>
  );
}
