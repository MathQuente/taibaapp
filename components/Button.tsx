import { forwardRef, ReactNode } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  children: ReactNode;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ children, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className={`${styles.button} ${touchableProps.className}`}>
        <Text className={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = {
  button: 'items-center bg-white rounded-full shadow-md p-3 absolute bottom-4 right-8',
  buttonText: 'text-white text-lg font-semibold text-center',
};
