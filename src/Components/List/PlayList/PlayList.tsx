import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {image} from '../../image';
import Icons from '../../ImageIcons/Icons';
import {styles} from './style';
import {FC} from 'react';
import {IListCard} from '../../../Constants/interface';


const ListCard: FC<IListCard> = ({onPress, data,}) => {

  return (
    <FlatList
      data={data}
      renderItem={({item}) => {

        return (
          <Pressable
            onPress={() => onPress(item.id, item)}
            style={({pressed}) => pressed && {opacity: 0.5}}>
            <View style={styles.rootContainer}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image style={styles.imageStyle} source={image.ArtistProfile} />
                </View>
                <View style={{margin: '2%', width : '70%'}}>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={styles.titleTextStyle}>
                    {item?.name}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.lyricsText}>LYRICS</Text>
                    <Text style={styles.textStyle}>
                      {item?.artists.map(item => item.name).join()}
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Icons
                  style={{resizeMode: 'contain'}}
                  source={image.Properties}
                />
              </View>
            </View>
          </Pressable>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};

// item.tracks?.items.map(item => item.name)
export default ListCard;
