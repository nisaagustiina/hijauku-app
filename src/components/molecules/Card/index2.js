import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {IlNullPhoto, IconRate} from '../../../assets'
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Index2 = ({title, date, pic, desc, point}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image
            source={pic ? {uri: pic} : IlNullPhoto}
            style={styles.cardAvatar}
          />
        <View>        
        <Text style={styles.cardTitle}>{title}</Text>        
        <View style={styles.containerDesc}>
            <Text style={styles.desc}>{desc}</Text>                
        </View>              
      </View>
      </View>
      {/* <Gap height={8} /> */}
      <View style={styles.cardFooter}>         
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.desc}>Terverifikasi</Text>
          <Gap width={5} />
          <IconRate />
        </View>
        <Text style={styles.desc}>Point: {point}</Text>        
      </View>
      <View>
        <Text style={styles.date}>{date}</Text>        
        <Text style={styles.date}>~~~~~~~~~~~~~~~~~</Text>        
      </View>
      </View>
    </View>
  );
};

export default Index2;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('screen').width - 30,
    minHeight: 120,
    borderRadius: 8,
    backgroundColor: colors.white,
    elevation: 5,
    padding: 16,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingBottom: 16,
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  cardTitle: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    width: 220,
    textTransform: 'capitalize',
  },      
  cardAvatar: {
    width: 60,
    height: 60,
    borderRadius: 10
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  containerDesc:{
      width: 220
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingVertical: 12,
    marginBottom:-16
  },  
  date: {    
    fontSize: 10,    
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,    
  },  
});
