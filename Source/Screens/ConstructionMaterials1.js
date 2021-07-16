import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import Service_card from '../Components/Service_card';
import Header_Component from '../Components/Header_Component';
import Cement from '../Assets/Icons/cement.png';
import Bricks from '../Assets/Icons/BB.png';
import Sand from '../Assets/Icons/sand.png';
import Stones from '../Assets/Icons/stone.png';
import Rmc from '../Assets/Icons/Rmc.png';
import Tmt from '../Assets/Icons/TNT.png';
import Marble_tiles from '../Assets/Icons/Marbleandtiles.png';
import Pipes from '../Assets/Icons/pipes.png';
import Paint_Putty from '../Assets/Icons/Paint_Putty.png';
import Shuttering from '../Assets/Icons/Shuttering.png';

const ConstructionMaterials1 = () => {
  return (
    <View style={Styles.C_materialContainer}>
      <Header_Component Heading="Construction Materials" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={Styles.C_materialScrollview}>
        <Service_card Icon={Cement} Name="Cement" />
        <Service_card Icon={Bricks} Name="Bricks and Blocks" />
        <Service_card Icon={Sand} Name="Sand" />
        <Service_card Icon={Stones} Name="Stones" />
        <Service_card Icon={Rmc} Name="RMC Mixture" />
        <Service_card Icon={Tmt} Name="TMT Iron and Steel" />
        <Service_card
          Icon={Marble_tiles}
          Name="Marble and Tiles"
        />
        <Service_card Icon={Pipes} Name="Pipes" />
        <Service_card
          Icon={Paint_Putty}
          Name="Paint and Putty"
        />
        <Service_card Icon={Shuttering} Name="Shuttering" />
      </ScrollView>
    </View>
  );
};

export default ConstructionMaterials;
