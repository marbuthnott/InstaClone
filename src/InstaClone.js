import React, { Component } from "react"
// import AppNavigator from "./components/navigation/MainTabNavigator"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { MainFeed, Profile, Camera, Login, Register } from "./components/screens"

const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
})

const IntroStack = createStackNavigator({
  register: Register,
  login: Login

})

const MainStack = createSwitchNavigator({
  login: IntroStack,
  main: Tabs
})

const AppNavigator = createAppContainer(MainStack)

class InstaClone extends Component {

  render() {
    return (
      <AppNavigator/>
    )
  }
}

export default InstaClone