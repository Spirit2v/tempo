import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
export default function MarbleAndTiles() {
  const Brands=['Select All',' Kajaria Ceramics Ltd'
   
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
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <ServiceCardSand title={Brands }/>
        <ServiceCardSand title= {Types}/>
        <ServiceCardSand title= {Sizes }/>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Buttonq title="save" hi={42} wi={53} />
          <View style={{paddingHorizontal: 10}}></View>
          <Buttonq1 title="Add more service" hi={42} wi={133} />
        </View>
      </View>
    </View>
  );
}
