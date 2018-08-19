import React, { Component } from 'react';
import { NoteDetail } from '../components/NoteDetail'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux/actions'

export class Note extends Component {
  editNote = (noteId, text) => {
    this.props.editNote(noteId, text)
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { note } = this.props
    return (
      <NoteDetail
        note={note}
        onEditNote={this.editNote}
        onGoBack={this.goBack}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { noteId, projectId } = ownProps.navigation.state.params
  const project = state.find(project => project.id === projectId)
  const note = project.notes.find(note => note.id === noteId)

  return {
    noteId,
    projectId,
    note
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Note)