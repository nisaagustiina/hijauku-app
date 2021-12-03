import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import {Gap, Header, Button, Input} from '../../components';
import {colors, fonts} from '../../utils';
import {IconCamera, IconPaper} from '../../assets';

const DaurUlang = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Header title="Daur Ulang" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      <View style={styles.container}>
        <Text style={styles.title}>Tukar Karya Dengan Point</Text>
        <Gap height={20} />
        <Input placeholder="Nama Karya" />
        <Gap height={20} />
        <Input placeholder="Deskripsi" />

        <View style={styles.submitBox}>
          <TouchableOpacity style={styles.btnSubmit}>
            <View style={styles.submitMid}>
              <IconCamera />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerButton}>
          <Gap height={210} />
          <Button title="Kirim" type="secondary" />
        </View>
      </View>
    </View>
  );
};

export default DaurUlang;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
  },
  submitBox: {
    borderWidth: 1,
    borderColor: colors.primary,
    height: 110,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderStyle: 'dashed',
    marginBottom: 10,
  },
  btnSubmit: {
    width: 74,
    height: 74,
    borderRadius: 74 / 2,
    backgroundColor: '#DAF5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitMid: {
    width: 62,
    height: 62,
    borderRadius: 62 / 2,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },


});
