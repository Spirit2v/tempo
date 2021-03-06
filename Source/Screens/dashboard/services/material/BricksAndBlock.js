import React,{useState} from 'react';
import {View, Text, Touchable,StyleSheet, TouchableOpacity} from 'react-native';
import RentingButton from '../../../../Components/RentingButton';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import { ScrollView } from 'react-native-gesture-handler';

export default function BricksAndBlock({navigation}) {

  const [Switch, setSwitch] = useState(true)
  return (
    <ScrollView>
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
        <TouchableOpacity>
        <Buttonq title="save" hi={42} wi={53} />
        </TouchableOpacity>
            <View style={{paddingHorizontal: 10}}></View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Services')}
            >
            <Buttonq1 title="Add more service" hi={42} wi={133} />
            </TouchableOpacity>
      
      </View>
      </View>
      
   
 
      </View>
      </ScrollView>
    )
}
const styles=StyleSheet.create({


  box:{
  
    marginVertical:23,
     height:232,
     width:'85%',
     backgroundColor:'black',
     position:'absolute',
     top:5,justifyContent:'center'
  },
  })