import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
//Icons
import Ionicons from '../../Icons/Ionicons';

const PenButton = () => {
  const PenIcon = <Ionicons name="md-pencil-sharp" size={20} color="#495057" />;

  const onPress = () => {
    console.warn('Pen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.opacity}>
        {PenIcon}
      </TouchableOpacity>
    </View>
  );
};

export default PenButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: '81%',
    right: '4%',
    borderRadius: 25,
  },
  opacity: {
    width: 40,
    height: 40,
    backgroundColor: '#dee2e6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});
