import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
//Const
import Colors from '../../../Constants/Colors';
//Icons
import MaterialCommunityIcons from '../../Icons/MaterialCommunityIcons';

const WhatsAppStatus = () => {
  const image = {
    uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png',
  };

  const CheckIcon = (
    <MaterialCommunityIcons
      name="check-decagram"
      size={20}
      color={Colors.light.whatsAppLightGreen}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={image} style={styles.image} />
      </View>
      <Text style={styles.text}>WhatsApp</Text>
      {CheckIcon}
    </View>
  );
};

export default WhatsAppStatus;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    overflow: 'hidden',
    borderRadius: 50,
  },
  text: {
    color: Colors.light.tint,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: '4%',
  },
  imageContainer: {
    borderColor: Colors.light.tint,
    borderWidth: 3,
    borderRadius: 50,
  },
});
