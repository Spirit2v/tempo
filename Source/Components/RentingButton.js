import React from 'react'
import { View, Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
export default function RentingButton({text,value}) {

    const [toggleCheckBox, setToggleCheckBox] = React.useState(true)
    return (
        <View style={{height:68,
            borderRadius:5,width:'90%',
            shadowColor: "white",
          

      
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            marginBottom:17,
            elevation: 8,
            alignItems:'flex-start',
            justifyContent:'space-between',
            backgroundColor:'black',
            padding:20,
            borderColor:'grey',
        flexDirection:'row'

        }}>
            <Text
            style={{color:'white'}}
            >{text}</Text>
              <CheckBox
    disabled={value}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
        </View>
    )
}
