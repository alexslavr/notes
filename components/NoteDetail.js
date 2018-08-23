import React, { PureComponent } from 'react';
import { StyleSheet, TextInput, Keyboard, View } from 'react-native';

const styles = StyleSheet.create({
  note: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 20
  },

  noteText: {
    fontSize: 16
  }
})

export class NoteDetail extends PureComponent {
  state = {
    keyboardHeight: 0,
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

  render() {
    const { noteText, onChangeNoteText } = this.props
    const { keyboardHeight } = this.state

    return (
      <View style={styles.note}>
        <TextInput
          style={[styles.noteText, { paddingBottom: keyboardHeight } ]}
          multiline
          value={noteText}
          placeholder="Type note text here ..."
          underlineColorAndroid="transparent"
          onChangeText={onChangeNoteText}
        />
      </View>
    )
  }
}