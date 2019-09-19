import React, { Component } from "react"
// import AppNavigator from "./components/navigation/MainTabNavigator"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { MainFeed, Profile, Camera, Login, Register } from "./components/screens"

const TabNavigator = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
})

const IntroStack = createStackNavigator({
  login: Login,
  register: Register
})

const AppNavigator = createAppContainer(TabNavigator)

class InstaClone extends Component {

  render() {
    return (
      <AppNavigator/>
    )
  }
}

export default InstaClone