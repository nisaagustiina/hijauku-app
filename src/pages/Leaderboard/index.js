import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils'

const Leaderboard = () => {
  return (
    <View style={styles.root}>      
      <Text>Leaderboard</Text>
    </View>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({
  root: {
    // backgroundColor: colors.white,
    flex: 1,
  }
});
