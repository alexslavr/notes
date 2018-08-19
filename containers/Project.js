import React, { Component } from 'react';
import { NoteList } from '../components/NoteList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux/actions'

export class Project extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name', '')
  })

  removeNote = noteId => {
    const { projectId, removeNote } = this.props
    removeNote(projectId, noteId)
  }

  navigateNote = noteId => {
    const { projectId, navigation } = this.props
    navigation.navigate('Note', { noteId, projectId })
  }

  render() {
    const { project } = this.props
    return (
      <NoteList
        notes={project.notes}
        onNavigateNote={this.navigateNote}
        onRemoveNote={this.removeNote}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { projectId } = ownProps.navigation.state.params
  const project = state.projects.find(project => projectId === project.id)
  return {
    projectId,
    project
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Project)