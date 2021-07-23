import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FontAwesome5 = props => {
  const {name, size, color} = props;

  return <Icon name={name} size={size} color={color} />;
};

export default FontAwesome5;
