import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

//component
import Header from './Header'
import {Gap} from '../../components'

//utils & assets
import {IlPulpen, IlTas, IlPengki, IlDocument, IlTitikSampah, IlDaurUlang, IlSetorSampah} from '../../assets'
import {colors, fonts} from '../../utils'

const Home = ({navigation}) => {

  const menuList = {
    data: [
      {
        ilustrasi: <IlSetorSampah />,
        link: "SetorSampah"
      },
      {
        ilustrasi: <IlDaurUlang />,
        link: "DaurUlang"        
      },
      {
        ilustrasi: <IlTitikSampah/>,
        link: "UpdateProfile"
      }      
    ]
  }
  const listStore = {
    data: [
      {
        image: IlPulpen,      
        text: 'Pulpen'
      },
      {
        image: IlTas,
        text: "Tas Ransel"
      },
      {
        image: IlPengki,
        text: "Pengki"
      }, 
      {
        image: IlTas,
        text: "Tas Ransel"
      },
    ]
  }

  return (
    <ScrollView style={styles.root}>      
      <Header/>
      <Gap height={30} />
      <View style={styles.container}>        
        <Text style={styles.title}>Bantu Selamatkan Bumi</Text>        
        <Gap height={10} />
        <View style={styles.childContainer}>
        { menuList.data.map((value, index) => {
            return (
          <TouchableOpacity key={index} onPress={() => navigation.navigate(value.link)}>
            {value.ilustrasi}
          </TouchableOpacity>
          )})}        
        </View>
        <Gap height={30} />
        <View style={styles.childContainer}>
          <Text style={styles.title}>Hijauku Store</Text>        
          <TouchableOpacity>
            <Text style={styles.more}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <Gap height={10} />
        <View style={styles.childContainer, {marginRight: -16}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          { listStore.data.map((value, index) => {
            return (
            <TouchableOpacity key={index}>
              <View style={styles.containerImage}>
                <Image source={value.image} style={styles.image}/>
              </View>
              <Gap height={5} />
              <Text style={styles.subTitle}>{value.text}</Text>
            </TouchableOpacity>
          )})}        
          </ScrollView>  
        </View>     
        {/* <Gap height={30} />   */}
        {/* <View style={styles.childContainer}>
          <Text style={styles.title}>Artikel</Text>        
          <TouchableOpacity>
            <Text style={styles.more}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>          
        <Gap height={10} />
        <View>
          <TouchableOpacity>            
            <View style={styles.artikelContainer}>                    
              <View style={styles.containerImage}>
                <IlDocument />
              </View>
              <View>
                <Text style={styles.title}>selamat datang di dunia laut</Text>
                <Text style={styles.desc}>Apa laut isinya cuma air sama ikan ? Oh tentu tidak</Text>
                <Text style={styles.more}>Read More</Text>                
              </View>
            </View>
          </TouchableOpacity>          
        </View> */}
      </View>
      <Gap height={30} />
    </ScrollView>    
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    // backgroundColor: colors.white,
    flex: 1,
    // marginRight: 16,
    // marginLeft: 16,
    // alignItems: 'center',
    // flexDirection: 'row',
  },
  container: {
    marginRight: 16,
    marginLeft: 16     
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },  
  title: {
    fontSize: 15,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
  more:{
    fontSize: 11,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginRight: 2
  },
  subTitle:{
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginLeft:2
  },
  containerImage:{
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 6,
    marginRight: 8,
    borderRadius: 10
  },
  image:{
    width: 90,
    height: 90,    
  },
  artikelContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center'
  },
  desc: {
    width: 230, 
    fontSize: 12,
    fontFamily: fonts.primary[400]
  },
});
