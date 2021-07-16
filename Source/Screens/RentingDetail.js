import React, { Component } from 'react'
import { Text, View,CheckBox } from 'react-native'
import Styles from '../Assets/Styles/Styles';
import Button from '../Components/Button';
import RentingButton from '../Components/RentingButton';
export default class RentingDetail extends Component {
    render() {
        return (
            <View style={Styles.ProfileDetails_container}>
              
              
              <View style={{marginBottom:20}}>

              </View>
              
                <RentingButton
                value={false}
                text="With Driver"
                />

                 <RentingButton
              
                text="With Driver"
                />

               <RentingButton
                 value={true}
                text="With Driver"
                />

                
                <RentingButton
                value={true}
                text="With Driver"
                />

                
     

<View style={{marginBottom:20}}></View>



<Button 
title='Save'
/>


            </View>
        )
    }
}
