import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import config from "../../config";
import faker from 'faker'

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      likedHeartSource: false,
      screenWidth: Dimensions.get('window').width
    }
  }

  likeToggle = () => {
    this.setState({
      liked: !this.state.liked
    })
  }
  heartSource = () => {
    this.setState({
      likedHeartSource: !this.state.likedHeartSource
    })
  }

  handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
      this.likeToggle();
      this.heartSource()
    } else {
      this.lastTap = now;
    }
  }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1)
    const imageUri = "https://lh3.googleusercontent.com/KJeCE4WgynNio0Y6E2q1lNpXlQI-Tk5RWT_uqz1w2P8l2QcjTzFFC6h8zmr7Bdbrw20QADBD6ysjbLGEG0g9G9YFeA" + "=s" + imageHeight + '-c'
    const avatarUri = 'https://lh3.googleusercontent.com/PreNw8fQYmBjaVj22eEJed5QYu_DGntRlUVQ1EcnvKDKCrk6CfM20bE1BzOiT_OB6J44CO43ID6jSlKQxQXD93AFnA'
    const heartIconColor = (this.state.liked) ? 'rgb(229, 76, 71)' : null;
    const heartIconSource = (this.state.likedHeartSource) ? config.images.filledHeart : config.images.heartIcon
    const lastTap = null;

    return (
      <View style={{ flex: 1, width: 100 + '%' }}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={styles.imageStyle}
              source={{ uri: avatarUri }} />
            <Text> Mike Janes </Text>
          </View>
          <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 32 }}>...</Text></View>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            this.handleDoubleTap()
          }}>
          <Image
            style={{ width: this.state.screenWidth, height: 405 }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>

        <View style={styles.iconBar}>
          <TouchableOpacity onPress={() => {
            this.likeToggle()
            this.heartSource()
          }}>
            <Image style={[styles.icon, { width: 32, height: 32, tintColor: heartIconColor }]} source={heartIconSource} />
          </TouchableOpacity>

          <Image style={[styles.icon, { width: 29, height: 29 }]} source={config.images.chatIcon} />
          <Image style={[styles.icon, { width: 30, height: 30 }]} source={config.images.forwardIcon} />
        </View>

        <View style={[styles.commentBar, { alignItems: 'flex-start' }]}>
          <Image style={[styles.icon, { width: 12, height: 12, marginLeft: 10 }]} source={config.images.filledHeart} />
          <Text style={{ fontSize: 10, marginTop: 5 }}>341 Likes</Text>
        </View>
      </View>
    );
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
  },
  userBar: {
    width: 100 + '%',
    height: config.staticStyles.rowHeight,
    backgroundColor: 'rgb(255, 255, 255)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  iconBar: {
    width: 100 + '%',
    height: config.staticStyles.rowHeight,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(250, 250, 250)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6
  },
  icon: {
    margin: 6
  },
  commentBar: {
    width: 100 + '%',
    height: config.staticStyles.rowHeight,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(250, 250, 250)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row'
  }
});
export default Post;
