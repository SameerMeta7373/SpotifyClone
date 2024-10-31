import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useLayoutEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {image} from '../../Components/image';
import Icons from '../../Components/ImageIcons/Icons';
import ListCard from '../../Components/List/PlayList/PlayList';
import {height} from '../../Utils/dimension';
import {Apis} from '../../Utils/https';
import styles from './style';

function PlayList({route}) {
  const [albums, setAlbums] = useState();
  const [tracks, setTracks] = useState();

  const Y = useSharedValue(0);
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
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
  const animatedHeader = useAnimatedStyle(() => {
    const opacity = interpolate(Y.value, [100, 200], [0, 1], 'clamp');
    const translateY = interpolate(Y.value, [100, 200], [-20, 0], 'clamp');

    return {
      opacity,
      transform: [{translateY}],
    };
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      Y.value,
      [0, 120],
      ['transparent', '#1f1f1b'],
    );
    return {
      backgroundColor,
    };
  });

  const animatedTitleView = useAnimatedStyle(() => {
    const opacity = interpolate(Y.value, [1, 0], [1, 0]);
    return {
      opacity,
    };
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Animated.View
          style={[animatedHeaderStyle, styles.headerContainerAnimation]}>
          <View>
            <Icons
              source={image.back}
              style={{marginLeft: 20, marginTop: 14}}
              onPress={() => navigation?.goBack()}
            />
          </View>
          <Animated.View style={[animatedTitleView]}>
            <Text style={styles.headerTextAnimation}>{albums?.name}</Text>
          </Animated.View>
        </Animated.View>
      ),
    });
  }, [albums, animatedHeaderStyle, animatedHeader, Y]);

  useEffect(() => {
    getPlayList();
    getSongs();
  }, []);

  const scrollHandler = useAnimatedScrollHandler(event => {
    Y.value = event.contentOffset.y;
    console.log(Y.value);
  });

  const animatedText = useAnimatedStyle(() => {
    const translateY = interpolate(Y.value, [0, 170], [0, -100], 'clamp');
    return {
      translateY,
    };
  });

  const animatedImage = useAnimatedStyle(() => {
    const scale = interpolate(Y.value * 0.3, [0, 40], [1, 0.6], 'clamp');
    const opacity = interpolate(Y.value * 0.5, [50, 150], [1, 0], 'clamp');
    return {
      transform: [{scale}],
      opacity,
    };
  });

  return (
    <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
      <LinearGradient
        colors={['#52534E', '#272725', '#121212']}
        style={styles.linearGradient}>
        <View>
          <Animated.View style={[styles.upperConatiner, animatedImage]}>
            <Animated.Image
              style={[{height: 300, width: 280}, animatedImage]}
              source={image.ArtistProfile}
            />
            {/* uri: albums?.images[0]?.url */}
          </Animated.View>
          <Animated.View style={animatedText}>
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
                {albums?.name} . {albums?.tracks?.total} Tracks.{' '}
                {FormattedTime(
                  albums?.tracks?.items.reduce(
                    (acc, track) => acc + track.duration_ms,
                    0,
                  ),
                )}
              </Text>
              <View style={styles.iconRootcontainer}>
                <View style={styles.iconContainer}>
                  <Icons style={styles.imageStyle} source={image.Heart} />
                  <Icons style={styles.properties} source={image.Properties} />
                </View>
                <View style={{paddingRight: 6}}>
                  <Icons style={styles.playButton} source={image.PlayButton} />
                </View>
              </View>
              <View style={{height: height * 140}}>
                <ListCard
                  data={tracks}
                  onPress={id => {
                    navigation.navigate('MusicPlayer', {
                      trackId: id,
                      playList: tracks,
                    });
                  }}
                />
              </View>
            </View>
          </Animated.View>
        </View>
      </LinearGradient>
    </Animated.ScrollView>
  );
}

export default PlayList;
