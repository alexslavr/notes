import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

export class NoteDetail extends Component {

  render() {
    const { note } = this.props
    return (
      <View style={styles.note}>
        <Text style={styles.noteText}>{note.text}</Text>
      </View>
    )
  }
}