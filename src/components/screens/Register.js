import React, { Component } from "react"
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native"

class Register extends Component {

  register() {
    this.props.navigation.navigate('feed')
  }

  render() {
    return (
      <View style={ styles.screen }
        onPress={() => {
          this.register()
        }}
      >
        
        <Text>Register Page</Text>
        <TextInput
          placeholder="USERNAME"
          style={styles.input}
        />
        <TextInput
          placeholder="PASSWORD"
          style={[styles.input, {marginBottom: 20}]}
          secureTextEntry
        />
        <Button title="SignUp" onPress={() => Alert.alert('Simple Button pressed')}/>
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