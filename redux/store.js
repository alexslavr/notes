import { createStore } from 'redux'
import { reducer } from './reducer'

const avatar_2 = require('../images/avatar_2.jpg')
const avatar_3 = require('../images/avatar_3.jpg')

export const initialState = {
  projects: [
    {
      id: 'project_1',
      name: 'Project #1',
      notes: [
        {
          id: '1',
          userName: 'Alex',
          avatar: avatar_2,
          editTime: '11-11-2011',
          text: 'Some text here'
        },
        {
          id: '2',
          userName: 'Alex',
          avatar: avatar_3,
          editTime: '11-11-2011',
          text: 'Test \n\n text \n\n here'
        },
        {
          id: '3',
          userName: 'Alex',
          avatar: avatar_2,
          editTime: '11-11-2011',
          text: 'Test text Test textTest textTest textTest textTest textTest textTest textTest textTest textTest text'
        }
      ]
    },
    {
      id: 'project_2',
      name: 'Second Project',
      notes: [
        {
          id: '1',
          userName: 'Alex',
          avatar: avatar_3,
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        }
      ]
    }
  ]
}


export const store = createStore(reducer, initialState)