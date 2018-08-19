import { createStore } from 'redux'
import { reducer } from './reducer'

export const initialState = {
  projects: [
    {
      id: 'project_1',
      name: 'NoteList 1',
      notes: [
        {
          id: '1',
          userName: 'Alex',
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        },
        {
          id: '2',
          userName: 'Alex',
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        },
        {
          id: '3',
          userName: 'Alex',
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        },
        {
          id: '4',
          userName: 'Alex',
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        }
      ]
    },
    {
      id: 'project_2',
      name: 'NoteList 2',
      notes: [
        {
          id: '1',
          userName: 'Alex',
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        },
        {
          id: '2',
          userName: 'Alex',
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        },
        {
          id: '3',
          userName: 'Alex',
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        },
        {
          id: '4',
          userName: 'Alex',
          editTime: '11-11-2011',
          text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
        }
      ]
    }
  ]
}


export const store = createStore(reducer, initialState)