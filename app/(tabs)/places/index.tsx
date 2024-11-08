/* eslint-disable prettier/prettier */

import { useQuery } from '@tanstack/react-query';
import { Text, TouchableOpacity, View } from 'react-native';

import { useApi } from '~/api/useApi';
import { Button } from '~/components/Button';
import { PlaceList } from '~/components/PlaceList';
import { PlacesReponse } from '~/types/responseTypes';

export default function Places() {
  const api = useApi();

  const { data: PlaceResponse } = useQuery<PlacesReponse>({
    queryKey: ['places'],
    queryFn: async () => api.getPlaces(),
  });

  if (!PlaceResponse) {
    return null;
  }

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
      <PlaceList placeData={PlaceResponse.places} />
      <Button />
    </View>
  );
}

