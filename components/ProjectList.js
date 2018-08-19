import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native';

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

export class ProjectList extends Component {
  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.onNavigateProject(item.id, item.name)}>
      <View style={styles.project} >
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )

  render() {
    const { projects } = this.props
    return (
      <FlatList
        data={projects}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
      />
    )
  }
}