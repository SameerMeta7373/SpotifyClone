import {SectionList, View} from 'react-native';

import {SearchCard} from '../SearchCards/SearchCards';
import {HomeTitle} from '../Title/HomeTitle';
import {styles} from '../../Screens/Search/style';

export function SList() {
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
