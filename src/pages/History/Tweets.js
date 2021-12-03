import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Card, Gap} from '../../components'

//utils
import {colors, fonts} from '../../utils';

const Tweets = ({notification, verified, title, pic, desc, date}) => {  
  if (!notification) {
    return (
      <View style={styles.root}>
        <Gap height={20} />
        <Card          
         pic={pic}
         title="Laporan Titik Sampah"
         desc="Ada sampah menumpuk di tong sampah bengkel elektro"         
         date="6 Menit yang lalu"     
         verified= {false}
       />       
     </View>
   );
  };
  return (
    <View style={styles.rootChild}>
      <Gap height={20} />
      <Text style={styles.text}>Tidak ada :(</Text>
       <Text style={styles.textChild}>Anda belum melakukan apapun</Text> 
     {/* <Text>I am the Tweets screen 🐐🐐🐐🐐🐐🐐</Text>    */}
   </View>
 );
};

export default Tweets;

const styles = StyleSheet.create({  
  root:{
    // justifyContent: "center",
    alignItems: "center",
    height: 500    
  },
  rootChild:{
    justifyContent: "center",
    alignItems: "center",
    height: 400,    
  },
  text:{
    fontSize: 16,   
    color: colors.text.primary,
    fontFamily: fonts.primary[600],    
  },
  textChild:{
    fontSize: 12,   
    color: colors.text.secondary,
    fontFamily: fonts.primary[600],    
  }
});
