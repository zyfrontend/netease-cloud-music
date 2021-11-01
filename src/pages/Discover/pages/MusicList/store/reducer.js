import { Map } from "immutable";
import * as actionTypes from "@/store/constants";

const defaultRootState = Map({
	musicListDeatil: {},
	musicDetail: {},
	musicListComment: []
})

function reducer(state = defaultRootState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_MUSIC_DETAIL_LIST:
			return state.set("musicListDetail", action.musicListDetail);
		case actionTypes.CHANGE_MUSIC_DETAIL:
			return state.set("musicDetail", action.musicDetail);
		case actionTypes.CHANGE_MUSIC_DETAIL_COMMENT:
			return state.set("musicListComment", action.musicListComment);

		default:
			return state;
	}
}

export default reducer;
