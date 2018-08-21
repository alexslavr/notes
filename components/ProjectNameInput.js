import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'white'
  },
  input: {
    fontSize: 16
  }
})

export class ProjectNameInput extends Component {
  render() {
    const { onSubmitEditing } = this.props
    return (
      <View style={styles.container}>
        <TextInput
          autoFocus
          placeholder="Type project name here ..."
          placeholderTextColor="gray"
          underlineColorAndroid="transparent"
          onSubmitEditing={e => onSubmitEditing(e.nativeEvent.text)} />
      </View>
    )
  }
}