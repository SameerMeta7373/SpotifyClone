import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {HomeTitle} from '../../Components/Title/HomeTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './style';
import {SList} from '../../Components/List/sectionList';
import {useEffect, useState} from 'react';
import {Apis} from '../../Utils/https';

const SearchScreen = () => {
  const [categories, setCategories] = useState([]);
  const [genres, setGenres] = useState([]);

  const Categories = async () => {
    const response = await Apis.getCategories();
    setCategories(response.categories.items || []);
  };
  const Genres = async () => {
    const response = await Apis.getGenres();
    setGenres(response.genres || []);
  };

  useEffect(() => {
    Categories();
    Genres();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={styles.rootContainer}>
        <View>
          <HomeTitle children="Search" style={{fontSize: 40}} />
        </View>
        <View>
          <SearchBar placeholder="Artist, songs, or podcasts" />
        </View>
        <SList categories={categories} genres={genres} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SearchScreen;
