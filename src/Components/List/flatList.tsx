import {View, FlatList, ListRenderItem} from 'react-native';
import {Card} from '../Card/Card';
import {image} from '../image';
import {FC} from 'react';
import { IList } from '../../Constants/interface';



export const List: FC<IList> = ({renderItem, data}) => {
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
};
