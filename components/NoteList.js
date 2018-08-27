import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NoteType } from './propTypes'
import { Alert, View, SwipeableFlatList } from 'react-native';
import { NoteListItem } from './NoteListItem'
import { RemoveButton } from './Buttons'
import { MAX_SWIPE_DISTANCE } from "../constants";

export class NoteList extends Component {
  static propTypes = {
    notes: PropTypes.arrayOf(NoteType),
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

  renderQuickActions = ({ item }) => (
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <RemoveButton onPress={() => this.onRemoveNote(item.id)} />
    </View>
  )

  renderItem = ({ item }) => {
    const { onNavigateNote } = this.props
    return (
      <NoteListItem
        note={item}
        onNavigateNote={onNavigateNote}
        onRemoveNote={this.onRemoveNote} />
    )
  }

  render() {
    return (
      <SwipeableFlatList
        data={this.props.notes}
        bounceFirstRowOnMount={false}
        keyExtractor={item => item.id}
        maxSwipeDistance={MAX_SWIPE_DISTANCE}
        renderQuickActions={this.renderQuickActions}
        renderItem={this.renderItem}
      />
    )
  }
}