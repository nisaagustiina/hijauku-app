import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fonts, colors} from '../../../utils';
import {  
  IconEditProfile,  
  IconRate,
} from '../../../assets';

const Status = ({
  profile,
  name,
  name2,  
  desc,
  desc2,
  onPress,
  icon,    
  rank
}) => {  
  return (
    <View style={styles.root} onPress={onPress}>      
        {icon ? <IconEditProfile /> : <Image source={profile} style={styles.avatar} />}
        <View style={styles.wrapper}>        
            <Text style={styles.name}>{name}</Text>                        
            <Text style={styles.desc}>{desc}</Text>                        
      </View>
      {rank ? <IconRate /> : <Image source={profile} style={styles.avatar} />}
        <View style={styles.wrapper}>        
            <Text style={styles.name}>{name2}</Text>                        
            <Text style={styles.desc}>{desc2}</Text>                        
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: colors.border,
    padding: 16,
    marginRight: 16,
    marginLeft: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },  
  wrapper: {
    flex: 1,
    marginLeft: 16,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },  
});
