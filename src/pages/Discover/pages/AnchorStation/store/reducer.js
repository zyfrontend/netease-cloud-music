import { Map } from "immutable";
import * as actionTypes from "@/store/constants"

const defaultRootState = Map({
	anchorStationCategoryList: []
})


function reducer(state = defaultRootState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_ANCHOR_STATION_CATEGORY_LIST:
			return state.set("anchorStationCategoryList", action.anchorStationCategoryList)
		default:
			return state;
	}
}

export default reducer;
