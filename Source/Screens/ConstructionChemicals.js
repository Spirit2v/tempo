import React from 'react';
import {View, ScrollView} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import Service_card from '../Components/Service_card';
import Header_Component from '../Components/Header_Component';
import Concretemix from '../Assets/Icons/concreteadmixture.png';
import Waterproof from '../Assets/Icons/waterproof.png';
import Surfacetreats from '../Assets/Icons/surfacetreatment.png';
import Groutanchor from '../Assets/Icons/groutandanchor.png';
import Concreterepair from '../Assets/Icons/concreterepair.png';
import Sealant from '../Assets/Icons/sealant.png';
import Flooring from '../Assets/Icons/flooring.png';
import Tiling from '../Assets/Icons/tiling.png';

const ConstructionChemicals = () => {
  return (
    <ScrollView>
      <View style={Styles.Service_container}>
      <Header_Component Heading="Construction Chemicals" />
   
        <Service_card Icon={Waterproof} Name="Waterproofing" />
        <Service_card
          Icon={Surfacetreats}
          Name="Surface Treatments"
        />
        <Service_card
          Icon={Groutanchor}
          Name="Grout and Anchor"
        />
        <Service_card
          Icon={Concreterepair}
          Name="Concrete Repair"
        />
        <Service_card Icon={Sealant} Name="Sealant" />
        <Service_card Icon={Flooring} Name="Flooring" />
        <Service_card Icon={Tiling} Name="Tiling" />
 
    </View>
    </ScrollView>
  );
};

export default ConstructionChemicals;
