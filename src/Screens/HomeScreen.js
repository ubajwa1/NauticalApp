import { StyleSheet, Text, View , Image,Pressable } from 'react-native'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapHeader from '../Components/Header/MapHeader';
import { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback,  useMemo, sheetRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";



//callbacks


const HomeScreen = () => {

  const snapPoints = useMemo(() => ["1%","53%", "500%"], []);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MapHeader onPress={()=> navigation.openDrawer()}/>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 38.829868,
        longitude:   -75.215091,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      
<Marker  onPress={handleSheetChange} coordinate={{latitude:  38.8341869, longitude:-75.218091 }}>

 <Image style ={{height:35,width:35, borderRadius:30,resizeMode:"contain",aspectRatio:1,}}
  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLP5UA72mA1X4UbKoWdNy5crF2H2DV4h6YDA&usqp=CAU'}}
 />
 
</Marker>

<Marker  coordinate={{latitude:  38.8319269, longitude:-75.215011 }}>

 <Image style ={{height:30,width:30, borderRadius:30,resizeMode:"contain",aspectRatio:1,}}
  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLP5UA72mA1X4UbKoWdNy5crF2H2DV4h6YDA&usqp=CAU'}}
 />
</Marker>

<Marker  coordinate={{latitude:  38.8288148, longitude:-75.212111 }}>

 <Image style ={{height:30,width:30, borderRadius:30,resizeMode:"contain",aspectRatio:1,}}
  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLP5UA72mA1X4UbKoWdNy5crF2H2DV4h6YDA&usqp=CAU'}}
 />
</Marker>



<Marker  coordinate={{latitude:  38.8266219, longitude:-75.210111 }}>

 <Image style ={{height:30,width:30, borderRadius:30,resizeMode:"contain",aspectRatio:1,}}
  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLP5UA72mA1X4UbKoWdNy5crF2H2DV4h6YDA&usqp=CAU'}}
 />
</Marker>


      
    </MapView>

    <View style={styles.container}>

<BottomSheet
  style={{
   
 }}
  ref={sheetRef}
  index={1}
  snapPoints={snapPoints}
  onChange={handleSheetChange}
>
  <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
    {/* {data.map(renderItem)} */}

    <View style={{ marginHorizontal: 17, height: 900,
 }}>

      <View >
        <Text style={{ color: "black", fontWeight: '900', fontSize: 22, }}>
          Name Of The Selection Port
        </Text>
      </View>


      <View style={{ marginTop: 13 }}>
        <Text style={{ color: "black", fontWeight: "400", fontSize: 14, lineHeight: 21 }}>
          Waterfront area with sand beaches, family fun at
          Wildy Wadi Waterpark & beach bars searving seafood.
        </Text>
      </View>


      <View style={styles.imgView}>
        <Image style={styles.fimage1}
          source={require('../Screens/assests/1.png')}
        />

        <Image style={styles.fimage2}
          source={require('../Screens/assests/2.png')}
        />

        <Image style={styles.fimage3}
          source={require('../Screens/assests/3.png')}
        />

        <Image style={styles.fimage4}
          source={require('../Screens/assests/4.png')}
        />
      </View>

      <View
        style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
          opacity: 0.2
        }}
      />

      <Text style={{ color: "black", fontWeight: '900', fontSize: 22, marginVertical: 10 }}>
        Facilities
      </Text>

      <View style={styles.borderView}>


        <View style={styles.showerview
        }>
          <Image
            style={{ height: '45%', width: '25%' }}
            source={require('../Screens/assests/shower.png')}
          />
          <Text style={{ color: '#fff', fontSize: 16, marginHorizontal: 5 }}>
            Shower
          </Text>
        </View>



        <View style={styles.showerview
        }>
          <Image
            style={{ height: '45%', width: '25%' }}
            source={require('../Screens/assests/toilet.png')}
          />
          <Text style={{ color: '#fff', fontSize: 16, marginHorizontal: 9 }}>
            Toilets
          </Text>
        </View>
        <View style={styles.showerview
        }>
          <Image
            style={{ height: '45%', width: '25%' }}
            source={require('../Screens/assests/fuel.png')}
          />
          <Text style={{ color: '#fff', fontSize: 15, marginHorizontal: 5 }}>
            Refuleing
          </Text>
        </View>





      </View>


    </View>


  </BottomSheetScrollView>
</BottomSheet>
</View>

    <View>
      
    </View>
  </View>
  )
  
}



const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
       
      
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },


    //  style


    container: {
      flex: 1,
      paddingTop: 220,
      
      
  
    },
  
  
    contentContainer: {
      backgroundColor: 'transparent',
  
    },
  
  
    itemContainer: {
      padding: 6,
      margin: 6,
  
    },
  
  
    fimage1: {
      height: 47,
      width: 47,
      marginVertical: 6
    },
  
  
  
    fimage2: {
      height: 47,
      width: 47,
      marginVertical: 6,
      marginHorizontal: 14
    },
  
  
  
    fimage3: {
      height: 47,
      width: 47,
      marginVertical: 6,
      marginHorizontal: 2
    },
  
  
  
    fimage4: {
      height: 47,
      width: 47,
      marginVertical: 6,
      marginHorizontal: 12
    },
  
  
    imgView: {
      marginVertical: 10,
      flexDirection: 'row',
      // justifyContent:'space-between',
  
    },
  
  
    borderView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  
      height: '5%',
      width: '33%',
  
    },
  
    showerview: {
      //  justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 29,
      backgroundColor: '#376FCC',
      marginRight: 10,
      width: 115,
      paddingLeft: 9
  
  
    }
})
export default HomeScreen