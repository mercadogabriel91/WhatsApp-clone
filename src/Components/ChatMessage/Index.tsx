import React from 'react';
import moment from 'moment';
import {Text, View, StyleSheet} from 'react-native';
import {Message} from '../../Constants/Types/Types';
//Contants
import Colors from '../../Constants/Colors';

export type ChatMessageProp = {
  message: Message;
};

const ChatMessage = (props: ChatMessageProp) => {
  const {message} = props;

  const isMyMessage = () => {
    return message.user.id === 'u1';
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50,
          },
        ]}>
        {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    marginRight: '15%',
    borderRadius: 5,
    padding: 8,
  },
  myMessage: {
    backgroundColor: '#DCF8C5',
    marginRight: '15%',
    borderRadius: 5,
    padding: 8,
  },
  name: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {},
  time: {
    alignSelf: 'flex-end',
    color: 'grey',
  },
});
