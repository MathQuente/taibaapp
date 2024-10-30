/* eslint-disable prettier/prettier */

import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { Button } from '~/components/Button';

export default function Events() {
  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between px-6 py-3">
        <Text className="text-lg">Events</Text>
        <View className="w-28">
          <TouchableOpacity className="flex items-center bg-[#CCCCCC] p-3">
            <Text>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1 px-7">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Array.from({ length: 5 })}
          keyExtractor={(_, index) => index.toString()}
          style={{ flex: 1, backgroundColor: '#CCCCCC' }}
          renderItem={() => (
            <View className="flex-row justify-between bg-[#CCCCCC] px-3 py-3">
              <View>
                <Text className="font-semibold">Nome do Local</Text>
                <Text>Endereço</Text>
                <Text>Horário de Funcionamento</Text>
                <Text>Dias de Funcionamento</Text>
                <Text>Realização(?)</Text>
              </View>
              <View className="h-24 w-24 bg-black" />
            </View>
          )}
        />
      </View>
      <Button />
    </View>
  );
}
