import React, { Component } from 'react';
import { StyleSheet, TextInput, Keyboard, View } from 'react-native';
import { SaveButton } from "./Buttons";

const SAVE_BUTTON_BOTTOM_PADDING = 20

const styles = StyleSheet.create({
  note: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 20
  },

  noteText: {
    fontSize: 16
  },

  saveButton: {
    position: 'absolute',
    right: 30,
    bottom: SAVE_BUTTON_BOTTOM_PADDING
  }
})

export class NoteDetail extends Component {
  state = {
    keyboardHeight: 0,
    noteText: ''
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = e => {
    this.setState({ keyboardHeight: e.endCoordinates.height })
  }

  keyboardDidHide = () => {
    this.setState({ keyboardHeight: 0 })
  }

  onChangeText = text => {
    this.setState({ noteText: text })
  }

  onSave = () => {
    this.props.onEditNote(this.state.noteText)
    Keyboard.dismiss()
  }

  render() {
    const { note } = this.props
    const { noteText, keyboardHeight } = this.state

    const inputValue = noteText || note.text

    return (
      <View style={styles.note}>
        <TextInput
          style={[styles.noteText, { paddingBottom: keyboardHeight } ]}
          multiline
          value={inputValue}
          placeholder="Type note text here ..."
          underlineColorAndroid="transparent"
          onChangeText={this.onChangeText}
        />
        <SaveButton
          style={[styles.saveButton, { bottom: keyboardHeight + SAVE_BUTTON_BOTTOM_PADDING}]}
          onPress={this.onSave} />
      </View>
    )
  }
}