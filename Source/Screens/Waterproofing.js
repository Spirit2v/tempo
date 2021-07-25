import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import RentingButton from '../Components/RentingButton';
import Styles from '../Assets/Styles/Styles';

import Buttonq from '../Components/Buttonq';
import Buttonq1 from '../Components/Buttonq1';
import ServiceCardSand from '../Components/ServiceCardSand';

import {
  Menu,
  Button,
  VStack,
  Select,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"
import Colors from '../Utils/Colors';
import ArrowDownward from '../Components/ArrowDownward';
import { margin } from 'styled-system';
export default function Waterproofing({navigation}) {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  let [language, setLanguage] = React.useState("")
  const [position, setPosition] = React.useState("auto")
  return (
   
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
 <ServiceCardSand 

 title={countries}
 />
 <ServiceCardSand  title={countries}
 />
 
 <View
 style={{  }}
 >


        </View>
    
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
 
  );
}
