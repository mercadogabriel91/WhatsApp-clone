import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
//Components
import MyStatus from '../../Components/StatusComponents/MyStatus';
import WhatsAppStatus from '../../Components/StatusComponents/WhatsAppStatus/Index';
import UserStatus from '../../Components/StatusComponents/UserStatus/Index';
//Buttons
import CamButton from '../../Components/StatusComponents/Buttons/CamButton';
import PenButton from '../../Components/StatusComponents/Buttons/PenButton';
//Dummy data
import status from '../../Data/status';

const StatusScreen = () => {
  return (
    <View style={styles.container}>
      <PenButton />
      <CamButton />
      <MyStatus />
      <View style={styles.divider}>
        <Text style={styles.diverText}>Recent</Text>
      </View>
      <WhatsAppStatus />
      <FlatList
        data={status}
        renderItem={({item}) => <UserStatus data={item} />}
        keyExtractor={item => item.userName}
      />
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  divider: {
    display: 'flex',
    backgroundColor: '#E0E2E4',
    padding: '2%',
  },
  diverText: {
    color: 'grey',
  },
  safeAreaView: {
    flex: 1,
  },
});
