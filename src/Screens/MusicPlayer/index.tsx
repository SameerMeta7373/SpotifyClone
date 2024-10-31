import Slider from '@react-native-community/slider';
import {useEffect, useRef, useState} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Share from 'react-native-share';
import Sound from 'react-native-sound';
import {image} from '../../Components/image';
import Icons from '../../Components/ImageIcons/Icons';
import colors from '../../Utils/colors';
import {Apis} from '../../Utils/https';
import {styles} from './style';

export function MusicPlayer({route}) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [trackSong, setTrackSong] = useState();
  const [position, setPosition] = useState(0);
  const [song, setSong] = useState();
  const [color, setColor] = useState<string>();
  const [currIndex, setCurrIndex] = useState<number>(0);
  const {trackId, playList} = route.params;

  const interval = useRef<NodeJS.Timeout | null>(null);

  function formattedTime(totalDurationMs) {
    const minutes = Math.floor(totalDurationMs / 60);
    const seconds = Math.floor(totalDurationMs % 60);
    const formatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return formatted;
  }

  const getSongs = async songId => {
    const response = await Apis.getTrack(songId);
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
      // track?.play();
    } else {
      Alert.alert('Preview_url', 'No Preview_url Found');
    }
  };

  const songHandler = () => {
    if (song) {
      if (!isPlaying) {
        song?.play();
        setIsPlaying(true);
      } else {
        song?.pause();
        setIsPlaying(false);
        // setPosition(0);
        // clearInterval(interval.current);

        // setIsPlaying(true);
      }
      updatingSlider();
    }
  };

  useEffect(() => {
    function randomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 8)];
      }
      setColor(color);
    }
    randomColor();
  }, [trackId]);

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

  function share() {
    if (trackSong) {
      const options = {
        url: trackSong?.preview_url,
      };
      Share.open(options)
        .then(res => {
          console.log('Shared successfully:', res);
        })
        .catch(err => {
          if (err) {
            console.log('Error sharing:', err);
          }
        });
    } else {
      Alert.alert('Error', 'No track information available for sharing');
    }
  }

  const handleNextTrack = () => {
    const nextIndex = currIndex + 1;
    if (playList && nextIndex < playList.length) {
      setCurrIndex(nextIndex);
      getSongs(playList[nextIndex].id);
      setPosition(0);
      setIsPlaying(false);
    } else {
      console.log('Reached end of playlist');
    }
  };

  const shuffleTracks = () => {
    const randomIndex = Math.floor(Math.random() * playList?.length);
    if (randomIndex < playList.length) {
      setCurrIndex(randomIndex);
      getSongs(playList[randomIndex].id);
      setIsPlaying(false);
    } else {
      console.log('Reached end of playlist');
    }
  };

  const handlePreviousTrack = () => {
    const nextIndex = currIndex - 1;
    if (playList && nextIndex < playList.length) {
      setCurrIndex(nextIndex);
      getSongs(playList[nextIndex].id);
      setIsPlaying(false);
    } else {
      console.log('Reached end of playlist');
    }
  };

  useEffect(() => {
    getSongs(trackId);
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
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.headerSongName}>
            "{trackSong?.name}" in Songs
          </Text>
        </View>
        <View style={styles.ImageContainer}>
          <Image style={styles.ImageStyle} source={image.ArtistProfile} />
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
          <Icons source={image.Shuffle} onPress={shuffleTracks} />
          <Icons
            style={{height: 30, width: 25}}
            source={image.PreviousPlay}
            onPress={handlePreviousTrack}
          />

          <Icons
            style={{height: 70, width: 70}}
            source={isPlaying ? image.Pause : image.WhitePlayButton}
            onPress={songHandler}
          />
          <Icons
            style={{height: 30, width: 25}}
            source={image.NextPlay}
            onPress={handleNextTrack}
          />
          <Icons source={image.Loop} />
        </View>

        <View style={styles.optionsContainer}>
          <Icons style={{height: 30, width: 30}} source={image.Cast} />
          <Icons
            style={{height: 20, width: 20}}
            source={image.Share}
            onPress={share}
          />
        </View>
        <View style={[styles.lyrics, {backgroundColor: color}]}>
          <Text style={styles.lyricsHeading}>Lyrics</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
