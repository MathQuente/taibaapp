/* eslint-disable prettier/prettier */

import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Link } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { useApi } from '~/api/useApi';
import { Button } from '~/components/Button';
import { EventsResponse } from '~/types/responseTypes';

export default function EventsPage() {
  const api = useApi();

  const { data: EventsReponse } = useQuery<EventsResponse>({
    queryKey: ['events'],
    queryFn: async () => api.getEvents(),
  });

  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between px-7 py-3">
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
          data={EventsReponse?.events}
          keyExtractor={(_, index) => index.toString()}
          style={{ flex: 1, backgroundColor: '#CCCCCC' }}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: '/events/eventDetails',
                params: {
                  currentItem: JSON.stringify(item),
                },
              }}
              asChild>
              <TouchableOpacity className="flex-row justify-between bg-[#CCCCCC] px-3 py-3">
                <View>
                  <Text className="font-semibold">{item.name}</Text>
                  <Text>{item.address}</Text>
                  <Text className="text-lg">{format(new Date(item.date), 'dd/MM/yyyy')}</Text>
                  <Text>{item.realized_by}</Text>
                </View>
                <View className="h-24 w-24 bg-black" />
              </TouchableOpacity>
            </Link>
          )}
        />
      </View>
      <Button />
    </View>
  );
}
