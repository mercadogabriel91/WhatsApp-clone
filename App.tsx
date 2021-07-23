import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
//Client
import client from './src/Apollo/Client/Client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Routes
import Routes from './src/Routes/Routes';
//Context
import {Provider} from './src/Context/UserContext/UserContext';
//Const
import Colors from './src/Constants/Colors';
//Icons
import AntDesignIcons from './src/Components/Icons/AntDesignIcons';
import MaterialCommunityIcons from './src/Components/Icons/MaterialCommunityIcons';
import MaterialIcons from './src/Components/Icons/MaterialIcons';
import FontAwesome5 from './src/Components/Icons/FontAwesome5';
//Tabs Navigator
import MainTabNavigator from './src/Navigation/MainTabNavigator/MainTabNavigator';
//Screens
import ChatRoomScreen from './src/Screens/Chats/ChatRoomScreen';
import ContactsScreen from './src/Screens/Chats/ContactsScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  //Icons
  const searchIcon = <AntDesignIcons name="search1" size={22} color="white" />;
  const verticalMenuIcon = (
    <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
  );
  const callIcon = <MaterialIcons name="call" size={22} color="white" />;
  const videoIcon = <FontAwesome5 name="video" size={22} color="white" />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          //This is of IOS
          shadowOpacity: 0,
          //This is for Android
          elevation: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name={Routes.MainTabNavigator}
        options={{
          title: 'WhatsApp',
          headerRight: () => (
            <View style={styles.headerBarIconContainer}>
              <TouchableOpacity>{searchIcon}</TouchableOpacity>
              <TouchableOpacity>{verticalMenuIcon}</TouchableOpacity>
            </View>
          ),
        }}
        component={MainTabNavigator}
      />
      <Stack.Screen
        name={Routes.ChatRoomScreen}
        component={ChatRoomScreen}
        options={({route}) => ({
          title: route.params.name,
          headerRight: () => (
            <View style={styles.chatRoomIconContainer}>
              <TouchableOpacity>{videoIcon}</TouchableOpacity>
              <TouchableOpacity>{callIcon}</TouchableOpacity>
              <TouchableOpacity>{verticalMenuIcon}</TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen name={Routes.Contacts} component={ContactsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  headerBarIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '110%',
    marginRight: 10,
  },
  chatRoomIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    width: '150%',
  },
});
