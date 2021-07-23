import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
//Components
import ChatListItem from '../../Components/ChatListItem/Index';
import NewMessageButton from '../../Components/NewMessageButton/Index';

//Dummy Data
import chatRooms from '../../Data/ChatRooms';

const ChatScreen = () => {
  return (
    <View style={styles.contaiiner}>
      <FlatList
        data={chatRooms}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
      <NewMessageButton />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  contaiiner: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  flatList: {
    width: '100%',
  },
});
