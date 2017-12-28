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
        title: action.payload.title,
        completed: action.payload.completed,
        date: action.payload.date
      }

      return {
        ...state,
        tasks: state.tasks.concat(newTask)
      }

    case actionTypes.REMOVE_TASK:
      //arrumar
      return {
        ...state,
        tasks: state.tasks.filter((person, i) => i !== action.payload.index)
      }

    case actionTypes.TOGGLE_TASK:
      // Improve
      const copyTasks = [...state.tasks];
      const updatedTask = {...copyTasks[action.payload.index]};

      updatedTask.completed = !updatedTask.completed;
      copyTasks[action.payload.index] = updatedTask;

      return {
        ...state,
        tasks: copyTasks
      }
  }
  return state;
};

export default reducer;
