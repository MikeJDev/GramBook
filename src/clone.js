import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PostFeed } from './components/container'


class Clone extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.nav}>
          <Text style={styles.navText}>Instagram</Text>
        </View>
        <PostFeed />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    width: 100 + "%",
    height: 75,
    backgroundColor: "rgb(250, 250, 258)",
    borderBottomColor: 'rgb(250, 250, 250)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navText: {
    marginTop: 30
  }
})
export default Clone;
