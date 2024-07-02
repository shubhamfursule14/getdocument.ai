import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabHelper from './Src/Navigation/TabHelper';
import { enableScreens } from 'react-native-screens';
import Home from './Src/getDoument_ai/Home'

enableScreens();

const App = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(0, 195, 233, 1)'}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress,
                },
              }),
              cardStyle: { backgroundColor: '#FFFFFF' },
            }}
          >
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: '#fff'}}></SafeAreaView>
    </>
  );
};

export default App;
