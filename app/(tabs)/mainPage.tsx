/* eslint-disable prettier/prettier */

import { Text, FlatList, View } from 'react-native';

import { Button } from '~/components/Button';

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <View className="bg-[#CCCCCC] p-4">
        <Text className="ml-3.5 pb-2 text-lg">New Events</Text>
        <FlatList
          data={[0, 1, 2]}
          keyExtractor={(_, index) => index.toString()}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 12,
          }}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: 'space-between',
          }}
          renderItem={() => (
            <View className="h-30 mr-3 flex-1">
              <View className="h-28 bg-[#D9D9D9]" />
              <View>
                <Text className="text-lg font-bold">Nome</Text>
                <Text className="text-lg">Local</Text>
                <Text className="text-lg">Horário</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View className="flex-1 px-7">
        <Text className="pb-2 pt-2 text-lg">New Places</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Array.from({ length: 5 })}
          keyExtractor={(_, index) => index.toString()}
          renderItem={() => (
            <View className=" flex flex-row justify-between bg-[#CCCCCC] px-3 py-4">
              <View>
                <Text className="font-semibold">Nome do Local</Text>
                <Text>Endereço</Text>
                <Text>Horário de Funcionamento</Text>
                <Text>Dias de Funcionamento</Text>
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
