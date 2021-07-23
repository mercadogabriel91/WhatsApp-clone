import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const FontAwesome = props => {
  const {name, size, color} = props;

  return <Icon name={name} size={size} color={color} />;
};

export default FontAwesome;
