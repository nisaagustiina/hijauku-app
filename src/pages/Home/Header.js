import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Status,  Gap} from '../../components'
import {IlNullPhoto} from '../../assets'
import {colors, fonts} from '../../utils'

const Header = () => {
  return (
    <View>
      <View style={styles.root}>
        <View style={styles.container}>
            <Text style={styles.name}>Rekayasa Perangkat Lunak</Text>          
        </View>
        <View style={styles.borderProfile}>
          <Image source={IlNullPhoto} style={styles.avatar} />
        </View>            
      </View>
      <Gap height={20} />
      <Status 
          name="660"           
          desc="Point Kamu"     
          icon="icon"          
          name2="Master"           
          desc2="Rank kamu"     
          rank="icon"                    
        />  
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    marginLeft: 16,
    marginTop: 25
  },
  borderProfile: {
    width: 85,
    height: 85,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 10,
    marginLeft: 20
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  container: {
    width: 150
  }
});

