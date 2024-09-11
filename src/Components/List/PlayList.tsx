import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../../Utils/colors';
import {image} from '../image';
import styles from '../../Screens/PlayList/style';
import { useNavigation } from '@react-navigation/native';

export function PlayFlatList() {
  const navigation = useNavigation()
  const DATA = [
    {
      id: '1',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:20',
    },
    {
      id: '2',
      title: 'Levitating',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia',
      duration: '3:23',
    },
    {
      id: '3',
      title: 'Watermelon Sugar',
      artist: 'Harry Styles',
      album: 'Fine Line',
      duration: '2:54',
    },
    {
      id: '4',
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:35',
    },
    {
      id: '5',
      title: 'Peaches',
      artist: 'Justin Bieber',
      album: 'Justice',
      duration: '3:18',
    },
    {
      id: '6',
      title: 'Drivers License',
      artist: 'Olivia Rodrigo',
      album: 'SOUR',
      duration: '4:02',
    },
    {
      id: '7',
      title: 'Good 4 U',
      artist: 'Olivia Rodrigo',
      album: 'SOUR',
      duration: '2:58',
    },
    {
      id: '8',
      title: 'Kiss Me More',
      artist: 'Doja Cat feat. SZA',
      album: 'Planet Her',
      duration: '3:29',
    },
    {
      id: '9',
      title: 'Bad Habits',
      artist: 'Ed Sheeran',
      album: '= (Equals)',
      duration: '3:50',
    },
    {
      id: '10',
      title: 'MONTERO (Call Me By Your Name)',
      artist: 'Lil Nas X',
      album: 'MONTERO',
      duration: '2:17',
    },
  ];
  return (
    <FlatList
      data={DATA}
      contentContainerStyle={{paddingBottom: 1200}}
      renderItem={({item}) => {
        return (
          <Pressable
            onPress={() => {navigation.navigate('MusicPlayer')}}
            style={({pressed}) => [pressed && styles.pressed]}>
            <View style={{flexDirection: 'row', marginTop: 40}}>
              <Image style={{height: 80, width: 70}} source={image.believer} />
              <View style={{padding: 10}}>
                <Text
                  style={{
                    color: colors.primaryWhite,
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  {item?.title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={image.Lyrics} />
                  <Text
                    style={{
                      color: colors.primaryGrey,
                      paddingLeft: 8,
                      fontSize: 16,
                    }}>
                    {item?.artist}
                  </Text>
                </View>
              </View>
              <View style={{paddingVertical: 15}}>
                <Image
                  style={[styles.properties, {width: 280}]}
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
}
