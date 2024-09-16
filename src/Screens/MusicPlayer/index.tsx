import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {image} from '../../Components/image';
import Icons from '../../Components/ImageIcons/Icons';
import {ScrollView} from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import colors from '../../Utils/colors';
import {useState} from 'react';
import {styles} from './style';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  function Song() {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  }
  function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
  }

  return (
    <ScrollView>
      <LinearGradient
        colors={['#5E5A4F', '#35322D', '#1D1C1A']}
        style={{flex :1}}>
        <View style={{alignSelf: 'center', paddingVertical: 8}}>
          <Text style={styles.rootHeader}>PLAYING FROM SEARCH</Text>
          <Text style={styles.headerSongName}>“stay” in Songs</Text>
        </View>
        <View style={styles.ImageContainer}>
          <Image style={styles.ImageStyle} source={image.StayPoster} />
        </View>
        <View style={styles.songNameContainer}>
          <View style={{width: 300, marginHorizontal: 20}}>
            <Text style={styles.songName}>STAY (with Justin Bieber)</Text>
            <Text style={styles.singerName}>The Kid LAROI, Justin Bieber</Text>
          </View>
          <Icons source={image.Heart} />
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor={colors.primaryWhite}
          minimumTrackTintColor={colors.primaryWhite}
          maximumTrackTintColor="grey"
        />
        <View style={styles.songControllContainer}>
          <Icons source={image.Shuffle} />
          <Icons style={{height: 30, width: 25}} source={image.PreviousPlay} />

          <Icons
            style={{height: 70, width: 70}}
            source={isPlaying ? image.Pause : image.WhitePlayButton}
            onPress={Song}
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
