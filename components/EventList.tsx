import { FlatList, View } from 'react-native';

import { EventCard } from './EventCard';

import { Events } from '~/types/responseTypes';

type EventListProps = {
  eventData: Events[];
};

export function EventList({ eventData }: EventListProps) {
  return (
    <View className="flex-1 px-7">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={eventData}
        keyExtractor={(_, index) => index.toString()}
        style={{ flex: 1, backgroundColor: '#CCCCCC' }}
        renderItem={({ item }) => <EventCard event={item} />}
      />
    </View>
  );
}
