import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MaterialIcons = props => {
  const {name, size, color} = props;

  return <Icon name={name} size={size} color={color} />;
};

export default MaterialIcons;
