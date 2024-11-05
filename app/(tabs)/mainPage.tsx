/* eslint-disable prettier/prettier */

import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Text, FlatList, View, Image } from 'react-native';

import { useApi } from '~/api/useApi';
import { Button } from '~/components/Button';
import { HomeResponse } from '~/types/responseTypes';

export default function Home() {
  const api = useApi();

  const { data: HomeResponse } = useQuery<HomeResponse>({
    queryKey: ['home'],
    queryFn: async () => api.getHomeInfo(),
  });

  return (
    <View className="flex-1 bg-white">
      <View className="bg-[#CCCCCC] p-4">
        <Text className="pb-2 pl-5 text-lg">New Events</Text>
        <FlatList
          data={HomeResponse?.events}
          keyExtractor={(_, index) => index.toString()}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: 'space-between',
          }}
          renderItem={({ item }) => (
            <View className="h-30 mr-3 flex-1">
              <Image
                className="size-28"
                source={{
                  uri: 'https://res.cloudinary.com/dtdkzusmw/image/upload/v1727547577/images/yjoka1rbduygfwhxczm9.gif',
                }}
              />
              <View>
                <Text className="text-lg font-bold">{item.name}</Text>
                <Text className="text-lg">{item.address}</Text>
                <Text className="text-lg">{format(new Date(item.date), 'dd/MM/yyyy')}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View className="flex-1 px-7">
        <Text className="pb-2 pt-2 text-lg">New Places</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={HomeResponse?.places}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View className=" flex flex-row justify-between bg-[#CCCCCC] px-3 py-4">
              <View>
                <Text className="font-semibold">{item.name}</Text>
                <Text>{item.address}</Text>
                <Text>{item.working_hours}</Text>
                <Text>{item.working_days}</Text>
              </View>
              <Image
                className="size-28"
                source={{
                  uri: 'https://res.cloudinary.com/dtdkzusmw/image/upload/v1727547577/images/yjoka1rbduygfwhxczm9.gif',
                }}
              />
            </View>
          )}
        />
      </View>
      <Button />
    </View>
  );
}
