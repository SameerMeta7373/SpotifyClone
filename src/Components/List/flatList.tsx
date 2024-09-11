import {View, FlatList} from 'react-native';
import {Card} from '../Card/Card';
import {image} from '../image';

export function List({renderItem, data}) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      style={{marginBottom: 10}}
    />
  );
}
