import React, { PureComponent } from 'react'
import { ProjectList } from '../components/ProjectList'
import { AddButton } from '../components/Buttons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux/actions'

export class Projects extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <AddButton
        onPress={navigation.getParam('onHeaderButtonPress')}
      />
    )
  })

  componentDidMount() {
    this.props.navigation.setParams({
      onHeaderButtonPress: this.navigateNewProject
    })
  }

  navigateNewProject = () => {
    this.props.navigation.navigate('Project')
  }

  navigateExistingProject = (project) => {
    this.props.navigation.navigate('Project', { projectId: project.id, name: project.name })
  }

  render() {
    return (
      <ProjectList
        projects={this.props.projects}
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