import {FlatList, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Utils/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {HomeTitle} from '../../Components/Title/HomeTitle';
import {Card} from '../../Components/Card/Card';
import {image} from '../../Components/image';
import Icons from '../../Components/ImageIcons/Icons';
import {styles} from './style';
import {List} from '../../Components/List/flatList';
import {FC, useEffect, useState} from 'react';
import {IrenderSongItem} from '../../Constants/interface';
import {Apis} from '../../Utils/https';

function HomeScreen() {
  const [artist, setArtist] = useState([]);

  const getAlbums = async () => {
    const response = await Apis.getSeveralAlbums();
    // console.log('response==>', response);

    console.log("response.albums[0].images[0].url ====>" , response.albums[0].images[0].url);
    
    setArtist(response.albums[0].images[0].url || []);
    console.log('artist ====>', artist);
  };

  useEffect(() => {
    getAlbums();
  }, []);
  const singers = [
    {id: '1', name: 'Ed Shereen', image: image.Artist},
    {id: '2', name: 'Justin Bieber', image: image.Artist},
  ];

  const trendingSongs = [
    {
      id: '1',
      name: 'Song One',
      singer: 'Ed Shereen',
      cover: image.Artist,
    },
    {
      id: '2',
      name: 'Song Two',
      singer: 'Justin Bieber',
      cover: image.Artist,
    },
    {
      id: '12',
      name: 'Song One',
      singer: 'Ed Shereen',
      cover: image.Artist,
    },
    {
      id: '22',
      name: 'Song Two',
      singer: 'Justin Bieber',
      cover: image.Artist,
    },
  ];

  const topPicksSongs = [
    {
      id: '1',
      name: 'Pick One',
      singer: 'Ed Shereen',
      cover: image.Artist,
    },
    {
      id: '2',
      name: 'Pick Two',
      singer: 'Justin Bieber',
      cover: image.Artist,
    },
    {
      id: '12',
      name: 'Pick One',
      singer: 'Ed Shereen',
      cover: image.Artist,
    },
    {
      id: '22',
      name: 'Pick Two',
      singer: 'Justin Bieber',
      cover: image.Artist,
    },
  ];

  const renderSingerItem = () => <Card source={artist} />;

  const renderSongItem: FC<IrenderSongItem> = ({item}) => (
    <View style={{flexDirection: 'row', marginBottom: 10}}>
      <Card />
    </View>
  );

  return (
    <LinearGradient
      colors={['#484C4D', '#121212', '#121212']}
      style={styles.linearGradient}>
      <ScrollView
        style={styles.rootContainer}
        contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 40}}>
        <View style={styles.titleIcon}>
          <HomeTitle>Made for you</HomeTitle>
          <View style={styles.iconContainer}>
            <Icons source={image.BellLogo} />
            <Icons style={{marginLeft: 23}} source={image.HistoryLogo} />
            <Icons style={{marginLeft: 23}} source={image.SettingsLogo} />
          </View>
        </View>
        <List data={singers} renderItem={renderSingerItem} />
        <HomeTitle>Trending now</HomeTitle>
        <List data={trendingSongs} renderItem={renderSongItem} />
        <HomeTitle>Top picks for you</HomeTitle>
        <List data={topPicksSongs} renderItem={renderSongItem} />
      </ScrollView>
    </LinearGradient>
  );
}

export default HomeScreen;
