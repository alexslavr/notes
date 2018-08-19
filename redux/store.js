import { createStore } from 'redux'
import { reducer } from './reducer'

const userAvatar = require('../images/avatar.jpeg')

export const initialState = {
  projects: [
    {
      id: 'project_1',
      name: 'Project 1',
      notes: [
        {
          id: '1',
          userName: 'Alex',
          avatar: userAvatar,
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        },
        {
          id: '2',
          userName: 'Alex',
          avatar: userAvatar,
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        },
        {
          id: '3',
          userName: 'Alex',
          avatar: userAvatar,
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        },
        {
          id: '4',
          userName: 'Alex',
          avatar: userAvatar,
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        }
      ]
    },
    {
      id: 'project_2',
      name: 'Project 2',
      notes: [
        {
          id: '1',
          userName: 'Alex',
          avatar: userAvatar,
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        },
        {
          id: '2',
          userName: 'Alex',
          avatar: userAvatar,
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        },
        {
          id: '3',
          userName: 'Alex',
          avatar: userAvatar,
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        },
        {
          id: '4',
          userName: 'Alex',
          avatar: userAvatar,
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        }
      ]
    }
  ]
}


export const store = createStore(reducer, initialState)