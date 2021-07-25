import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Notifications from '../Screens/Notifications';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../Utils/Colors';

const Header_Component = ({Heading}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
          <TouchableOpacity>
          <View
          style={{
            height: 34,
            width: 34,
            borderWidth: 1,
            borderColor: Colors.yellow,
            borderRadius: 18,
        
            borderStyle: 'dashed',
          
          }}></View>
          </TouchableOpacity>
        
      <TouchableOpacity
        onPress={() => navigation.goBack()}>
   
      </TouchableOpacity>
      <Text style={styles.Header}>{Heading}</Text>
      <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <MaterialIcons
            name="help-outline"
            color="white"
            style={{marginRight: 5}}
            size={18}
          />
          <Text style={{color: 'white', fontSize: 12, lineHeight: 20}}>
            Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationTab')}>

<View style={styles.NotificationContainer}>
<MaterialIcons
            name="notifications-none"
            size={18}
            color={Colors.yellow}
          />
</View>
         
        </TouchableOpacity>
    </View>
  );
};

export default Header_Component;

const styles = StyleSheet.create({
  Container: {
    height: 56,
    width: '100%',
    paddingHorizontal:20,
    backgroundColor: Colors.blackBlue,
    flexDirection: 'row',
    marginBottom:10,
    alignItems: 'center',
  },
  Header: {
    color: '#ffb600',
    fontSize: 24,
    fontFamily: 'Open Sans',
    fontWeight: '700',

    flex: 1,
  },

  NotificationContainer: {
    height: 23,
    width: 23,
    borderRadius: 16.5,
    backgroundColor: Colors.blackBlue,
    margin: 10,
    shadowColor: Colors.lightgrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
