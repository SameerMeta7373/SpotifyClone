import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {image} from '../../Components/image';
import colors from '../../Utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import {PlayFlatList} from '../../Components/List/PlayList';

function PlayList() {
  return (
    <LinearGradient
      colors={['#52534E', '#272725', '#121212']}
      style={styles.linearGradient}>
      <View>
        <View style={styles.upperConatiner}>
          <Image
            style={{height: 300, width: 280}}
            source={image.ArtistProfile}
          />
        </View>
        <View style={styles.lowerContainer}>
          <Text style={styles.songDescription}>
            Tune in to Top Tracks from Imagine Dragons, Alan Walker and many
            more
          </Text>
          <Image
            style={{height: 30, width: 100}}
            source={image.SpotifySmallLogo}
          />
          <Text
            style={{
              fontSize: 18,
              paddingTop: 8,
              color: colors.primaryGrey,
              paddingBottom: 20,
            }}>
            191,165 likes . 3h 45min
          </Text>
          <View style={styles.iconRootcontainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image style={styles.imageStyle} source={image.Heart} />
              <Image style={styles.properties} source={image.Properties} />
            </View>
            <View style={{paddingRight: 6}}>
              <Image style={styles.playButton} source={image.PlayButton} />
            </View>
          </View>
          <PlayFlatList />
        </View>
      </View>
    </LinearGradient>
  );
}

export default PlayList;
