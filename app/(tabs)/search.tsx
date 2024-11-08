import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';

import { useApi } from '~/api/useApi';
// import { EventCard } from '~/components/EventCard';
// import { PlaceCard } from '~/components/PlaceCard';
import { HomeResponse } from '~/types/responseTypes';

export default function Search() {
  const [search, setSearch] = useState('');
  const api = useApi();

  const { data: HomeScreenResponse } = useQuery<HomeResponse>({
    queryKey: ['home'],
    queryFn: async () => api.getHomeInfo(),
  });

  function handleChangeSearch(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    setSearch(e.nativeEvent.text);
  }

  if (!HomeScreenResponse) {
    return null;
  }

  const filteredHomeResponse: HomeResponse =
    search !== ''
      ? {
          places: HomeScreenResponse.places.filter((currentPlace) =>
            currentPlace.name.toLowerCase().includes(search.toLowerCase())
          ),
          events: HomeScreenResponse.events.filter((currentEvent) =>
            currentEvent.name.toLowerCase().includes(search.toLowerCase())
          ),
        }
      : HomeScreenResponse;

  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-center px-7 py-3">
        <TextInput
          value={search}
          onChange={handleChangeSearch}
          className="m-3 h-10 w-full rounded-2xl border p-3 "
          placeholder="search"
        />
      </View>
      <View className="flex-1">
        {filteredHomeResponse.events.map((event) => (
          <View
            className="flex-1 flex-row items-center justify-between bg-red-500 px-8"
            key={event.id}>
            <Text className="text-xl font-semibold">{event.name}</Text>
            <View className="h-24 w-24 bg-black" />
          </View>
        ))}
      </View>
      <View className="flex-1 bg-black">
        {filteredHomeResponse.places
          .map((places) => (
            <View
              className="flex-1 flex-row items-center justify-between bg-green-600 px-8"
              key={places.id}>
              <Text className="text-xl font-semibold">{places.name}</Text>
              <View className="h-24 w-24 bg-black" />
            </View>
          ))
          .slice(0, 3)}
      </View>
    </View>
  );
}
