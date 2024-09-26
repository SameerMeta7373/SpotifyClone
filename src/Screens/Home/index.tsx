import {useNavigation} from '@react-navigation/native';
import {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {Card} from '../../Components/Card/Card';
import {image} from '../../Components/image';
import Icons from '../../Components/ImageIcons/Icons';
import {List} from '../../Components/List/flatList';
import {HomeTitle} from '../../Components/Title/HomeTitle';
import {IrenderSongItem} from '../../Constants/interface';
import {Apis} from '../../Utils/https';
import {styles} from './style';
import {height, width} from '../../Utils/dimension';

function HomeScreen() {
  const navigation = useNavigation();
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [recommendedSongs, setrecommendedSongs] = useState([]);

  const getAlbums = async () => {
    const response = await Apis.getSeveralAlbums();
    setAlbums(response.albums.items);
  };

  const getTracks = async () => {
    const response = await Apis.getSeveralTracks();
    setTracks(response.tracks);
  };

  const getRecommendation = async () => {
    const response = await Apis.getRecommendations();
    setrecommendedSongs(response.tracks);
  };

  useEffect(() => {
    getAlbums();
    getTracks();
    getRecommendation();
  }, []);

  const renderSingerItem = ({item}) => {
    const artistNames = item.artists.map(item => item?.name).join();
    const albumName = item.name;
    return (
      <Card
        // source={{uri: item.images[0].url}}
        source={image.ArtistProfile}
        albumName={albumName}
        name={artistNames}
        onPress={() => navigation.navigate('PlayList', {albumId: item.id})}
      />
    );
  };

  const renderSongItem: FC<IrenderSongItem> = ({item}) => {
    const artistNames = item.artists.map(item => item?.name).join();
    // const previewUrl = item?.preview_url
    const songName = item.name;

    // const image = item.images[0]
    // console.log("image==============>",image);

    if (item?.preview_url) {
      return (
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Card
            // source={{uri: item.images[0].url}}
            source={image.Artist}
            title={songName}
            name={artistNames}
            onPress={() =>
              navigation.navigate('MusicPlayer', {trackId: item.id})
            }
          />
        </View>
      );
    }
  };

  const recommendation = ({item}) => {
    const artistNames = item.artists.map(item => item?.name).join();
    const songName = item.name;

    if (item?.preview_url) {
      return (
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Card
            // source={{uri: item.images[0].url}}
            title={songName}
            name={'Song . ' + artistNames}
            onPress={() =>
              navigation.navigate('MusicPlayer', {trackId: item.id})
            }
          />
        </View>
      );
    }
  };
  return (
    <LinearGradient
      colors={['#484C4D', '#121212', '#121212']}
      style={styles.linearGradient}>
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 40}}>
        <View style={styles.titleIcon}>
          <HomeTitle>Made for you</HomeTitle>
          <View style={styles.iconContainer}>
            <Icons source={image.BellLogo} />
            <Icons style={{marginLeft: 17}} source={image.HistoryLogo} />
            <Icons style={{marginLeft: 17}} source={image.SettingsLogo} />
          </View>
        </View>
        <List data={albums} renderItem={renderSingerItem} />
        <HomeTitle>Trending now</HomeTitle>
        <List data={tracks} renderItem={renderSongItem} />
        <HomeTitle>Top picks for you</HomeTitle>
        <List data={recommendedSongs} renderItem={recommendation} />
      </ScrollView>
    </LinearGradient>
  );
}

export default HomeScreen;
