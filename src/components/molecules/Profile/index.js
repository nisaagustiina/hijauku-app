import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconRemovePhoto, IconAddPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';
import UserProfile from './UserProfile';

const Profile = ({name, isRemove, profile, pic, onPress}) => {
  if (profile) {
    return <UserProfile name={name} pic={pic} />;
  }
  return (
    <View style={styles.root}>
      {!isRemove && (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={pic} style={styles.avatar} />
          {!isRemove && <IconAddPhoto style={styles.removePhoto} />}
        </TouchableOpacity>
      )}
      {isRemove && (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={pic} style={styles.avatar} />
          {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>          
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    marginLeft: 16,
  },
  borderProfile: {
    width: 110,
    height: 110,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 10
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 110 / 2,
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
    textTransform: 'capitalize',
  },
});
