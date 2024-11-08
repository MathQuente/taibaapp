import { FlatList, View } from 'react-native';

import { PlaceCard } from './PlaceCard';

import { Places } from '~/types/responseTypes';

type PlaceListProps = {
  placeData: Places[];
};

export function PlaceList({ placeData }: PlaceListProps) {
  return (
    <View className="flex-1 px-7">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={placeData}
        keyExtractor={(_, index) => index.toString()}
        style={{ flex: 1, backgroundColor: '#CCCCCC' }}
        renderItem={({ item }) => <PlaceCard place={item} />}
      />
    </View>
  );
}
