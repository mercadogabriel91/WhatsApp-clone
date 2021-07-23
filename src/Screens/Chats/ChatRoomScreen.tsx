import React from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/core';
//Components
import ChatMessage from '../../Components/ChatMessage/Index';
import InputBox from '../../Components/InputBox/Index';
//Dummy data
import Chats from '../../Data/Chats';
//Assets
import BG from '../../Assets/Images/BG.png';

const ChatRoomScreen = () => {
  const route = useRoute();
  return (
    <ImageBackground source={BG} style={styles.background}>
      <FlatList
        data={Chats.messages}
        renderItem={({item}) => <ChatMessage message={item} />}
        inverted={true}
      />

      <InputBox />
    </ImageBackground>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
});
