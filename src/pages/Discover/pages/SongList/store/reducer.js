import { Map } from "immutable";
import * as actionTypes from "@/store/constants";
const defaultRootState = Map({
	songsCategory: [],
	songsCategoryName: '全部',
	songsCategoryList: []
});

function reducer(state = defaultRootState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_SONGS_CATEGORY:
			return state.set("songsCategory", action.songsCategory);
		case actionTypes.CHANGE_SONGS_CATEGORY_NAME:
			return state.set("songsCategoryName", action.songsCategoryName);
		case actionTypes.CHANGE_SONGS_CATEGORY_LIST:
			return state.set("songsCategoryList", action.songsCategoryList);
		default:
			return state;
	}
}

export default reducer;
