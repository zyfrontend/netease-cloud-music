import request from "../request";
// 播放音乐
export function getPlayerMusicDetail(ids) {
	return request({
		url: "/song/detail",
		params: {
			ids,
		},
	});
}
// 歌词
export function getPlayerMusicLyric(id) {
	return request({
		url: "/lyric",
		params: {
			id
		}
	})
}

