import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Alert, View, SwipeableFlatList } from 'react-native';
import { NoteListItem } from './NoteListItem'
import { RemoveButton } from './Buttons'

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
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <RemoveButton onPress={() => this.removeNote(item.id)} />
    </View>
  )

  renderItem = ({ item }) => {
    const { onNavigateNote } = this.props
    return (
      <NoteListItem note={item} onNavigateNote={onNavigateNote} onRemoveNote={this.removeNote} />
    )
  }

  render() {
    const { notes } = this.props

    return (
      <SwipeableFlatList
        data={notes}
        bounceFirstRowOnMount={false}
        keyExtractor={item => item.id}
        maxSwipeDistance={60}
        renderQuickActions={this.renderDeleteButton}
        renderItem={this.renderItem}
      />
    )
  }
}