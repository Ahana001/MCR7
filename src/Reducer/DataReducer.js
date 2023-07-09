export const ActionTypes = {
  INITIAL_SET: "INITIAL_SET",
};

export const initialState = {
  data: [],
};

export function DataReducer(state, action) {
  let result;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.INITIAL_SET: {
      result = {
        ...state,
        data: action.payload.data,
      };
      break;
    }
  }

  return result;
}
