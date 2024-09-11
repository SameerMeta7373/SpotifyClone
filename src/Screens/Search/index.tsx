import {StyleSheet, Text, View} from 'react-native';
import colors from '../../Utils/colors';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {HomeTitle} from '../../Components/Title/HomeTitle';
import {SearchCard} from '../../Components/SearchCards/SearchCards';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './style';

const DATA = [
  {
    title: 'Your Top Genres',
    data: [
      'Pop',
      'Rock',
      'Hip-Hop',
      'Jazz',
      'Classical',
      'Electronic',
      'Country',
      'Reggae',
    ],
  },
  {
    title: 'Browse All',
    data: [
      'Charts',
      'Podcasts',
      'Concerts',
      'New Releases',
      'Top 10',
      'Made for You',
      'Live Events',
      'Discover',
      'Workout',
      'Mood',
      'Chill',
    ],
  },
];
const SearchScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.rootContainer}>
        <View>
          <HomeTitle children="Search" style={{fontSize: 40}} />
        </View>
        <View>
          <SearchBar placeholder="Artist, songs, or podcasts" />
        </View>
        <HomeTitle children="Your top genres" />
        <View style={styles.card}>
          <SearchCard children="Pop" />
          <SearchCard children="Bollywood" />
        </View>
        <HomeTitle children="Browse all" />
        <View style={styles.card}>
          <SearchCard children="podcasts" />
          <SearchCard children="New Releases" />
        </View>
        <View style={styles.card}>
          <SearchCard children="Charts" />
          <SearchCard children="Concerts" />
        </View>
        <View style={styles.card}>
          <SearchCard children="Made for you" />
          <SearchCard children="At Home" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SearchScreen;
