/* eslint-disable prettier/prettier */
import { Text, FlatList } from 'react-native';

export default function Home() {
  return (
    <FlatList
      renderItem={() => <Text>Sexo</Text>}
      data={[0, 1, 2, 3]}
      keyExtractor={(_, index) => index.toString()}
      horizontal
    />
  );
}
