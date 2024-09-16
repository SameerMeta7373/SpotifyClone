import {SectionList, View} from 'react-native';

import {SearchCard} from '../SearchCards/SearchCards';
import {HomeTitle} from '../Title/HomeTitle';
import {styles} from '../../Screens/Search/style';

export function SList({categories, genres}) {
  const catResposne = categories.map(cat => cat.name);
  

  const DATA = [
    {
      title: 'Your top genres',
      data: genres,
    },
    {
      title: 'Browse all',
      data: catResposne,
    },
  ];
  return (
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
      contentContainerStyle={styles.contentContainer}
    />
  );
}
