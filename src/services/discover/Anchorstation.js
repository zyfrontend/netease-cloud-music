import request from "../request";
// 电台分类
export function getAnchorStationCategory() {
	return request({
		url: "/dj/catelist",
	})
}
// 推荐节目
export function getAnchorStationRecommendProgram() {
	return request({
		url: "/program/recommend"
	})
}

// 节目排行榜
export function getAnchorStationTopList(limit) {
	return request({
		url: "/dj/program/toplist",
		params: {
			limit
		}
	})
}
