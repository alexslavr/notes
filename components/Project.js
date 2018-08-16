import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

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

export class Project extends Component {
  renderItem = ({ item }) => (
    <View style={styles.project}>
      <Text style={styles.name}>{item.userName}</Text>
      <Text style={styles.name}>{item.editTime}</Text>
      <Text style={styles.name}>{item.text}</Text>
    </View>
  )

  render() {
    const { project: { name, notes } } = this.props

    return (
      <FlatList
        data={notes}
        keyExtractor={item => item.name}
        renderItem={this.renderItem}
      />
    )
  }
}

export default connect(
  (state, ownProps) => {
    const { index } = ownProps.navigation.state.params
    return {
      project: state[index]
    }
  }
)(Project)