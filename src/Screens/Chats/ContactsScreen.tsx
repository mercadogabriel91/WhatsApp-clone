import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
//Components
import ContactListItem from '../../Components/ContactListItem';

//Dummy Data
import users from '../../Data/Users';

const ContactsScreen = () => {
  return (
    <View style={styles.contaiiner}>
      <FlatList
        data={users}
        renderItem={({item}) => <ContactListItem user={item} />}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
    </View>
  );
};

export default ContactsScreen;

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
