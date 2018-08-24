import React, { PureComponent } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native';

const styles = StyleSheet.create({
  project: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray'
  },
  name: {
    fontSize: 16
  }
})

export class ProjectListItem extends PureComponent {
  onPressProject = () => {
    const { project, onPressProject } = this.props
    onPressProject(project)
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPressProject}>
        <View style={styles.project}>
          <Text style={styles.name}>{this.props.project.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export class ProjectList extends PureComponent {
  renderItem = ({ item }) => (
    <ProjectListItem
      project={item}
      onPressProject={this.props.onPressProject}
    />
  )

  render() {
    return (
      <FlatList
        data={this.props.projects}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
      />
    )
  }
}