import { Map } from "immutable";

import * as actionTypes from "@/store/constants";

const defaultRootState = Map({
	banners: [],
	hot: [],
	newDvd: [],
	soaring: [],
	newSong: [],
	original: [],
});

function reducer(state = defaultRootState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_DISCOVER_RECOMMEND_BANNERS:
			return state.set("banners", action.banners);
		case actionTypes.CHANGE_DISCOVER_RECOMMEND_HOT:
			return state.set("hot", action.hot);
		case actionTypes.CHANGE_DISCOVER_RECOMMEND_NEW_DVD:
			return state.set("newDvd", action.newDvd);
		case actionTypes.CHANGE_DISCOVER_RECOMMEND_SOARING:
			return state.set("soaring", action.soaring);
		case actionTypes.CHANGE_DISCOVER_RECOMMEND_NEWSONG:
			return state.set("newSong", action.newSong);
		case actionTypes.CHANGE_DISCOVER_RECOMMEND_ORIGINAL:
			return state.set("original", action.original);
		default:
			return state;
	}
}

export default reducer;
