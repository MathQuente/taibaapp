import { format } from 'date-fns';
import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

import { Events } from '~/types/responseTypes';

type EventCardProps = {
  event: Events;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={{
        pathname: '/events/eventDetails',
        params: {
          currentItem: JSON.stringify(event),
        },
      }}
      asChild>
      <TouchableOpacity className="flex-row justify-between bg-[#CCCCCC] px-3 py-3">
        <View>
          <Text className="font-semibold">{event.name}</Text>
          <Text>{event.address}</Text>
          <Text className="text-lg">{format(new Date(event.date), 'dd/MM/yyyy')}</Text>
          <Text>{event.realized_by}</Text>
        </View>
        <View className="h-24 w-24 bg-black" />
      </TouchableOpacity>
    </Link>
  );
}
