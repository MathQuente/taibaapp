import Entypo from '@expo/vector-icons/Entypo';
import { Link, Tabs } from 'expo-router';
import { View, Image } from 'react-native';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';

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
        name="initialPage"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={size} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
