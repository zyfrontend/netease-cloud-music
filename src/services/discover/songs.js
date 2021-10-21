import request from "../request";

export function getSongsCategory() {
	return request({
		url: "/playlist/catlist"
	})
}

export function getSongsCategoryList(cat = "全部", offset = 0, limit = 35) {
	return request({
		url: "/top/playlist",
		params: {
			cat,
			limit,
			offset
		}
	})
}
