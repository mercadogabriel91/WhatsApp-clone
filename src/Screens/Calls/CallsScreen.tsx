import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
//Components
import CallItem from '../../Components/CallsComponents/CallItem/Index';
//Dummy Data
import Calls from '../../Data/Calls';

const CallsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {Calls.map(item => {
        return <CallItem key={item.id} />;
      })}
    </ScrollView>
  );
};

export default CallsScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
});
