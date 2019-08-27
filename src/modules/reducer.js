import ACTIONS from "./actions";
import _ from "lodash";

const defaultState = {
  items: []
};

const shavedIceReducer = (state = defaultState, action) => {
	switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item.name, colors: item.colors, flavors: item.purchasedFlavors};
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }
	case ACTIONS.Types.COMPLETE_PURCHASE: {
		let newState = _.cloneDeep(state);
		newState.items = [];
		return newState;
	}


    default:
      return state;
  }
};

export default shavedIceReducer;