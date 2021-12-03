import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Header = ({onPress, title, type}) => {
  return (
    <View style={styles.root(type)}>
      <Button
        type="icon-only"
        icon={
          type === 'dark'
            ? 'back-light'
            : type === 'transparent'
            ? 'back-light'
            : 'back-dark'
        }
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: type => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor:
      type === 'dark'
        ? colors.secondary
        : type === 'transparent'
        ? 'transparent'
        : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  text: type => ({
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.text.primary,
    textTransform: 'capitalize',
  }),
});
