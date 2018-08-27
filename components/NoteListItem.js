import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Image, Text, View, Platform, ActionSheetIOS, UIManager, findNodeHandle } from 'react-native';
import { MoreButton } from './Buttons'

const styles = StyleSheet.create({
  note: {
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    paddingVertical: 20,
    paddingHorizontal: 15,
    maxHeight: 150
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
  },

  button: {
    position: 'absolute',
    right: 0,
    top: 20,
    width: 30,
    height: 30,
    justifyContent: 'center'
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
    onNavigateNote: PropTypes.func,
  }

  onPressMenu = index => {
    const { note, onNavigateNote, onRemoveNote } = this.props
    switch (index) {
      case 0:
        return onNavigateNote(note.id)
      case 1:
        return onRemoveNote(note.id)
    }
  }

  showActionSheet = options => {
    ActionSheetIOS.showActionSheetWithOptions({ options, destructiveButtonIndex: 1 }, this.onPressMenu)
  }

  showPopupMenu = options => {
    const button = findNodeHandle(this._buttonRef)
    UIManager.showPopupMenu(button, options, (e) => console.error(e), (e, i) => this.onPressMenu(i))
  }

  onOpenMenu = () => {
    const options = [ 'Edit', 'Delete' ]

    Platform.select({
      ios: this.showActionSheet(options),
      android: this.showPopupMenu(options)
    })
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
        <MoreButton ref={ref => this._buttonRef = ref} style={styles.button} onPress={this.onOpenMenu} />
      </View>
    )
  }
}