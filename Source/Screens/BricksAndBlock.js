import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import RentingButton from '../Components/RentingButton';
import Styles from '../Assets/Styles/Styles';
import Button from '../Components/Button';
import Buttonq from '../Components/Buttonq';
import Buttonq1 from '../Components/Buttonq1';
export default function BricksAndBlock({navigation}) {
  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <RentingButton text="Clay Bricks" 
    />
        <RentingButton
        
        text="Cement Bricks" />

        <RentingButton
       
        text="Fly Ash Bricks" />

        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text style={{color: '#ffb600', fontSize: 26}}>+</Text>
          <Text
            style={{
              color: '#ffb600',
              fontSize: 15,
              marginTop: 7,
              marginLeft: 6,
            }}>
            Add more items
          </Text>
        </TouchableOpacity>

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
