import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { MainFeed, Login } from "../screens"

const TabNavigator = createBottomTabNavigator({
  login: Login,
  feed: MainFeed
})

// const LoginStack = createStackNavigator({
//     login: Login,
//   }
// )

// LoginStack.navigationOptions = {
//   tabBarLabel: 'login'
// }

// LoginStack.path = ''

// const MainFeedStack = createStackNavigator(
//   {
//     feed: MainFeed,
//   }
// )

// MainFeedStack.navigationOptions = {
//   tabBarLabel: 'feed'
// }

// MainFeedStack.path = ''

// const tabNavigator = createBottomTabNavigator({
//   LoginStack,
//   MainFeedStack
// })

// tabNavigator.path = ''

export default createAppContainer(TabNavigator)
