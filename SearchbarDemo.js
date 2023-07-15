import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

const Header = () => {
  const handleToggleSidebar = () => {
    // Handle sidebar toggle functionality
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleSidebar} style={styles.toggleIconContainer}>
        {/* Add your toggle icon image here */}
        <Image source={require('../assets/bars.png')} style={styles.toggleIcon} />
      </TouchableOpacity>
      
      <SearchBar
        placeholder="Search..."
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}
        searchIcon={{ size: 24, color: '#888' }}
        clearIcon={{ size: 24, color: '#888' }}
      />
      <View style={styles.logoContainer}>
        {/* Add your company logo image here */}
        <Image source={require('../assets/trackinghawk.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  toggleIconContainer: {
    marginRight: 10,
  },
  toggleIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  searchBarContainer: {
    flex: 3,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInputContainer: {
    backgroundColor: '#f2f2f2',
    height: '100%',
    borderRadius:105
  },
  searchBarInput: {
    fontSize: 14,
    height: '100%',
  },
});

export default Header;
