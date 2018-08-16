export const actionTypes = {
  PROJECT_ADDED: 'PROJECT_ADDED',
  PROJECT_REMOVED: 'PROJECT_REMOVED',

  NOTE_ADDED: 'NOTE_ADDED',
  NOTE_EDITED: 'NOTE_EDITED',
  NOTE_REMOVED: 'NOTE_REMOVED'
}

export const actions = {
  addProject: (id, name) => ({
    type: actionTypes.PROJECT_ADDED,
    payload: { id, name }
  }),

  removeProject: (id) => ({
    type: actionTypes.PROJECT_REMOVED,
    payload: { id }
  })

}