import { actionTypes } from './actions'
import { combineReducers } from 'redux'

export function user(state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

export function projects(state = [], action) {
  switch (action.type) {
    case actionTypes.PROJECT_ADDED: {
      return state.concat(action.payload)
    }
    case actionTypes.PROJECT_REMOVED: {
      return state.filter(project => project.id !== action.payload.id)
    }
    case actionTypes.NOTE_REMOVED: {
      const { projectId, noteId } = action.payload
      return state.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            notes: project.notes.filter(note => note.id !== noteId)
          }
        }
        return project
      })
    }
    default:
      return state
  }
}

export const reducer = combineReducers({
  projects,
  user
})