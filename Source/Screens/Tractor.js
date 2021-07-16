import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../Assets/Styles/Styles';
import Profile_card from '../Components/Profile_card';
export default function Tractor() {
    return (
        <View style={Styles.ProfileDetails_container1}>
              <View
              style={{marginBottom:20}}
              ></View>
              
        <View style={{marginBottom:40}}>
        <Profile_card
title="Basic Information"
/>
<Profile_card
title="Paper Work"
/>
<Profile_card
title="Renting Detail"
/>
        </View>
        </View>
    )
}
