import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const AntDesignIcons = props => {
  const {name, size, color} = props;

  return <Icon name={name} size={size} color={color} />;
};

export default AntDesignIcons;
