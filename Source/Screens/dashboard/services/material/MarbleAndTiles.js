import React from 'react';
import {View,TouchableOpacity, Text, ScrollView} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';

import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
export default function MarbleAndTiles({navigation}) {
  const Brand=['Select All',' Kajaria Ceramics Ltd'
   
    ,' Somany Floor Ltd','Bajaj Tiles','Simpolo Tiles'
    ,'HSIL Ltd (Hindware)','Johnson Tiles',
  ' Grindwell Norton Ltd','Asian Granito', 
  'Cera Indai Ltd','Orient Bell',
  ' Nitco Limited','Swastic Tiles'
]
const Types=['Ceramic Tile' , 'Porcelain Tile ',
   'Glass Tile' , 'Cement Tile' ,'Marble Tile',' Mosaic Tile', 'Granite Tile',
    'Limestone Tile',
'Travertine Tile','Quarry Tile','Metal Tilee','Slate Tile']
  
const Sizes=['Select All','120 x 120 cm','60 x 120 cm','30 x 120 cm','20 x 120 cm','90 x 90 cm','60 x 90 cm','60 x 60 cm','30 x 60 cm','20 x 60 cm',]
  return (
    <ScrollView>
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
      <DropdownCheckbox 
   Types={Brand}
   placeholder="Select brands"
   />
     <DropdownCheckbox 
   Types={Types}
   placeholder="Select Types"
   />

<DropdownCheckbox 
   Types={Sizes}
   placeholder="Select Sizes"
   />
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
     <TouchableOpacity>
        <Buttonq title="save" hi={42} wi={53} />
        </TouchableOpacity>
            <View style={{paddingHorizontal: 10}}></View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Services')}
            >
            <Buttonq1 title="Add more service" hi={42} wi={133} />
            </TouchableOpacity>
      </View>
      </View>
    </View>
    </ScrollView>
  );
}
