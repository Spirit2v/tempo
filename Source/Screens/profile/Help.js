import React, {useState} from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Colors from '../../Utils/Colors';
import TextStyles from '../../Assets/Styles/TextStyles';
import Arrow_button from '../../Components/Arrow_button';
import ArrowDownward from '../../Components/ArrowDownward';
import {
  Menu,
  VStack,
  Select,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';
import SelectDropdown from 'react-native-select-dropdown';
import CheckBox from 'react-native-check-box';
import Checkbox from '../../Components/Checkbox';
import {Touchable} from 'react-native';

const Help = () => {
  const [shouldShow, setShouldShow] = useState(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
     
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {shouldShow ? (
          <TouchableOpacity
            style={styles.boxe}
            onPress={() => setShouldShow(!shouldShow)}>
              <View
              style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch'}}
              >
              <Text
              style={{color:'white'}}
              >
                Enter name
              </Text>
              <ArrowDownward />
              </View>
   
          </TouchableOpacity>
        ) 
        :
         (
          <TouchableOpacity
            style={styles.boxe1}
            onPress={() => setShouldShow(!shouldShow)}>
            <View>
            <Text
              style={{color:'white'}}
              >
                Enter name
              </Text>
              <Text
              style={{color:'white'}}
              >
                Enter name
              </Text>
              
              

            </View>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  boxe: {
    width: '100%',
    height: 53,
    backgroundColor: Colors.blackBlue,
    borderRadius: 10,

    padding: 8,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginBottom: 17,
    elevation: 8,
    marginBottom: 20,
  },
  boxe1: {
    width: '100%',
    height: 253,
    backgroundColor: Colors.blackBlue,
    borderRadius: 10,

    padding: 8,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginBottom: 17,
    elevation: 8,
    marginBottom: 20,
  },
});

export default Help;
