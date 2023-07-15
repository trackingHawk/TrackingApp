import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import MainScreen from './MainScreen';

// import NewLogin from './NewLogin';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashVisible: true,
    };
  }

  componentDidMount() {
    // Simulate a delay to show the splash screen for a few seconds
    setTimeout(() => {
      this.setState({ splashVisible: false });
    }, 4000); // Adjust the duration as needed
  }

  navigationHandler = () => {

  }

  render() {
    const { splashVisible } = this.state;
    // console.warn(this.props);
    return (
      <>
        {splashVisible && (
          <View style={styles.container}>
            <Image
              source={require('../assets/splash2.gif')}
              style={styles.image}
            />
            
          </View>
        )}
        {!splashVisible && <MainScreen sObject={this} />}
      </>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 900,
    height: 900,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
export default App;
