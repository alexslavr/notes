import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Alert, View, SwipeableFlatList } from 'react-native';
import { NoteListItem } from './NoteListItem'
import { RemoveButton } from './Buttons'
import { MAX_SWIPE_DISTANCE } from "../constants";

export class NoteList extends Component {
  static propTypes = {
    notes: PropTypes.array,
    onRemoveNote: PropTypes.func,
    onNavigateNote: PropTypes.func
  }

  onRemoveNote = noteId => {
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
      <RemoveButton onPress={() => this.onRemoveNote(item.id)} />
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
        maxSwipeDistance={MAX_SWIPE_DISTANCE}
        renderQuickActions={this.renderDeleteButton}
        renderItem={this.renderItem}
      />
    )
  }
}