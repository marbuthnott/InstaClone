import React, { Component } from "react"
// import AppNavigator from "./components/navigation/MainTabNavigator"
import { createAppContainer } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { MainFeed, Login } from "./components/screens"

const TabNavigator = createBottomTabNavigator({
  login: Login,
  feed: MainFeed
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