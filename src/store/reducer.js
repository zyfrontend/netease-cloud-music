import { combineReducers } from "redux-immutable";

import { reducer as discoverReducer } from "@/pages/Discover/pages/Recommend/store";
import { reducer as playerReducer } from "@/components/PlayerBar/store";
import { reducer as leaderboardReducer } from "@/pages/Discover/pages/LeaderBoard/store";
import { reducer as songsReducer } from "@/pages/Discover/pages/SongList/store";
import { reducer as anchorStationReducer } from "@/pages/Discover/pages/AnchorStation/store";
const cReducer = combineReducers({
	recommend: discoverReducer,
	player: playerReducer,
	ranking: leaderboardReducer,
	songs: songsReducer,
	djradio: anchorStationReducer
});

export default cReducer;
