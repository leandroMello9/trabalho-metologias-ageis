import produce from 'immer';

const INITIAL_STATE = {
  todo: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'CREATE/TODO': {
        const c = [...draft.todo, action.payload];
        draft.todo = c;

        break;
      }
      case 'REMOVE/TODO': {
        const c = draft.todo.filter(
          (element) => element.todo.id !== action.payload.id
        );

        draft.todo = c;

        break;
      }

      default:
        return state;
    }
  });
}
