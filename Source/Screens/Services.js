import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import Header_Component from '../Components/Header_Component';
import Service_card from '../Components/Service_card';
import C_materials from '../Assets/Icons/Construction_Materials.png';
import C_agents from '../Assets/Icons/Agents.png';
import C_vehicles from '../Assets/Icons/Construction_Vehicles.png';
import C_chemicals from '../Assets/Icons/construction_chemical.png';
import ConstructionMaterials from './ConstructionMaterials';
import ConstructionVehicles from './ConstructionVehicles';
import ConstructionChemicals from './ConstructionChemicals';
import Agents from './Agents';

const Services = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.Service_container}>
      <Header_Component Heading="Services" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ConstructionMaterials);
        }}>
        <Service_card Icon={C_materials} Name="Construction Materials" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Agents);
        }}>
        <Service_card Icon={C_agents} Name="Agents" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ConstructionVehicles);
        }}>
        <Service_card Icon={C_vehicles} Name="Construction Vehicles" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ConstructionChemicals);
        }}>
        <Service_card Icon={C_chemicals} Name="Construction Chemicals" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Services;
