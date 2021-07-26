import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../../Assets/Styles/Styles';
import Header_Component from '../../../Components/Header_Component';
import Service_card from '../../../Components/Service_card';
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
import Dumper from '../Assets/Icons/dumper.png';
import Transmitmixer from '../Assets/Icons/transitmixerwhite.png';
import Crane from '../Assets/Icons/Crane.png';
import Crawlercrane from '../Assets/Icons/crawlercrane.png';
import Tyremountedcrane from '../Assets/Icons/TyreMountedCrane.png';
import Tipper from '../Assets/Icons/tipper.png';
import Compactor from '../Assets/Icons/Compactor.png';
import Excavator from '../Assets/Icons/excavator.png';
import Motorgrader from '../Assets/Icons/MotorGrader.png';
import Forklifter from '../Assets/Icons/ForkLifter.png';
import Truck from '../Assets/Icons/Truck.png';
import Tractor from '../Assets/Icons/Tractor.png';
import Tanker from '../Assets/Icons/Tanker.png';
import Roadroller from '../Assets/Icons/road-roller.png';
import Backhoeloader from '../Assets/Icons/BackhoeLoader.png';

import ConstructionChemicals from './ConstructionChemicals';
import { ScrollView } from 'react-native-gesture-handler';

const ConstructionVehicles = ({navigation}) => {
  return (
    <ScrollView> 
       <View style={Styles.Service_container}>
    <Header_Component Heading="ConstructionVehicle" />


<TouchableOpacity
onPress={()=>navigation.navigate('Dumper')}
>
<Service_card Icon={Dumper} Name="Dumper" />
     
</TouchableOpacity>


<TouchableOpacity
onPress={()=>navigation.navigate('TransitMixture')}
>
<Service_card
          Icon={Transmitmixer}
          Name="Transmit Mixer"
        />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('Crane')}
>
<Service_card Icon={Crane} Name="Crane" />
</TouchableOpacity>

<TouchableOpacity

onPress={()=>navigation.navigate('CrawlerCrane')}
>
<Service_card Icon={Crawlercrane} Name="Crawler Crane" />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('TyreMountedCrane')}
>
<Service_card
          Icon={Tyremountedcrane}
          Name="Tyre Mounted Crane"
        />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('Tipper')}
>
<Service_card Icon={Tipper} Name="Tipper" />
</TouchableOpacity>
<TouchableOpacity
onPress={()=>navigation.navigate('Compactor')}
>
<Service_card Icon={Compactor} Name="Compactor" />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('Excavator')}
>
<Service_card Icon={Excavator} Name="Excavator" />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('MotorGrader')}
>
<Service_card Icon={Motorgrader} Name="Motor Grader" />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('Forklift')}
>
<Service_card Icon={Forklifter} Name="Fork Lifter" />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('Truck')}
>
<Service_card Icon={Truck} Name="Truck" />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('Tractor')}
>
<Service_card Icon={Tractor} Name="Tractor" />
</TouchableOpacity>


 
      <TouchableOpacity
      onPress={()=>navigation.navigate('Tanker')}
      >
        
       <Service_card Icon={Tanker} Name="Tanker" />
       </TouchableOpacity>
      <TouchableOpacity
      
      > 
         <Service_card Icon={Roadroller} Name="Road-Roller" />
         </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>navigation.navigate('BackHoeLoader')}
      > 
        <Service_card
          Icon={Backhoeloader}
          Name="Back Hoe Holder"
        />
        
        </TouchableOpacity>
       
       
        
      
       
       
        
    
      
       
  </View></ScrollView>
  
  );
};

export default ConstructionVehicles;
