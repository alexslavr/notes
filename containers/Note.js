import React, { PureComponent } from 'react';
import { Keyboard } from 'react-native'
import { NoteDetail } from '../components/NoteDetail'
import { SaveButton } from '../components/Buttons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux/actions'

export class Note extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name', ''),
    headerRight: (
      <SaveButton onPress={navigation.getParam('onSaveButtonPress')} />
    )
  })

  state = {
    noteText: ''
  }

  componentDidMount() {
    this.props.navigation.setParams({ onSaveButtonPress: this.onSaveNote })
  }

  onSaveNote = () => {
    const { projectId, note, editNote } = this.props
    const { noteText } = this.state

    if (noteText && noteText !== note.text) {
      editNote(projectId, note.id, noteText)
    }
    Keyboard.dismiss()
  }

  onChangeNote = noteText => {
    this.setState({ noteText })
  }

  render() {
    const noteText = this.state.noteText || this.props.note.text
    return (
      <NoteDetail
        noteText={noteText}
        onChangeNoteText={this.onChangeNote}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { noteId, projectId } = ownProps.navigation.state.params
  const project = state.projects.find(project => project.id === projectId)
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