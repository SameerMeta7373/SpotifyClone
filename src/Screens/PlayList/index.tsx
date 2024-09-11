import {Image, StyleSheet, Text, View} from 'react-native';
import {image} from '../../Components/image';
import colors from '../../Utils/colors';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

function PlayList() {
  return (
    <LinearGradient
      colors={['#565b64', '#1f1d1d', '#0f0f0f']}
      style={styles.linearGradient}>
      <View>
        <View
          style={{
            paddingHorizontal: 50,
            paddingVertical: 10,
            backgroundColor: 'brown',
          }}>
          <Image
            style={{height: 350, width: 300}}
            source={image.ArtistProfile}
          />
        </View>
        <View
          style={{backgroundColor: 'blue', width: '95%', alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: 17,
              color: colors.primaryGrey,
              paddingBottom: 10,
            }}>
            Tune in to Top Tracks from Imagine Dragons, Alan Walker and many
            more
          </Text>
          <Image
            style={{height: 30, width: 100}}
            source={image.SpotifySmallLogo}
          />
        </View>
        <View></View>
        <Text> 197likes</Text>
        <View>
          <Image source={image.Heart} />
          <Image source={image.Properties} />
          <Image source={image.PlayButton} />
        </View>

        <View>
          <Image source={image.believer} />

          <Text>ALone</Text>
          <Image source={image.Lyrics} />
          <Text> Alan Walker</Text>
          <Image source={image.PlayButton} />
        </View>
      </View>
    </LinearGradient>
  );
}

export default PlayList;
