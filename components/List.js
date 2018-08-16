import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native';
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

export class List extends Component {
  renderItem = ({ item, index }) => (
    <TouchableOpacity key={item.name} onPress={() => this.props.navigation.navigate('Project', { index })}>
      <View style={styles.project} >
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )

  render() {
    const { list, navigation } = this.props
    return (
      <FlatList
        data={list}
        keyExtractor={item => item.name}
        renderItem={this.renderItem}
      />
    )
  }
}

export default connect(
  state => ({
    list: state
  })
)(List)