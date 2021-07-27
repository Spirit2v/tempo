import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import Styles from '../../../Assets/Styles/Styles';
import Service_card from '../../../Components/Service_card';
import Header_Component from '../../../Components/Header_Component';
import Concretemix from '../../../Assets/Icons/concreteadmixture.png';
import Waterproof from '../../../Assets/Icons/waterproof.png';
import Surfacetreats from '../../../Assets/Icons/surfacetreatment.png';
import Groutanchor from '../../../Assets/Icons/groutandanchor.png';
import Concreterepair from '../../../Assets/Icons/concreterepair.png';
import Sealant from '../../../Assets/Icons/sealant.png';
import Flooring from '../../../Assets/Icons/flooring.png';
import Tiling from '../../../Assets/Icons/tiling.png';

const ConstructionChemicals = ({navigation}) => {
  return (
    <ScrollView>
      <View style={Styles.Service_container}>
        <Header_Component Heading="Construction Chemicals" />
        <TouchableOpacity onPress={() => navigation.navigate('Waterproofing')}>
          <Service_card Icon={Waterproof} Name="Concrete Admixture" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Waterproofing')}>
          <Service_card Icon={Waterproof} Name="Waterproofing" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SurfaceTreatments')}>
          <Service_card Icon={Surfacetreats} Name="Surface Treatments" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GroutsAndAnchor')}>
          <Service_card Icon={Groutanchor} Name="Grout and Anchor" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ConcreteRepair')}>
          <Service_card Icon={Concreterepair} Name="Concrete Repair" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sealant')}>
          <Service_card Icon={Sealant} Name="Sealant" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Flooring')}>
          <Service_card Icon={Flooring} Name="Flooring" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tiling')}>
          <Service_card Icon={Tiling} Name="Tiling" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ConstructionChemicals;
