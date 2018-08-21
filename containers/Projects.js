import React, { Component } from 'react';
import { ProjectList } from '../components/ProjectList'
import { AddButton } from '../components/Buttons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux/actions'

export class Projects extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <AddButton onPress={navigation.getParam('onRightButtonPress')} />
    )
  })

  navigateNewProject = () => {
    this.props.navigation.navigate('Project')
  }

  navigateExistingProject = (projectId, name) => {
    this.props.navigation.navigate('Project', { projectId, name })
  }

  componentDidMount() {
    this.props.navigation.setParams({ onRightButtonPress: this.navigateNewProject })
  }

  render() {
    const { projects } = this.props
    return (
      <ProjectList
        projects={projects}
        onPressProject={this.navigateExistingProject}
      />
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projects
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Projects)