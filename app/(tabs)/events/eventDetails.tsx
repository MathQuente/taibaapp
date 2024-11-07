import { format } from 'date-fns';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

import { Button } from '~/components/Button';
import { Events } from '~/types/responseTypes';

export default function EventDetails() {
  const params = useLocalSearchParams<{ currentItem: string }>();
  const eventData: Events = JSON.parse(params.currentItem);

  return (
    <View className="flex-1">
      <View className="h-2/5 bg-[#FFFF00]" />
      <View className="flex h-3/5 flex-1 flex-col justify-evenly bg-[#BEBEBE] px-8 py-5">
        <View className="flex flex-col gap-3">
          <Text className="text-3xl font-bold">{eventData.name}</Text>
          <Text className="ml-1.5 text-lg font-semibold leading-none">{eventData.description}</Text>
          <View className="ml-1.5">
            <Text className="text-lg font-semibold leading-none">
              Horário:{format(new Date(eventData.date), 'kk:mm')}
            </Text>
            <Text className="text-lg font-semibold leading-none">
              Data: {format(new Date(eventData.date), 'dd/MM/yyyy')}
            </Text>
          </View>
        </View>
        <View className="ml-1.5 h-56 w-full bg-[#FF00FF]" />
      </View>
      <Button />
    </View>
  );
}
