import { combineReducers } from "redux-immutable";

import { reducer as discoverReducer } from "@/pages/Discover/pages/Recommend/store";
import { reducer as playerReducer } from "@/components/PlayerBar/store";

const cReducer = combineReducers({
	recommend: discoverReducer,
	player: playerReducer
});

export default cReducer;
