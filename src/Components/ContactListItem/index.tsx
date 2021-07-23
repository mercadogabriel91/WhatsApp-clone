import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
//Const
import {User} from '../../Constants/Types/Types';
import Routes from '../../Routes/Routes';
import moment from 'moment';
import {useNavigation} from '@react-navigation/core';

export type ContactListItemProp = {
  user: User;
};

const ContactListItem = (props: ContactListItemProp) => {
  const {user} = props;

  const navigation = useNavigation();

  const onClick = () => {
    //Navitage to chatroom with this user
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{uri: user?.imageUri}} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;

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
  status: {
    fontSize: 14,
    color: 'grey',
  },
});
