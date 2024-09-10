import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Utils/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {HomeTitle} from '../../Components/Title/HomeTitle';
import {Card} from '../../Components/Card/Card';
import {image} from '../../Components/image';
import Icons from '../../Components/ImageIcons/Icons';

function HomeScreen() {
  return (
    <LinearGradient
      colors={['#565b64', '#1f1d1d', '#0f0f0f']}
      style={styles.linearGradient}>
      <ScrollView
        style={styles.rootContainer}
        contentContainerStyle={{paddingHorizontal: 15, paddingBottom: 50}}>
        <View style={styles.titleIcon}>
          <View>
            <View style={styles.titleIcon}>
              <HomeTitle>Made for you</HomeTitle>
              <View style={styles.iconContainer}>
                <Icons source={image.BellLogo} />
                <Icons source={image.HistoryLogo} />
                <Icons source={image.SettingsLogo} />
              </View>
            </View>
            <View>
              <Card source={image.Artist} />
            </View>
            <View>
              <HomeTitle>Trending now</HomeTitle>
              <Card source={image.Artist} />
            </View>
            <View>
              <HomeTitle>Top picks for you</HomeTitle>
              <Card source={image.Artist} />
            </View>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: colors.primaryWhite,
    backgroundColor: 'transparent',
  },
  rootContainer: {
    flex: 1,
    // height: 950,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor : 'red',
    width: 150,
    // padding : 20,
    // justifyContent : 'space-between'
  },
  titleIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default HomeScreen;
