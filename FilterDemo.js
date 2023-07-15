import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

class FilterDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      books: [],
      filteredBooks: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ books: data, filteredBooks: data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateSearch = (query) => {
    const { books } = this.state;

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    this.setState({ searchQuery: query, filteredBooks });
  };

  render() {
    const { searchQuery, filteredBooks } = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search..."
          onChangeText={this.updateSearch}
          value={searchQuery}
        />
        <FlatList
          data={filteredBooks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FilterDemo;
