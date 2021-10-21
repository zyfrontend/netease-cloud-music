import request from "../request";

// 榜单
export function getLeaderBoardTopList() {
	return request({
		url: "/toplist",
	})
}
// 获取榜单详情
export function getLeaderBoardTopListDetail(id) {
	return request({
		url: "/playlist/detail",
		params: {
			id
		}
	})
}
