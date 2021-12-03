import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {Gap, Input, Link, Button} from '../../components';

const Login = ({navigation}) => {
  return (
    <View style={styles.root}>
      <View>
        <Gap height={40} />        
        <Text style={styles.text}>Masuk dan mulai pengalaman baru</Text>
        <Input label="Email Address" capitalize="none" placeholder="Masukan Email"/>        
        <Input label="Password" capitalize="none" placeholder="Masukan Password" secureTextEntry />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={() => navigation.navigate("MainApp")} />
        <Gap height={30} />
        <Link title="Create New Account" size={16} align="center" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: colors.white,
  },
  text: {    
    fontSize: 25,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 70,
    marginBottom: 10,
    marginLeft: 20,        
    maxWidth: 240,
  },  
});
