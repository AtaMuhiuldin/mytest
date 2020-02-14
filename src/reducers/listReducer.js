import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  ENABLE_EDITING_TODO
} from "../actions/type";
import MyTodo from "../myTodo";

const state = {
  myList: [
    new MyTodo(1, "data", true),
    new MyTodo(2, "data", false),
    new MyTodo(3, "data", false)
  ]
};

function listReducer(mState = deepCopy(state), action) {
  switch (action.type) {
    case ADD_TODO:
      mState.myList.push(action.payload);

      return { ...mState };
    case UPDATE_TODO:
      let index = mState.myList.findIndex(ls => ls._id === action.payload._id);
      if (index >= 0) {
        mState.myList[index] = { ...action.payload };
      }

      return deepCopy(mState);
    case DELETE_TODO:
      mState.myList = mState.myList.filter(ls => ls._id !== action.payload._id);
      return { ...mState };

    default:
      return { ...mState };
  }
}
export default listReducer;

const deepCopy = obj => {
  return JSON.parse(JSON.stringify(obj));
};
