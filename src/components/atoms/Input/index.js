import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  capitalize,
  placeholder
}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.border);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text> }
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input(border)}
        editable={!disable}
        selectTextOnFocus={!disable}
        autoCapitalize={capitalize}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 6,
    fontFamily: fonts.primary.normal,
  },
});
