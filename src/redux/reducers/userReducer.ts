import { ACTION_1 } from "../constants";

const initialState = { stateData: "qwerty22" };

type Action = {
  type: string;
  data: any;
};

export const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACTION_1:
      return {
        ...state,
        stateData: state.stateData + action.data,
      };
    default:
      return state;
  }
};
