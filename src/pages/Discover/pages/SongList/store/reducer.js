import { Map } from "immutable";
import * as actionTypes from "@/store/constants";
const defaultRootState = Map({
	songsCategory: []
});

function reducer(state = defaultRootState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_SONGS_CATEGORY:
			return state.set("songsCategory", action.songsCategory);
		default:
			return state;
	}
}

export default reducer;
