import * as React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//Constants
import Colors from '../../Constants/Colors';
import Routes from '../../Routes/Routes';
//Icons
import Fontisto from '../../Components/Icons/Fontisto';
//Screens
import ChatScreen from '../../Screens/Chats/ChatScreen';
import StatusScreen from '../../Screens/Status/StatusScreen';
import CallsScreen from '../../Screens/Calls/CallsScreen';

const topTabs = createMaterialTopTabNavigator();

const Camera = () => {
  return (
    <View>
      <Text>Camera</Text>
    </View>
  );
};

export default function MainTabNavigator() {
  return (
    <topTabs.Navigator
      initialRouteName={Routes.ChatScreen}
      tabBarOptions={{
        activeTintColor: Colors.light.background,
        style: {backgroundColor: Colors.light.tint, borderWidth: 0},
        indicatorStyle: {
          backgroundColor: Colors.light.background,
          height: '6%',
        },
        labelStyle: {
          fontWeight: 'bold',
        },
        showIcon: true,
      }}>
      <topTabs.Screen
        options={{
          tabBarIcon: () => <Fontisto name="camera" size={16} color="white" />,
          tabBarLabel: () => null,
        }}
        name={Routes.Camera}
        component={Camera}
      />
      <topTabs.Screen name={Routes.ChatScreen} component={ChatScreen} />
      <topTabs.Screen name={Routes.Status} component={StatusScreen} />
      <topTabs.Screen name={Routes.Calls} component={CallsScreen} />
    </topTabs.Navigator>
  );
}
