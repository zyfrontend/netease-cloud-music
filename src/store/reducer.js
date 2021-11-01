import { combineReducers } from "redux-immutable";

import { reducer as discoverReducer } from "@/pages/Discover/pages/Recommend/store";
import { reducer as playerReducer } from "@/components/PlayerBar/store";
import { reducer as leaderboardReducer } from "@/pages/Discover/pages/LeaderBoard/store";
import { reducer as songsReducer } from "@/pages/Discover/pages/SongList/store";
import { reducer as anchorStationReducer } from "@/pages/Discover/pages/AnchorStation/store";
import { reducer as detailReducer } from "@/pages/Discover/pages/MusicList/store";
const cReducer = combineReducers({
	recommend: discoverReducer,
	player: playerReducer,
	ranking: leaderboardReducer,
	songs: songsReducer,
	djradio: anchorStationReducer,
	detail: detailReducer,
});

export default cReducer;
