import React, {Component} from 'react';
import {Text, View, CheckBox} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import RentingButton from '../../../../Components/RentingButton';
export default class RentingDetail extends Component {
  render() {
    return (
      <View style={Styles.ProfileDetails_container}>
        <View style={{marginBottom: 20}}></View>

        <RentingButton value={false} h={1} text="With Driver" />

        <RentingButton h={1} text="Without Driver" />

        <RentingButton value={true} text="Available From" />

        <RentingButton value={true} text="Available To" />

        <View style={{marginBottom: 20}}></View>
<View
style=
{{justifyContent:'center',
alignItems:'center'
}}
>
<Button title="Save" />
</View>
      
      </View>
    );
  }
}
