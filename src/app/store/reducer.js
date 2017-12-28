import * as actionTypes from './actions';

const initialState = {
  tasks: [
    { title: 'Foobar', completed: false, date: new Date() },
    { title: 'Lorem', completed: true, date: new Date() },
    { title: 'BobAlice', completed: false, date: new Date() },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      const newTask = {
        title: 'Blabla',
        completed: false,
        date: new Date()
      }

      console.log('aaa', newTask);

      return {
        ...state,
        tasks: state.tasks.concat(newTask)
      }
    case actionTypes.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(person => person.id !== action.taskId)
      }
    case actionTypes.TOGGLE_TASK:
    //arrumar
      const copyTasks = {...state.tasks};
      const updatedTask = {...copyTasks[taskIndex]};

      updatedTask.completed != !updatedTask.completed;

      return {
        ...state,
        tasks: updatedTasks
      }
  }
  return state;
};

export default reducer;
