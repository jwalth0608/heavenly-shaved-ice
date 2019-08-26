import ACTIONS from "./actions";
import _ from "lodash";

const defaultState = {
  items: []
};

const shavedIceReducer = (state = defaultState, action) => {
	switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }


    default:
      return state;
  }
};

export default shavedIceReducer;