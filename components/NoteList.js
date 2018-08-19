import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Alert, Text, View, SwipeableFlatList, TouchableOpacity } from 'react-native';
import { NoteListItem } from "./NoteListItem";

const DeleteButton = ({ onPress }) => (
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <TouchableOpacity style={{ width: 60, height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={onPress}>
        <Text style={{ color: 'red' }}>{'X'}</Text>
      </TouchableOpacity>
    </View>
)

export class NoteList extends Component {
  static propTypes = {
    notes: PropTypes.array,
    onRemoveNote: PropTypes.func,
    onNavigateNote: PropTypes.func
  }

  removeNote = noteId => {
    Alert.alert(
      'Remove Note',
      'Do you want to remove note ?',
      [
        { text: 'Cancel', onPress: () => {}},
        { text: 'Remove', onPress: () => this.props.onRemoveNote(noteId) }
      ]
    )
  }

  renderDeleteButton = ({ item }) => (
    <DeleteButton onPress={() => this.removeNote(item.id)} />
  )

  renderItem = ({ item }) => (
    <NoteListItem note={item} />
  )

  render() {
    const { notes } = this.props

    return (
      <SwipeableFlatList
        data={notes}
        keyExtractor={item => item.id}
        maxSwipeDistance={60}
        renderQuickActions={this.renderDeleteButton}
        renderItem={this.renderItem}
      />
    )
  }
}