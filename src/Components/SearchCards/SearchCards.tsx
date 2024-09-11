import {FC} from 'react';
import {ISearchCard} from '../../Constants/interface';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import { styles } from './style';

export const SearchCard: FC<ISearchCard> = ({children}) => {
  function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
  }
  return (
    <Pressable
      onPress={() => {}}
      style={({pressed}) => [pressed && styles.pressed]}>
      <View style={styles.rootContainer}>
        <View style={[styles.innerContainer, {backgroundColor: randomColor()}]}>
          <View>
            <Text style={styles.text}>{children}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

