import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//component
import {Gap, Header, Button, Input} from '../../components'

//utils & assets
import {colors, fonts} from '../../utils'

const SetorSampah = ({navigation}) => {

  const options = [
    {
      key: 'jenis 1',
      text: 'Botol',
    },
    {
      key: 'jenis 2',
      text: 'Tutup Botol',
    },
    {
      key: 'jenis 3',
      text: 'Kertas',
    },
    {
      key: 'jenis 4',
      text: 'Kaca',
    },
    {
      key: 'jenis 5',
      text: 'Kresek',
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const onSelect = (item) => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };

  // const onSubmit = () => {
  //   console.log(selectedOption);    
  // }

  return (
    <View style={styles.root}>
      <Header title="Setor Sampah" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      <View style={styles.container}>                
        <Text style={styles.title}>Jenis Sampah</Text>
        <Gap height={6} />
        <View style={styles.littleContainer}>
          <Text style={styles.subTitle}>Pilih Jenis Sampah Yang Akan di Setor</Text>         
        </View>
        <Gap height={10} />
          <Button 
            type="radio"             
            selectedOption={selectedOption} 
            onSelect={onSelect} 
            options={options} />                                    
        {/* <Button title="Submit" onPress={onSubmit} /> */}
        <Gap height={10} />
        <Text style={styles.title}>Berat Sampah</Text>
        <Gap height={10} />
        <Input placeholder="+ Atur perkiraan berat" />
        <View style={styles.containerButton}>
        <Gap height={210} />
          <Button title="Kirim" type="secondary"/>
        </View>
      </View>    
    </View>
  );
};

export default SetorSampah;

const styles = StyleSheet.create({
  root: {
    flex: 1,    
  },
  container: {
    marginHorizontal: 16
  },
  title: {
      fontSize:18,
      fontFamily: fonts.primary[600]
  },
  littleContainer: {
    alignItems: 'center'
  },
  subTitle: {
    fontSize:12,
    fontFamily: fonts.primary[400],    
  },    
  // containerButton: {
  //   alignSelf: ''
  // }
});
