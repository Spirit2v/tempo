import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import Header_Component from '../Components/Header_Component';
import Service_card from '../Components/Service_card';
import C_materials from '../Assets/Icons/Construction_Materials.png';
import C_agents from '../Assets/Icons/Agents.png';
import C_vehicles from '../Assets/Icons/Construction_Vehicles.png';
import C_chemicals from '../Assets/Icons/construction_chemical.png';
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
import ConstructionVehicles from './ConstructionVehicles';
import ConstructionChemicals from './ConstructionChemicals';
import { ScrollView } from 'react-native-gesture-handler';

const ConstructionMaterials = ({navigation}) => {
  return (
    <ScrollView> 
       <View style={Styles.Service_container}>
    <Header_Component Heading="ConstructionMaterials" />
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
  </View></ScrollView>
  
  );
};

export default ConstructionMaterials;
