import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
//Icons
import FontAwesome5 from '../../Icons/FontAwesome5';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import FontAwesome from '../../Icons/FontAwesome';
import MaterialCommunityIcons from '../../Icons/MaterialCommunityIcons';

//Colors
import Colors from '../../../Constants/Colors';

const CallItem = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.insider.com/5abbc3eb42e1cc3a4e16d3f5?width=960&format=jpeg',
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>Angry crab</Text>
        <View style={styles.dateContainer}>
          <MaterialCommunityIcons
            name="arrow-bottom-left"
            size={16}
            color="red"
          />
          <Text>some date</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.opacity}>
        {/* <FontAwesome name="phone" size={20} color={Colors.light.tint} /> */}
        <FontAwesome5 name="video" size={18} color={Colors.light.tint} />
      </TouchableOpacity>
    </View>
  );
};

export default CallItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: '2%',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    overflow: 'hidden',
    borderRadius: 25,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: '4%',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  opacity: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '45%',
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
