import React from 'react';
import { View, Text } from 'react-native';

import { Button } from '~/components/Button';

export default function eventDetails() {
  return (
    <View className="flex-1">
      <View className="h-2/5 bg-[#FFFF00]" />
      <View className="flex h-3/5 flex-1 flex-col bg-[#BEBEBE] px-10 py-5">
        <View className="flex flex-col gap-4">
          <Text className="text-3xl font-bold">Place/Event Name</Text>
          <Text className="text-lg font-semibold">
            Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
            Ipsum(Descrição)
          </Text>
          <View className="leading-none">
            <Text className="text-lg font-semibold">Horário:</Text>
            <Text className="text-lg font-semibold">Data:</Text>
          </View>
        </View>
        <View className="h-56 w-full bg-[#FF00FF]" />
      </View>
      <Button />
    </View>
  );
}
