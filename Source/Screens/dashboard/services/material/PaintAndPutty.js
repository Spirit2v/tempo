import React from 'react';
import {View,TouchableOpacity, Text, ScrollView} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';

import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
export default function PaintAndPutty({navigation}) {
  const Surface=['Interior','Exterior','Floor Paint', 'Tile Paint']
  const Type=['Enamle Paint','Oil Paint','Emulsion Paint','Cement Paint','Bituminous Paint','Plastic Paint','Anti-Corrosive Paint ','Cellulose Paint']
  const Brands=['Berger Paints','Nippon Paints','Kansai Paints','Asian Paints',' Indigo Paints','Dulux Paints', 'Shalimar Paints','jenson and Nicholsan']
  const Types=['Whoye Cement Wall Putty','Acrylic Wall Putty','POP']
  const Brand=['Birla wallcare Putty','Jk Protomac Acryllic Wall Putty','Jk Cement ','Iris Paint Wall Putty','Asian Paint','Bird White','Dulux Paint','VV Paint']
  return (
    <ScrollView>
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
      <DropdownCheckbox 
   Types={Brand}
   placeholder="Select brands"
   />
     <DropdownCheckbox 
   Types={Types}
   placeholder="Select Types"
   />


        <View  style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
       <TouchableOpacity>
        <Buttonq title="save" hi={42} wi={53} />
        </TouchableOpacity>
            <View style={{paddingHorizontal: 10}}></View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Services')}
            >
            <Buttonq1 title="Add more service" hi={42} wi={133} />
            </TouchableOpacity>
      
      </View>
      </View>
    </View>
    </ScrollView>
  );
}
