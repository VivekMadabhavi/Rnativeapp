import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet } from 'react-native';
// import HomeIcon from './images/home.png'; // Update this path based on your icon's location
// import ReelsIcon from './images/reels.png'; // Update this path based on your icon's location
// import MyGroupsIcon from './images/mygroups.png'; // Update this path based on your icon's location
// import MoreIcon from './images/more.png'; // Update this path based on your icon's location

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}

function Reels() {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Reels</Text>
      </View>
    </SafeAreaView>
  );
}

function MyGroups() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          {/* <Image source={require('./images/Rectangle.png')} style={styles.appIcon3} /> */}
          <Image source={require( './images/Group.png')} style={styles.appIcon} />
        </View>
        <Text></Text>
        <View>
          <Image source={require('./images/Ordercard.png')} style={styles.appIcon1} />
        </View>
        <View>
          <Image source={require('./images/Ordercard.png')} style={styles.appIcon1} />
        </View>
        <View>
          <Image source={require('./images/Ordercard.png')} style={styles.appIcon1} />
        </View>
      </View>
    </SafeAreaView>
  );
}

function More() {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <View>
        <Image source={require('./images/bullets.png')} style={styles.appIcon6} />
        </View>
        
        <Text></Text>
      </View>
    </SafeAreaView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./images/Home1.png')} style={styles.appIcon2} />
            ),
          }}
        />
        <Tab.Screen 
          name="Reels" 
          component={Reels} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./images/Reels1.png')} style={styles.appIcon2} />
            ),
          }}
        />
        <Tab.Screen 
          name="MyGroups" 
          component={MyGroups} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./images/MyGroups1.png')} style={styles.appIcon2} />
            ),
          }}
        />
        <Tab.Screen 
          name=" " 
          component={More} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./images/More1.png')} style={styles.appIcon2} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIcon: {
    width: 440,
    height: 68,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor:"white"
  },
  appIcon1: {
    width: 450,
    height: 216,
    justifyContent: "center",
    alignContent: "center",
  },
  appIcon2: {
    width: 76,
    height: 62,
    justifyContent: "center",
    alignContent: "center",

  },
  appIcon5: {
    width: 300,
    height: 64,
    justifyContent: "center",
    alignContent: "center",

  },
  appIcon6: {
    width: 430,
    height: 540,
    justifyContent: "center",
    alignContent: "center",

  }

});

export default App;
