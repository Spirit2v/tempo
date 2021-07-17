import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DumperCard from '../Components/DumperCard';
import Styles from '../Assets/Styles/Styles';
export default function Transmitmixer({navigation}) {
  return (
    <View>
      <View style={Styles.ProfileDetails_container}>
        <View style={{marginTop: 10, padding: 10}}>
          <TouchableOpacity
          onPress={()=>navigation.navigate('BasicInformation')}
          >
            <DumperCard title="Basic Information" />
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>navigation.navigate('PaperWork')}
          >
            <DumperCard title="Paper Work" />
          </TouchableOpacity>
          <TouchableOpacity
  onPress={()=>navigation.navigate('RentingDetail')}
          >
            <DumperCard title="Renting Detail" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
