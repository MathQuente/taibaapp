/* eslint-disable prettier/prettier */

import { useQuery } from '@tanstack/react-query';
import { Text, TouchableOpacity, View } from 'react-native';

import { useApi } from '~/api/useApi';
import { Button } from '~/components/Button';
import { EventList } from '~/components/EventList';
import { EventsResponse } from '~/types/responseTypes';

export default function EventsPage() {
  const api = useApi();

  const { data: EventsReponse } = useQuery<EventsResponse>({
    queryKey: ['events'],
    queryFn: async () => api.getEvents(),
  });

  if (!EventsReponse) {
    return null;
  }

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
      <EventList eventData={EventsReponse?.events} />
      <Button />
    </View>
  );
}
