import request from "../request";

// 榜单
export function getLeaderBoardTopList() {
	return request({
		url: "/toplist",
	})
}
