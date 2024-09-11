import React, {FC, useState} from 'react';
import {View, TextInput, Button, StyleSheet, Image} from 'react-native';
import {ISearchBar} from '../../Constants/interface';
import {image} from '../image';
import colors from '../../Utils/colors';
import {styles} from './style';

const SearchBar: FC<ISearchBar> = ({placeholder, onSearch}) => {
  const [item, setItem] = useState('');

  const handleSearch = (text: string) => {
    setItem(text);
    if (onSearch) {
      onSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={image.SearchBlack} />
      <TextInput
        style={styles.input}
        value={item}
        placeholderTextColor={colors.primaryGrey}
        placeholder={placeholder}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchBar;
