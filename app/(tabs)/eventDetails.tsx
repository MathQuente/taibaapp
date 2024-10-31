import React from 'react';
import { View, Text } from 'react-native';

import { Button } from '~/components/Button';

export default function eventDetails() {
  return (
    <View className="flex-1">
      <View className="h-2/5 bg-[#FFFF00]" />
      <View className="flex h-3/5 flex-1 flex-col justify-evenly bg-[#BEBEBE] px-8 py-5">
        <View className="flex flex-col gap-3">
          <Text className="text-3xl font-bold">Place/Event Name</Text>
          <Text className="ml-1.5 text-lg font-semibold leading-none">
            Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
            Ipsum(Descrição)
          </Text>
          <View className="ml-1.5">
            <Text className="text-lg font-semibold leading-none">Horário:</Text>
            <Text className="text-lg font-semibold leading-none">Data:</Text>
          </View>
        </View>
        <View className="ml-1.5 h-56 w-full bg-[#FF00FF]" />
      </View>
      <Button />
    </View>
  );
}
