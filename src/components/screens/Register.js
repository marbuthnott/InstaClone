import React, { Component } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"

class Register extends Component {

  constructor() {
    super()
    this.state = {
      credentials: {
        email: "",
        password: ""
      }
    }
  }

  updateText(text, field) {
    let newCredentials = Object.assign(this.state.credentials)
    newCredentials[field] = text
    // this.setState({
    //   credentials: newCredentials
    // })
  }

  register() {
    alert(JSON.stringify(this.state.credentials))
  }

  render() {
    return (
      <View 
        style={ styles.screen }
      >
        
        <Text>Register Page</Text>
        <TextInput
          value={this.state.login}
          onChangeText={(text) => this.updateText(text, 'email')}
          placeholder="EMAIL"
          style={styles.input}
          autoCorrect={false}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(text) => this.updateText(text, 'password')}
          placeholder="PASSWORD"
          style={[styles.input, {marginBottom: 20}]}
          autoCorrect={false}
          secureTextEntry
        />
        <Button title="SignUp" onPress={() => this.register()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    height: 100+"%",
    width: 100+"%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(204,243,224)"
  },

  input: {
    height: 40,
    width: 50 + "%",
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 20,
    backgroundColor: "rgb(255,255,255)"
  }
})

export default Register