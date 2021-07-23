import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
//Icons
import MaterialCommunityIcons from '../Icons/MaterialCommunityIcons';
import FontAwesome5 from '../Icons/FontAwesome5';
import Entypo from '../Icons/Entypo';
import Fontisto from '../Icons/Fontisto';
import MaterialIcons from '../Icons/MaterialIcons';
//Const
import Colors from '../../Constants/Colors';

const InputBox = () => {
  const [message, setMessage] = React.useState('');

  const onMicrophonePress = () => {
    console.warn('Microphone');
  };

  const onSendPress = () => {
    console.warn(`Sending: ${message}`);
    //Send the message to the backend
    setMessage('');
  };

  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  };

  //Icons
  const MicrophoneIcon = (
    <MaterialCommunityIcons name="microphone" size={28} color="white" />
  );
  const SmileIcon = <FontAwesome5 name="laugh-beam" size={22} color="grey" />;
  const AttachmentIcon = <Entypo name="attachment" size={22} color="grey" />;
  const CameraIcon = <Fontisto name="camera" size={22} color="grey" />;
  const SendIcon = <MaterialIcons name="send" size={26} color="white" />;

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.smileyIconContainer}>
          {SmileIcon}
        </TouchableOpacity>
        <TextInput
          placeholder={'Type a message'}
          value={message}
          multiline
          style={styles.textInput}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity>{AttachmentIcon}</TouchableOpacity>
        <TouchableOpacity style={styles.cameraIconContainer}>
          {!message && CameraIcon}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        {!message ? MicrophoneIcon : SendIcon}
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
    height: '90%',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  smileyIconContainer: {
    marginLeft: '4%',
  },
  cameraIconContainer: {
    marginHorizontal: '4%',
  },
});
