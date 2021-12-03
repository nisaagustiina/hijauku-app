import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Gap, Header, List, Profile, Status} from '../../components';
import {fonts, colors} from '../../utils';
import Manage from './Manage'

const History = ({navigation}) => {  

  return (
    <View style={styles.container}>
      <Header title="Riwayat" onPress={() => navigation.goBack()} />
      <Manage />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef",
    flexDirection: "column"
  },
  childContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  TopBar: {
    backgroundColor: "cyan",
    width: "100%"
  }
});