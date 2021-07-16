import React from 'react'
import { View, Text } from 'react-native'

export default function PaperWork() {
    return (
        <View style={Styles.ProfileDetails_container}>
              
              
        <View style={{marginBottom:20}}>

        </View>
        
          <PaperWorkButton
          value={false}
          text="With Driver"
          />

           <PaperWorkButton
        
          text="With Driver"
          />

         <PaperWorkButton
           value={true}
          text="With Driver"
          />

          
          <PaperWorkButton
          value={true}
          text="With Driver"
          />

          


<View style={{marginBottom:20}}></View>



<Button 
title='Continue'
/>


      </View>
    )
}
