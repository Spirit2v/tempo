import React from 'react'
import { View, Text ,TouchableOpacity, ScrollView,} from 'react-native'
import Styles from '../../../../Assets/Styles/Styles';

import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
export default function RMCmixture({navigation}) {
 const Grades=['Select All','M 10','M 15','M 20','M 25','M 30','M 35','M 40','M 45']
  return (
    <ScrollView>
        <View style={Styles.ProfileDetails_container}>
        <View style={{marginTop: 8, paddingHorizontal: 7}}>

   <DropdownCheckbox 
   title={Grade}
   placeholder="Select Grade"
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
    )
}
