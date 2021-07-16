import React from 'react'
import { View, Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
export default function RentingButton({text,value}) {

    const [toggleCheckBox, setToggleCheckBox] = React.useState(true)
    return (
        <View style={{height:23,
            borderRadius:5,width:'90%',
         

            alignItems:'flex-start',
            justifyContent:'space-between',
           
            padding:20,
            borderColor:'grey',
        flexDirection:'row'

        }}>

<CheckBox
    disabled={value}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
            <Text
            style={{color:'white'}}
            >{text}</Text>
              
        </View>
    )
}
