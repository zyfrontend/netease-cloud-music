import { Map } from "immutable";
import * as actionTypes from "@/store/constants";
const defaultRootState = Map({
	topList: [],
	topListIndex: 0,
	topListDetail: []
})

function reducer(state = defaultRootState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_LEADER_BOARD_TOP_LIST:
			return state.set("topList", action.topList);
		case actionTypes.CHANGE_LEADER_BOARD_TOP_LIST_INDEDX:
			return state.set("topListIndex", action.topListIndex);
		case actionTypes.CHANGE_LEADER_BOARD_TOP_LIST_DETAIL:
			return state.set("topListDetail", action.topListDetail);
		default:
			return state;
	}
}

export default reducer;

