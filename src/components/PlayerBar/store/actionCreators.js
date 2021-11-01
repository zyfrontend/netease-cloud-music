import { getPlayerMusicDetail, getPlayerMusicLyric } from "@/services/player";
import { getMusicListDetail } from "@/services/discover/musicListDetail";
import { parseLyric } from "@/utils/format"
import * as actionTypes from "@/store/constants";


// 歌曲详情

const changePlayerMusicDetailAction = (musicDetail) => ({
	type: actionTypes.CHANGE_PLAYER_MUSIC_DETAIL,
	musicDetail
})
// 顺序播放
export const changePlayerMusicOrderAction = (order) => ({
	type: actionTypes.CHANGE_PLAYER_MUSIC_ORDER,
	order
})
// 列表索引
const changeMusicListIndexAction = (musicIndex) => ({
	type: actionTypes.CHANGE_PLAYER_MUSIC_INDEX,
	musicIndex
})
// 播放列表
const changePlayerMusicListAction = (musicList) => ({
	type: actionTypes.CHANGE_PLAYER_MUSIC_LIST,
	musicList
})
export const getPlayerMusicDetailAction = (ids) => {
	return (dispatch, getState) => {
		// 1. 根据id 查找播放列表是否存在
		const musicList = getState().getIn(["player", "musicList"]);
		const musicIndex = musicList.findIndex(song => song.id === ids);

		// 2. 判断是否找到歌曲
		let song = null;
		if (musicIndex !== -1) { // 找到歌曲
			dispatch(changeMusicListIndexAction(musicIndex));
			song = musicList[musicIndex];
			dispatch(changePlayerMusicDetailAction(song));
		} else {	// 没有找到
			getPlayerMusicDetail(ids).then((res) => {
				song = res.songs && res.songs[0];
				if (!song) return;
				const newMusicList = [...musicList];
				newMusicList.push(song);
				dispatch(changePlayerMusicListAction(newMusicList));
				dispatch(changeMusicListIndexAction(newMusicList.length - 1));
				dispatch(changePlayerMusicDetailAction(song))

				// 请求歌词
				dispatch(getPlayerMusicLyricAction(song.id))
			})
		}
	}
}

// 下一首
export const changePlayerMusicSwitchAction = (tag) => {
	return (dispatch, getState) => {
		const musicList = getState().getIn(["player", "musicList"]);
		let musicIndex = getState().getIn(["player", "musicIndex"]);
		const order = getState().getIn(["player", "order"]);
		switch (order) {
			case 1: // 随机播放
				let randomIndex = Math.floor(Math.random() * musicList.length);
				while (randomIndex === musicIndex) {
					randomIndex = Math.floor(Math.random() * musicList.length);
				}
				musicIndex = randomIndex;
				break;
			default:	// 顺序播放
				musicIndex += tag;
				if (musicIndex === musicList.length) musicIndex = 0; // 
				if (musicIndex === -1) musicIndex = musicList.length - 1;
		}
		const song = musicList[musicIndex];
		dispatch(changePlayerMusicDetailAction(song));
		dispatch(changeMusicListIndexAction(musicIndex));
		// 请求歌词
		dispatch(getPlayerMusicLyricAction(song.id))
	}
}

// 歌词
const changePlayerMusicLyricAction = (musicLyricList) => ({
	type: actionTypes.CHANGE_PLAYER_MUSIC_LYRIC,
	musicLyricList
})
export const changePlayerMusicLyricIndexAction = (musicLyricIndex) => ({
	type: actionTypes.CHANGE_PLAYER_MUSIC_LYRIC_INDEX,
	musicLyricIndex
})
export const getPlayerMusicLyricAction = (id) => {
	return (dispatch) => {
		getPlayerMusicLyric(id).then((res) => {
			const musicLyric = res.lrc.lyric;
			const musicLyricList = parseLyric(musicLyric);
			dispatch(changePlayerMusicLyricAction(musicLyricList));
		})
	}
}


export const addMusicListToPlayerList = (id) => {
	return (dispatch, getState) => {
		const musicList = getState().getIn(["player", "musicList"]);
		const musicListcopy = [...musicList]
		getMusicListDetail(id).then((res) => {
			const musicId = res.privileges;
			let test = [];
			for (let musicIds of musicId) {
				test.push(musicIds.id);
			}
			test.map((item) => {
				return (
					getPlayerMusicDetail(item).then((res) => {
						const song = res.songs && res.songs[0];
						musicListcopy.push(song)
					})
				)
			})
			console.log(musicListcopy);
			dispatch(changePlayerMusicListAction(musicListcopy));
		})
	}
}
