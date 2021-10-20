import { Map } from "immutable";
import * as actionTypes from "@/store/constants";
const defaultRootState = Map({

})

function reducer(state = defaultRootState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default reducer;

