import {FlatList, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Utils/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {HomeTitle} from '../../Components/Title/HomeTitle';
import {Card} from '../../Components/Card/Card';
import {image} from '../../Components/image';
import Icons from '../../Components/ImageIcons/Icons';
import {styles} from './style';
import {HomeList} from '../../Components/HomeList';

function HomeScreen() {
  const singers = [
    {id: '1', name: 'Ed Shereen', image: image.Artist},
    {id: '2', name: 'Justin Bieber', image: image.Artist},
  ];

  const trendingSongs = [
    {
      id: '1',
      name: 'Song One',
      singer: 'Ed Shereen',
      cover: image.Artist,
    },
    {
      id: '2',
      name: 'Song Two',
      singer: 'Justin Bieber',
      cover: image.Artist,
    },
    {
      id: '12',
      name: 'Song One',
      singer: 'Ed Shereen',
      cover: image.Artist,
    },
    {
      id: '22',
      name: 'Song Two',
      singer: 'Justin Bieber',
      cover: image.Artist,
    },
    // Add more items as needed
  ];

  const topPicksSongs = [
    {
      id: '1',
      name: 'Pick One',
      singer: 'Ed Shereen',
      cover: image.Artist,
    },
    {
      id: '2',
      name: 'Pick Two',
      singer: 'Justin Bieber',
      cover: image.Artist,
    },
    {
      id: '12',
      name: 'Pick One',
      singer: 'Ed Shereen',
      cover: image.Artist,
    },
    {
      id: '22',
      name: 'Pick Two',
      singer: 'Justin Bieber',
      cover: image.Artist,
    },
    // Add more items as needed
  ];

  const renderSingerItem = ({item}) => <Card source={image.Artist} />;

  const renderSongItem = ({item}) => (
    <View style={{flexDirection: 'row', marginBottom: 10}}>
      <Card source={item.cover} />
    </View>
  );

  return (
    <LinearGradient
      colors={['#565b64', '#1f1d1d', '#0f0f0f']}
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
        <HomeList data={singers} renderItem={renderSingerItem} />
        <HomeTitle>Trending now</HomeTitle>
        <HomeList data={trendingSongs} renderItem={renderSongItem} />
        <HomeTitle>Top picks for you</HomeTitle>
        <HomeList data={topPicksSongs} renderItem={renderSongItem} />
      </ScrollView>
    </LinearGradient>
  );
}

export default HomeScreen;
