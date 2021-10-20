import * as actionTypes from "@/store/constants";
import { getLeaderBoardTopList } from "@/services/discover/leaderboard"
// 获取排行榜单
const changeLeaderBoardTopListAction = (res) => ({
	type: actionTypes.CHANGE_LEADER_BOARD_TOP_LIST,
	topList: res
})

export const getLeaderBoardTopListAction = () => {
	return (dispatch) => {
		getLeaderBoardTopList().then((res) => {
			console.log(res);
		})
	}
}
