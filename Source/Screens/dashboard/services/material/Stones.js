import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import RentingButton from '../../../../Components/RentingButton';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import ServiceCardSand from '../../../../Components/ServiceCardSand';

import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
export default function BricksAndBlock({navigation}) {
const Types=['Select All','Black','White']
const Sizes=[
  'Select All','4 mm','6 mm','12 mm','20 mm','22 mm','25 mm','42 mm'

]
  return (
    <ScrollView>
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>

     <DropdownCheckbox 
   Types={Types}
   placeholder="Select Types"
   />

<DropdownCheckbox 
   Types={Sizes}
   placeholder="Select Sizes"
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
