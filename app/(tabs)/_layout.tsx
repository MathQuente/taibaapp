/* eslint-disable prettier/prettier */

import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View, Image } from 'react-native';

export const unstable_settings = {
  initialRouteName: 'mainPage',
};

const fontIcons = {
  home: (color: string, size: number) => <Entypo name="home" color={color} size={size} />,
  search: (color: string, size: number) => (
    <Entypo name="magnifying-glass" color={color} size={size} />
  ),
  places: (color: string, size: number) => <Entypo name="location-pin" color={color} size={size} />,
  events: (color: string, size: number) => (
    <MaterialCommunityIcons name="calendar" color={color} size={size} />
  ),
};

type typeFontIcon = keyof typeof fontIcons;

function renderIcon(name: string, color: string, size: number) {
  return (
    <View className="mt-4 flex h-12 items-center justify-center">
      {fontIcons[name as typeFontIcon](color, size)}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="mainPage"
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
          title: '',
          tabBarIcon: ({ color, size }) => renderIcon('home', color, size),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => renderIcon('search', color, size),
        }}
      />
      <Tabs.Screen
        name="places"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => renderIcon('places', color, size),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => renderIcon('events', color, size),
        }}
      />
    </Tabs>
  );
}

