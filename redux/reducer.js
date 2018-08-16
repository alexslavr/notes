export const initialState = [
  {
    name: 'Project 1',
    notes: [
      {
        userName: 'Alex',
        editTime: '11-11-2011',
        text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
      },
      {
        userName: 'Alex',
        editTime: '11-11-2011',
        text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
      },
      {
        userName: 'Alex',
        editTime: '11-11-2011',
        text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
      },
      {
        userName: 'Alex',
        editTime: '11-11-2011',
        text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
      }
    ]
  },
  {
    name: 'Project 2',
    notes: [
      {
        userName: 'Alex',
        editTime: '11-11-2011',
        text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
      },
      {
        userName: 'Alex',
        editTime: '11-11-2011',
        text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
      },
      {
        userName: 'Alex',
        editTime: '11-11-2011',
        text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
      },
      {
        userName: 'Alex',
        editTime: '11-11-2011',
        text: 'asdfdasfsadf sadfsadf asdfsad sadfas'
      }
    ]
  }
]

export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}