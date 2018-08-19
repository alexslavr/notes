import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Image, Text, View } from 'react-native';

const styles = StyleSheet.create({
  note: {
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    paddingVertical: 20,
    paddingHorizontal: 15
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  info: {
    paddingLeft: 15,
    paddingRight: 30
  },

  name: {
    fontSize: 16
  }
})

export class NoteListItem extends Component {
  static propTypes = {
    note: PropTypes.shape({
      userName: PropTypes.string,
      avatar: PropTypes.any,
      editTime: PropTypes.string,
      text: PropTypes.string
    }),

    onRemoveNote: PropTypes.func,
    onNavigateNote: PropTypes.func
  }

  render() {
    const { userName, avatar, editTime, text } = this.props.note

    return (
      <View style={styles.note}>
        <View style={styles.title}>
          <Image style={styles.avatar} source={avatar} />
          <View style={styles.info}>
            <Text style={styles.name}>{userName}</Text>
            <Text style={styles.name}>{editTime}</Text>
          </View>
        </View>
        <Text style={styles.name}>{text}</Text>
      </View>
    )
  }
}