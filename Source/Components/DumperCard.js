import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../Utils/Colors';
import TextStyles from '../Assets/Styles/TextStyles';
import Arrow_button from './Arrow_button';

const DumperCard = ({title}) => {
  return (
    <View style={styles.Box}>
      <Text style={TextStyles.White_text}>{title}</Text>
      <Arrow_button />
    </View>
  );
};

export default DumperCard;

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 49,
    backgroundColor: Colors.blackBlue,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom:20
  },
});
