import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

import { Places } from '~/types/responseTypes';

type PlaceCardProps = {
  place: Places;
};

export function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Link
      href={{
        pathname: '/places/placeDetails',
        params: {
          currentItem: JSON.stringify(place),
        },
      }}
      asChild>
      <TouchableOpacity className="flex-row justify-between bg-[#CCCCCC] px-3 py-3">
        <View>
          <Text className="font-semibold">{place.name}</Text>
          <Text>{place.address}</Text>
          <Text className="text-lg">{place.working_days}</Text>
          <Text>{place.working_hours}</Text>
        </View>
        <View className="h-24 w-24 bg-black" />
      </TouchableOpacity>
    </Link>
  );
}
