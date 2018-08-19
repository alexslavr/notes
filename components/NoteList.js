import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, SwipeableFlatList, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  project: {
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    paddingVertical: 20,
    paddingHorizontal: 15
  },
  name: {
    fontSize: 16
  }
})

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

  renderDeleteButton = ({ item }) => (
    <DeleteButton onPress={() => this.props.onRemoveNote(item.id)} />
  )

  renderItem = ({ item }) => (
    <View style={styles.project}>
      <Text style={styles.name}>{item.userName}</Text>
      <Text style={styles.name}>{item.editTime}</Text>
      <Text style={styles.name}>{item.text}</Text>
    </View>
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