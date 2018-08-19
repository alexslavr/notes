import React, { Component } from 'react';
import { ProjectList } from '../components/ProjectList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux/actions'

export class Projects extends Component {
  addProject = () => {
    this.props.addProject()
  }

  navigateProject = (projectId, name) => {
    this.props.navigation.navigate('Project', { projectId, name })
  }

  render() {
    const { projects } = this.props
    return (
      <ProjectList
        projects={projects}
        onAddProject={this.addProject}
        onNavigateProject={this.navigateProject}
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