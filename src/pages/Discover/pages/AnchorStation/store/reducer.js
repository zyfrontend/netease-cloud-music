import { Map } from "immutable";
import * as actionTypes from "@/store/constants"

const defaultRootState = Map({
	anchorStationCategoryList: [],
	recommendProgram: [],
	programTopList: []

})


function reducer(state = defaultRootState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_ANCHOR_STATION_CATEGORY_LIST:
			return state.set("anchorStationCategoryList", action.anchorStationCategoryList);
		case actionTypes.CHANGE_ANCHOR_STATION_RECOMMEND_PROGRAME:
			return state.set("recommendProgram", action.recommendProgram);
		case actionTypes.CHANGE_ANCHOR_STATION_TOP_LIST:
			return state.set("programTopList", action.programTopList)
		default:
			return state;
	}
}

export default reducer;
