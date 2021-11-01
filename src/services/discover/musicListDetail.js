import request from "../request";
// 歌单信息
export function getMusicListDetail(id) {
	return request({
		url: '/playlist/detail',
		params: {
			id
		}
	})
}

// 歌单评论
//
export function getMusicListDetailCommit(id) {
	return request({
		url: '/comment/playlist',
		params: {
			id
		}
	})
}




