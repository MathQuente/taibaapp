import { MaterialIcons } from '@expo/vector-icons';
import { forwardRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const Button = forwardRef<TouchableOpacity>(({ ...touchableProps }, ref) => {
  return (
    <TouchableOpacity ref={ref} {...touchableProps} className={`${styles.button} `}>
      <Text className={styles.buttonText}>
        <MaterialIcons name="search" size={24} color="black" />
      </Text>
    </TouchableOpacity>
  );
});

const styles = {
  button: 'items-center bg-white rounded-full shadow-lg p-4 absolute bottom-4 right-2',
  buttonText: 'text-white text-lg font-semibold text-center',
};
