import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { image } from '../../Components/image';
import Icons from '../../Components/ImageIcons/Icons';
import ListCard from '../../Components/List/PlayList/PlayList';
import { Apis } from '../../Utils/https';
import styles from './style';

function PlayList({route}) {
  const [albums, setAlbums] = useState();
  const [tracks, setTracks] = useState();

  const albumId = route.params.albumId;

  const getPlayList = async () => {
    const response = await Apis.getAlbums(albumId);
    setAlbums(response);
  };

  const getSongs = async () => {
    const response = await Apis.getAlbums(albumId);
    const previewUrl = response?.tracks?.items[0]?.preview_url;
    if (previewUrl) {
      setTracks(response?.tracks?.items);
    }
  };

  function FormattedTime(totalDurationMs) {
    const hours = Math.floor(totalDurationMs / 3600000);
    const minutes = Math.floor((totalDurationMs % 3600000) / 60000);
    const seconds = Math.floor((totalDurationMs % 60000) / 1000);

    const formatted = `${hours}h ${minutes}m ${seconds}s`;

    return formatted;
  }
  useEffect(() => {
    getPlayList();
    getSongs();
  }, []);

  const navigation = useNavigation();
  return (
    <ScrollView>
      <LinearGradient
        colors={['#52534E', '#272725', '#121212']}
        style={styles.linearGradient}>
        <View>
          <View style={styles.upperConatiner}>
            <Image
              style={{height: 300, width: 280}}
              source={image.ArtistProfile}
            />
            {/* uri: albums?.images[0]?.url */}
          </View>
          <View style={styles.lowerContainer}>
            <Text style={styles.songDescription}>
              Tune in to Top Tracks from{' '}
              {albums?.artists.map(item => item.name).join()} and many more
            </Text>
            <Image
              style={{height: 30, width: 100}}
              source={image.SpotifySmallLogo}
            />
            <Text style={styles.likesText}>
              {albums?.name} . {albums?.tracks?.total} Tracks. {FormattedTime(
                albums?.tracks?.items.reduce(
                  (acc, track) => acc + track.duration_ms,
                  0,
                ),
              )}
            </Text>
            <View style={styles.iconRootcontainer}>
              <View
                style={styles.iconContainer}>
                <Icons style={styles.imageStyle} source={image.Heart} />
                <Icons style={styles.properties} source={image.Properties} />
              </View>
              <View style={{paddingRight: 6}}>
                <Icons style={styles.playButton} source={image.PlayButton} />
              </View>
            </View>
            <View style={{height: 1050}}>
              <ListCard
                data={tracks}
                onPress={(id) => {
                  navigation.navigate('MusicPlayer', {trackId: id, playList: tracks });
                }}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

export default PlayList;
