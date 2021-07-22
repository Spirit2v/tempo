import React from 'react'
import { View, Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
export default function RentingButton({text,value}) {

    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    return (
        <View style={{height:50,
            borderRadius:5,width:'100%',
         marginTop:-10,

            alignItems:'flex-start',
            justifyContent:'flex-start',
           
            padding:10,
            borderColor:'grey',
        flexDirection:'row'

        }}>
      <View
      style={{
        shadowColor: 'grey',

        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8.65,
        marginBottom: 17,
        elevation: 8,  
        justifyContent:'center',

        
        height:20,
        borderRadius:3,
        width:20,borderColor:'grey',borderWidth:1}}
      >


    
<CheckBox
    disabled={value}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</View>

            <Text
            style={{color:'#B4B9BF',marginLeft:26,marginTop:6}}
            >{text}</Text>
              
        </View>
    )
}
