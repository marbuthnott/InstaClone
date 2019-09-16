import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import config from '../../config'

class Post extends Component {
  constructor() {
    super()
    this.state = {
      screenWidth: Dimensions.get("window").width,
      liked: false
    }
  }

  likeToggled() {
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1)
    const imageSelection = 
      this.props.item % 2 === 0
      ? "https://lh3.googleusercontent.com/EDH0XcPDakrfIbRSPJ1hQ_DO7syD39qYgXP8xPWGOYG_68oXMaiUoOYXgY45CrLPQEpvYPW8B4ZtHIReSFQTrgerTg"
      : "https://lh3.googleusercontent.com/bFJ0PxL_H7ZeCJxQDRfOIe3qJBXaibjEVNc73lNV1NlPb6VXxyZcdAB9Gxg33L5oeLxg4ZJRpRExIooZVgXWjmlP9Q" 
    const imageURI =
      imageSelection +
      "=s" +
      imageHeight +
      "-c"
    const heartIconColor = (this.state.liked) ? "rgb(252,61,57)" : null

    return(
      <View style={{ flex: 1, width: 100 + "%" }}>
        <View style={styles.userBar} >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
              source={{ uri: "https://lh3.googleusercontent.com/0mZ8AwG0RzP89gab2kMgVzYr2EUEB6gaCFZNbHjdJXE2AWtKRrvcLb3RUu6QCDZWdc7fpZd-SYGG9RHGnOJX5UZS8Q" }}
            />
            <Text style={{ marginLeft: 10 }}>marbuthnott</Text>
          </View>
          <View style={{ marginRight: 20, flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ width: 17, height: 17 }}
              source={config.images.menuDots}
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            this.likeToggled()
          }}
        >
          <Image
            style={{ width: this.state.screenWidth, height: 450 }}
            source={{ uri: imageURI }}
          />
        </TouchableOpacity>

        <View style={styles.iconBar}>
          <Image style={[styles.icon, {tintColor: heartIconColor} ]} source={config.images.heartIcon}/>
          <Image style={styles.icon} source={config.images.commentIcon}/>
          <Image style={styles.icon} source={config.images.paperPlaneIcon}/>
        </View>

        <View style={styles.iconBar}>
          <Text style={{ marginHorizontal: 10 }}>128 Likes</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 38,
    marginTop: 10,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },

  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingLeft: 9,
    justifyContent: "space-between"
  },
  
  userPic: {
    width: 30,
    height: 30,
    borderRadius: 20
  },

  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderColor: "rgb(233,233,233)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },

  icon: {
    width: 27,
    height: 27,
    marginHorizontal: 10
  }
})

export default Post