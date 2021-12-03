import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';

const UserProfile = ({name, pic}) => {
  return (
    <View style={styles.root}>
      <View style={styles.borderProfile}>
        <Image source={pic} style={styles.avatar} />
      </View>
      {name && (
        <View style={styles.container}>
          <Text style={styles.name}>{name}</Text>          
        </View>
      )}
    </View>
  );
};

export default UserProfile;

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
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  container: {
    width: 200
  }
});
