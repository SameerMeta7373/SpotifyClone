import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  upperConatiner: {
    justifyContent: 'center',
    padding : 20,
    flexDirection : 'row',
    alignItems: 'center',
  },
  songDescription: {
    fontSize: 17,
    color: colors.primaryGrey,
    paddingBottom: 20,
  },
  lowerContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  imageStyle: {
    width: 35,
    height: 35,
    margin: 5,
  },
  pressed : {
    opacity : 0.75
},
  properties: {
    resizeMode: 'contain',
    height: 35,
    width: 70,
    margin: 10,
  },
  playButton: {
    height: 60,
    width: 60,
  },
  linearGradient: {
    flex: 1,
  },
  iconRootcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
