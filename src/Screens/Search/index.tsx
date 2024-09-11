import {SectionList, StyleSheet, Text, View} from 'react-native';
import colors from '../../Utils/colors';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {HomeTitle} from '../../Components/Title/HomeTitle';
import {SearchCard} from '../../Components/SearchCards/SearchCards';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './style';

const DATA = [
  {
    title: 'Your top genres',
    data: ['Pop', 'Bollywood'],
  },
  {
    title: 'Browse all',
    data: [
      'Charts',
      'Podcasts',
      'Concerts',
      'New Releases',
      'Top 10',
      'Made for You',
      'Live Events',
      'Discover',
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
        <SectionList
          sections={DATA}
          renderItem={({item}) => <SearchCard children={item} />}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.sectionHeader}>
              <HomeTitle children={title} />
            </View>
          )}
          keyExtractor={(item, index) => item + index.toString()}
          style={styles.sectionList}
          // contentContainerStyle={styles.contentContainer}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SearchScreen;
