import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {fonts, colors} from '../../../utils';
import {
  IconNext,
  IconEditProfile,  
  IconSignOut,
  IconMore,
  IconInfo,
  IconSetting,
  IconLeaderboard,
  IconEditProfile2,
} from '../../../assets';

const List = ({
  profile,
  name,    
  type,
  onPress,
  icon,
}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile2 />;
    }
    if (icon === 'rate') {
      return <IconMore />;
    }    
    if (icon === 'signout') {
      return <IconSignOut />;
    }
    if (icon === 'info') {
      return <IconInfo />;
    }
    if (icon === 'leaderboard') {
      return <IconLeaderboard />;
    }
    if (icon === 'share') {
      return <IconMore />;
    }
    if (icon === 'setting') {
      return <IconSetting />;
    }
    return <IconEditProfile />;
  };  
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.wrapper}>        
        <Text style={styles.name}>{name}</Text>        
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

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
  chat: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },  
});
