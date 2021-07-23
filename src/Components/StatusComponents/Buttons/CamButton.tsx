import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
//Icons
import FontAwesome5 from '../../Icons/FontAwesome5';
//Colors
import Colors from '../../../Constants/Colors';

const CamButton = () => {
  const CameraIcon = <FontAwesome5 name="camera" size={20} color="white" />;

  const onPress = () => {
    console.warn('Open Cam');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>{CameraIcon}</TouchableOpacity>
    </View>
  );
};

export default CamButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: Colors.light.whatsAppLightGreen,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    position: 'absolute',
    top: '89%',
    right: '5%',
  },
});
