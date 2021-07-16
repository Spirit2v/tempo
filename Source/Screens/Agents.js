import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Styles from '../Assets/Styles/Styles';
import Button from '../Components/Button';
import Profile_card from '../Components/Profile_card';
import RentingButton from '../Components/RentingButton';
import CheckBox from '@react-native-community/checkbox';
import Button2 from '../Components/Button2';
const Agents = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    return (
     
            <View style={Styles.ProfileDetails_container}>
              
              
              <View style={{marginBottom:20}}>

              </View>
              
              <View style={{height:50,
            borderRadius:5,width:'100%',
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
            padding:13,
            borderColor:'grey',
        flexDirection:'row'

        }}>
            <Text
            style={{color:'white'}}
            >Labour Agent</Text>
            <View
             style={{color:'white'
             ,borderColor:'grey',borderWidth:1
           ,  borderRadius:4,height:26,width:26,
           justifyContent:'center' 
          ,paddingRight:0     }}
            >
   <CheckBox
   style={{

   }}
value={toggleCheckBox}
onValueChange={(newValue) => setToggleCheckBox(newValue)}
/>
            </View>
           
        </View>

         
       <Profile_card
            title="Material Agent"
            />
     

<View style={{marginBottom:20}}></View>





            </View>
        )
    }
export default Agents;
