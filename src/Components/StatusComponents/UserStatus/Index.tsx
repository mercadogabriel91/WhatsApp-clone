import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import moment from 'moment';
//Const
import Colors from '../../../Constants/Colors';

const UserStatus = props => {
  const {data} = props;
  const {storyImg, timeStamp, userName} = data;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={{uri: storyImg}} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text}>{userName}</Text>
        <Text style={styles.timeStamp}>
          {moment(timeStamp).startOf('day').fromNow()}
        </Text>
      </View>
    </View>
  );
};

export default UserStatus;

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
  imageContainer: {
    borderColor: Colors.light.tint,
    borderWidth: 3,
    padding: 1,
    borderRadius: 50,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: '10%',
    color: 'black',
  },
  timeStamp: {
    color: 'grey',
    marginHorizontal: '10%',
  },
});
