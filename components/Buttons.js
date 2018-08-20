import React, { Component } from 'react';
import Icon from '@expo/vector-icons/Ionicons'
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  addButton: {
    height: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center'
  },

  removeButton: {
    width: 60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export class Button extends Component {
  render() {
    const { children, style, onPress } = this.props
    return (
      <TouchableOpacity style={style} activeOpacity={0.8} onPress={onPress}>
        {children}
      </TouchableOpacity>
    )
  }
}

export class AddButton extends Component {
  render() {
    return (
      <Button style={styles.addButton} onPress={this.props.onPress}>
        <Icon name="md-add" size={32} color='white' />
      </Button>
    )
  }
}

export class MoreButton extends Component {
  render() {
    const { style, onPress } = this.props
    return (
      <Button style={style} onPress={onPress}>
        <Icon name="md-more" size={32} color='black' />
      </Button>
    )
  }
}

export class RemoveButton extends Component {
  render() {
    const { style, onPress } = this.props
    return (
      <Button style={styles.removeButton} onPress={onPress}>
        <Icon name="md-trash" size={32} color='red' />
      </Button>
    )
  }
}