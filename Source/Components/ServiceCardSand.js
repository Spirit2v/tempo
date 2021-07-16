import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../Utils/Colors';
import TextStyles from '../Assets/Styles/TextStyles';
import Arrow_button from './Arrow_button';
import ArrowDownward from './ArrowDownward';

const ServiceCardSand = ({title}) => {
  return (
    <View style={styles.Box}>
      <Text style={TextStyles.White_text}>{title}</Text>
      <ArrowDownward />
    </View>
  );
};

export default ServiceCardSand;

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 53,
    backgroundColor: Colors.blackBlue,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: "white",
          

      
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    marginBottom:17,
    elevation: 8,
    marginBottom:20
  },
});
