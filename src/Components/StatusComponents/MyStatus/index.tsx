import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
//Icons
import AntDesignIcons from '../../Icons/AntDesignIcons';

const MyStatus = () => {
  const image = {
    uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48e4b01d-e2c9-410a-bdb1-9a95dcb19dcf/debokrv-f944888c-87b1-40a4-93c9-ea5b85d08b5c.jpg/v1/fill/w_1280,h_720,q_75,strp/adeptus_mechanicus_head_by_badmaker_debokrv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNDhlNGIwMWQtZTJjOS00MTBhLWJkYjEtOWE5NWRjYjE5ZGNmXC9kZWJva3J2LWY5NDQ4ODhjLTg3YjEtNDBhNC05M2M5LWVhNWI4NWQwOGI1Yy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.yrdku9cHg1sE1gg_p5TKAibleVXL4UNh1nbLXdnuo3E',
  };

  const PlusIcon = <AntDesignIcons name="plus" size={18} color="white" />;
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.plusIconContainer}>{PlusIcon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.myStatus}>My status</Text>
        <Text>Add an update</Text>
      </View>
    </View>
  );
};

export default MyStatus;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '11%',
    width: '100%',
    flexDirection: 'row',
    padding: '2%',
  },
  image: {
    height: 50,
    width: 50,
    overflow: 'hidden',
    borderRadius: 50,
  },
  plusIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
    backgroundColor: 'green',
    borderRadius: 15,
    position: 'absolute',
    top: '75%',
    left: '11%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '4%',
    justifyContent: 'center',
  },
  myStatus: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
