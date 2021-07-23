import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../Constants/Colors';
import Routes from '../../Routes/Routes';
//Icons
import MaterialCommunityIcons from '../Icons/MaterialCommunityIcons';

const NewMessageButton = () => {
  const navigation = useNavigation();
  //Icons
  const MessageIcon = (
    <MaterialCommunityIcons name="message-reply-text" size={28} color="white" />
  );

  const onPress = () => {
    navigation.navigate(Routes.Contacts);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {MessageIcon}
    </TouchableOpacity>
  );
};

export default NewMessageButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '2%',
    right: '4%',
  },
});
