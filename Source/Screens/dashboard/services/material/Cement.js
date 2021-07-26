import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import ServiceCardSand from '../../../../Components/ServiceCardSand';

export default function Cement() {
  const Brand=['Select All','Ultratech Cement','Ambuja Cement Ltd','ACC Ltd','Shree Cement Ltd.','Dalmia Bharat Ltd','Birla Corporation Ltd','India Cement Ltd','The Ramco Cements Ltd','Orient Cement Ltd','Heidelberg Cement Ltd']
  const Grades=['Select All','OPC 43 Cement','OPC 53 Cement','PPC Cement','White Cement']
    return (
        <View style={Styles.ProfileDetails_container}>
        <View style={{marginTop: 8, paddingHorizontal: 7}}>
   <ServiceCardSand 
   title= {Brand}
   />
   <ServiceCardSand 
   title={Grades}
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
    )
}
