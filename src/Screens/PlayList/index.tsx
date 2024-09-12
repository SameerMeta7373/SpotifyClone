import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {image} from '../../Components/image';
import colors from '../../Utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import ListCard from '../../Components/List/PlayList/PlayList';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

function PlayList() {
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
                paddingTop: 14,
                color: '#A8A8A8',
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
            <View style={{height: 1050}}>
              <ListCard
                onPress={() => {
                  navigation.navigate('MusicPlayer');
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
