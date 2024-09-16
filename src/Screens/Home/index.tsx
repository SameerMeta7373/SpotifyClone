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
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [recommendedSongs, setrecommendedSongs] = useState([]);
  

  const getAlbums = async () => {
    const response = await Apis.getSeveralAlbums();

    console.log('albums===>', JSON.stringify(response));

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
    return <Card source={{uri: item.images[0].url}} name={artistNames} onPress={() => navigation.navigate('PlayList' , {id : item.id}) } />;
  };

  const renderSongItem: FC<IrenderSongItem> = ({item}) => {
    return (
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Card
          title={item?.name}
          name={item?.artists?.map(item => item?.name)}
        />
      </View>
    );
  };

  const recommendation = ({item}) => {
    return (
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Card
          title={item?.name}
          // onPress={}
          name={'Song . ' + item?.artists?.map(item => item?.name).join()}
        />
      </View>
    );
  };

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
