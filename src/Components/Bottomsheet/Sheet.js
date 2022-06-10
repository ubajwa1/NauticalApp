import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useCallback, useRef, useMemo, sheetRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

export default function Sheet() {

 

  const snapPoints = useMemo(() => ["100%", "35%"], []);

  //callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  
 
  return (
    <View style={styles.container}>

      <BottomSheet
        style={{ backgroundColor: 'rgba(255,255,255, 0.1)' }}
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          

          <View style={{ marginHorizontal: 17, height: 900 }}>

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
                source={require('../../Screens/assests/1.png')}
              />

              <Image style={styles.fimage2}
                source={require('../../Screens/assests/2.png')}
              />

              <Image style={styles.fimage3}
                source={require('../../Screens/assests/3.png')}
              />

              <Image style={styles.fimage4}
                source={require('../../Screens/assests/4.png')}
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
                  source={require('../../Screens/assests/shower.png')}
                />
                <Text style={{ color: '#fff', fontSize: 16, marginHorizontal: 5 }}>
                  Shower
                </Text>
              </View>



              <View style={styles.showerview
              }>
                <Image
                  style={{ height: '45%', width: '25%' }}
                  source={require('../../Screens/assests/toilet.png')}
                />
                <Text style={{ color: '#fff', fontSize: 16, marginHorizontal: 9 }}>
                  Toilets
                </Text>
              </View>
              <View style={styles.showerview
              }>
                <Image
                  style={{ height: '45%', width: '25%' }}
                  source={require('../../Screens/assests/fuel.png')}
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
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: "grey"

  },


  contentContainer: {
    backgroundColor: "white",

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


