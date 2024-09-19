import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {image} from '../../Components/image';
import Icons from '../../Components/ImageIcons/Icons';
import {ScrollView} from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import colors from '../../Utils/colors';
import {useEffect, useRef, useState} from 'react';
import {styles} from './style';
import {Apis} from '../../Utils/https';
import Sound from 'react-native-sound';

export function MusicPlayer({route}) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [trackSong, setTrackSong] = useState();
  const [position, setPosition] = useState(0);
  const [song, setSong] = useState();
  const {trackId} = route.params;
  const interval = useRef<NodeJS.Timeout | null>(null);

  function formattedTime(totalDurationMs) {
    const minutes = Math.floor(totalDurationMs / 60);
    const seconds = Math.floor(totalDurationMs % 60);
    const formatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return formatted;
  }

  const getSongs = async () => {
    const response = await Apis.getTrack(trackId);
    setTrackSong(response);
    const previewUrl = response?.preview_url;
    if (previewUrl) {
      const track = new Sound(previewUrl, Sound?.MAIN_BUNDLE, error => {
        if (error) {
          console.log("failed to load the sound', error");
          return;
        }
        setSong(track);
        console.log(
          'duration in seconds: ' +
            track?.getDuration() +
            'number of channels: ' +
            track?.getNumberOfChannels(),
        );
      });
      track?.play();
    } else {
      Alert.alert('Preview_url', 'No Preview_url Found');
    }
  };

  const songHandler = async () => {
    if (!song) {
      return;
    }
    if (isPlaying) {
      await song?.pause();
      setIsPlaying(false);
    } else {
      await song?.play(() => {
        setIsPlaying(false);
        setPosition(0);
        clearInterval(interval.current);
      });
      updatingSlider();
      setIsPlaying(true);
    }
  };

  function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
  }

  const onSliderChange = (value: number) => {
    if (song) {
      const newPostion = value * song?.getDuration();
      song.setCurrentTime(newPostion);
      setPosition(newPostion);
    }
  };

  const updatingSlider = () => {
    interval.current = setInterval(() => {
      song?.getCurrentTime(seconds => {
        setPosition(seconds);
      });
    }, 1000);
  };

  useEffect(() => {
    getSongs();
    return () => {
      clearInterval(interval.current);
      song?.release();
    };
  }, [trackId]);

  return (
    <ScrollView>
      <LinearGradient
        colors={['#5E5A4F', '#35322D', '#1D1C1A']}
        style={{flex: 1}}>
        <View style={{alignItems: 'center', paddingVertical: 8}}>
          <Text style={styles.rootHeader}>PLAYING FROM SEARCH</Text>
          <Text style={styles.headerSongName}>
            "{trackSong?.name}" in Songs
          </Text>
        </View>
        <View style={styles.ImageContainer}>
          <Image style={styles.ImageStyle} source={trackSong?.uri} />
        </View>
        <View style={styles.songNameContainer}>
          <View style={{width: 300, marginHorizontal: 20}}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.songName}>
              {trackSong?.name}
            </Text>
            <Text style={styles.singerName}>{trackSong?.artists[0]?.name}</Text>
          </View>
          <Icons source={image.Heart} />
        </View>
        <Slider
          style={styles.slider}
          value={position / song?.getDuration() || 0}
          onSlidingComplete={onSliderChange}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor={colors.primaryWhite}
          minimumTrackTintColor={colors.primaryWhite}
          maximumTrackTintColor="grey"
        />
        <View style={styles.timer}>
          <Text style={{color: colors.primaryWhite}}>
            {formattedTime(position)}
          </Text>
          <Text style={{color: colors.primaryWhite}}>
            {formattedTime(song?.getDuration())}
          </Text>
        </View>
        <View style={styles.songControllContainer}>
          <Icons source={image.Shuffle} />
          <Icons style={{height: 30, width: 25}} source={image.PreviousPlay} />

          <Icons
            style={{height: 70, width: 70}}
            source={isPlaying ? image.Pause : image.WhitePlayButton}
            onPress={songHandler}
          />
          <Icons style={{height: 30, width: 25}} source={image.NextPlay} />
          <Icons source={image.Loop} />
        </View>

        <View style={styles.optionsContainer}>
          <Icons style={{height: 30, width: 30}} source={image.Cast} />
          <Icons style={{height: 20, width: 20}} source={image.Share} />
        </View>
        <View style={[styles.lyrics, {backgroundColor: randomColor()}]}>
          <Text style={styles.lyricsHeading}>Lyrics</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
