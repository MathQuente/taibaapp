/* eslint-disable prettier/prettier */

import Entypo from '@expo/vector-icons/Entypo';
import { Link, Tabs } from 'expo-router';
import { View, Image } from 'react-native';

import { HeaderButton } from '../../components/HeaderButton';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#FFFF00',
        },
        header: () => (
          <View className="flex h-14 w-full items-center justify-center bg-[#D9D9D9]">
            <Image source={require('../../assets/Logo.png')} />
          </View>
        ),
      }}>
      <Tabs.Screen
        name="mainPage"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={size} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="places"
        options={{
          title: 'Places',
          tabBarIcon: ({ color, size }) => <Entypo name="location-pin" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          tabBarIcon: ({ color, size }) => <Entypo name="calendar" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
