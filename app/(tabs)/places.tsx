/* eslint-disable prettier/prettier */

import { useQuery } from '@tanstack/react-query';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { useApi } from '~/api/useApi';
import { Button } from '~/components/Button';
import { PlacesReponse } from '~/types/responseTypes';

export default function Places() {
  const api = useApi();

  const { data: PlaceResponse } = useQuery<PlacesReponse>({
    queryKey: ['home'],
    queryFn: async () => api.getHomeInfo(),
  });

  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between px-7 py-3">
        <Text className="text-lg">Places</Text>
        <View className="w-28">
          <TouchableOpacity className="flex items-center bg-[#CCCCCC] p-3">
            <Text>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1 px-7">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PlaceResponse?.places}
          keyExtractor={(_, index) => index.toString()}
          style={{ flex: 1, backgroundColor: '#CCCCCC' }}
          renderItem={({ item }) => (
            <View className="flex-row justify-between bg-[#CCCCCC] px-3 py-4">
              <View>
                <Text className="font-semibold">{item.name}</Text>
                <Text>{item.address}</Text>
                <Text>{item.working_hours}</Text>
                <Text>{item.working_days}</Text>
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

