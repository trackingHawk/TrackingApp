import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TouchableWithoutFeedback, Image, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
      sidebarAnimation: new Animated.Value(-250), // Initial position of the sidebar
    };
  }

  handleToggleSidebar = () => {
    const { isSidebarOpen } = this.state;
    Animated.timing(this.state.sidebarAnimation, {
      toValue: isSidebarOpen ? -250 : 0, // Open or close the sidebar based on its current state
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: false,
    }).start();
    

    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  handleSidebarItemClick = (item) => {
    // Handle sidebar item click
    console.log(`Clicked: ${item}`);
  };

  handleContentPress = () => {
    // Close the sidebar when clicking outside of it
    if (this.state.isSidebarOpen) {
      this.handleToggleSidebar();
    }
  };

  handleSidebarPress = (e) => {
    // Prevent hiding the sidebar when clicking inside it
    e.stopPropagation();
  };

  render() {
    const { isSidebarOpen, sidebarAnimation } = this.state;

    const sidebarStyle = {
      transform: [{ translateX: sidebarAnimation }],
    };

    return (
      <TouchableWithoutFeedback onPress={this.handleContentPress}>
        <View style={styles.container}>
          {/* Main Content */}
          <View style={styles.mainContent}>
            {/* Top Bar */}
            <View style={styles.topBar}>
              <TouchableOpacity onPress={this.handleToggleSidebar}>
                <Icon name="menu" size={30} color="#fff" />
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 40 }}>
                <Image source={require('../assets/trackinghawk.png')} style={styles.topBarLogo} />
                <Text style={styles.title}>TrackingHAWK</Text>
              </View>
            </View>

            {/* Content */}
            <View style={styles.content}>
              {/* Your main content goes here */}
              <Text>Content goes here</Text>
            </View>

            {/* Sidebar */}
            {isSidebarOpen && (
              <TouchableWithoutFeedback onPress={this.handleSidebarPress}>
                <Animated.View style={[styles.sidebar, sidebarStyle]}>
                  <TouchableOpacity style={styles.closeButton} onPress={this.handleToggleSidebar}>
                    <Icon name="close" size={30} color="black" />
                  </TouchableOpacity>
                  <View style={styles.logoContainer}>
                    <Image source={require('../assets/Eagle.png')} style={styles.logo} />
                  </View>
                  <TouchableOpacity
                    style={[styles.sidebarItem, styles.firstSidebarItem]}
                    onPress={() => this.handleSidebarItemClick('Home')}
                  >
                    <Icon name="home" size={20} color="black" />
                    <Text style={styles.sidebarItemText}>Home</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.sidebarItem}
                    onPress={() => this.handleSidebarItemClick('Profile')}
                  >
                    <Icon name="person" size={20} color="black" />
                    <Text style={styles.sidebarItemText}>Profile</Text>
                  </TouchableOpacity>

                  {/* Add more sidebar items as needed */}
                  <TouchableOpacity
                    style={styles.sidebarItem}
                    onPress={() => this.handleSidebarItemClick('Settings')}
                  >
                    <Icon name="settings" size={20} color="black" />
                    <Text style={styles.sidebarItemText}>Settings</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.sidebarItem}
                    onPress={() => this.handleSidebarItemClick('Logout')}
                  >
                    <Icon name="logout" size={20} color="black" />
                    <Text style={styles.sidebarItemText}>Logout</Text>
                  </TouchableOpacity>
                </Animated.View>
              </TouchableWithoutFeedback>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    position: 'relative',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#231875',
    height: 60,
  },
  topBarLogo: {
    width: 70,
    height: 60,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#55AB67', // Set your desired background color
    padding: 16,
  },
  logoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
  },
  firstSidebarItem: {
    marginTop: 45,
  },
  sidebarItemText: {
    marginLeft: 10,
    fontSize: 20,
    color: 'black',
  },
});

export default Sidebar;
