import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {colors, fonts} from '../../../utils';

const Radio = ({ options, selectedOption, onSelect }) => {
  return (
    <View style={styles.root}>
      {options.map((item) => {
        return (          
          <View key={item.key} style={styles.buttonContainer}>            
            <TouchableOpacity  onPress={() => { onSelect(item) }}>                             
                <View style={selectedOption && selectedOption.key == item.key ? styles.button: styles.checkedButton}>
                  <Text style={selectedOption && selectedOption.key == item.key ? styles.text: styles.checkedText}>
                    {item.text}
                  </Text>                
                </View>                              
            </TouchableOpacity>
          </View>          
        );
      })}
    </View>
  );
}

export default Radio;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 340,        
    flexWrap: 'wrap',
    // alignItems: 'flex-start'
  }, 
  buttonContainer: {        
    marginRight: 10,
    marginBottom: 10,
  },
  button: {
    height: 45,
    width: 100,           
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.button.secondary.background,      
    paddingVertical: 10,   
    borderRadius: 5, 
  },
  text:{
    fontSize: 14,
    fontFamily: fonts.primary[600],  
    color: 'white'  
  },
  checkedButton: {
    height: 45,
    width: 100,
    // color: colors.button.primary.text,
    backgroundColor: colors.button.primary.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  checkedText: {
    fontSize: 14,
    fontFamily: fonts.primary[600],    
    color: 'black'  
  }
});
