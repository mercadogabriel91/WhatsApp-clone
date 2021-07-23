import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
//Const
import {ChatRoom} from '../../Constants/Types/Types';
import Routes from '../../Routes/Routes';
import moment from 'moment';
import {useNavigation} from '@react-navigation/core';

export type ChatListItemProp = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProp) => {
  const {chatRoom} = props;
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate(Routes.ChatRoomScreen, {
      id: chatRoom.id,
      name: user.name,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{uri: user?.imageUri}} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>

        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  avatar: {
    height: 60,
    width: 60,
    marginRight: 15,
    borderRadius: 50,
  },
  midContainer: {
    justifyContent: 'space-evenly',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
  },
  time: {
    fontSize: 14,
    color: 'grey',
  },
});
