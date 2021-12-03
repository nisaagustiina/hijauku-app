import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Card, Gap} from '../../components'

//utils
import {colors, fonts} from '../../utils';

const Replies = ({notification, verified, title, pic, desc, date, point}) => {  
  if (!notification) {
    return (
      <View style={styles.root}>
        <Gap height={20} />
        <Card          
         pic={pic}
         title="Laporan Titik Sampah"
         desc="Ada sampah menumpuk di tong sampah bengkel elektro"
         date="6 Menit yang lalu"       
         point="500"   
         verified={true}
       />       
     </View>
   );
  };
  return (
    <View style={styles.rootChild}>
      <Gap height={20} />
      <Text style={styles.text}>Tidak ada :(</Text>
       <Text style={styles.textChild}>Anda belum melakukan apapun</Text> 
     {/* <Text>I am the Replies screen 🐐🐐🐐🐐🐐🐐</Text>    */}
   </View>
 );
};

export default Replies;

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
