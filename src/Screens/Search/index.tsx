import {StyleSheet, Text, View} from 'react-native';
import colors from '../../Utils/colors';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {HomeTitle} from '../../Components/Title/HomeTitle';
import {SearchCard} from '../../Components/SearchCards/SearchCards';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './style';
import {SList} from '../../Components/List/sectionList';

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
        <SList />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SearchScreen;
