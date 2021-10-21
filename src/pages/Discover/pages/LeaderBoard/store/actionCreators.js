import * as actionTypes from "@/store/constants";
import { getLeaderBoardTopList, getLeaderBoardTopListDetail } from "@/services/discover/leaderboard"
// 获取排行榜单
const changeLeaderBoardTopListAction = (res) => ({
	type: actionTypes.CHANGE_LEADER_BOARD_TOP_LIST,
	topList: res.list
})

export const getLeaderBoardTopListAction = () => {
	return (dispatch) => {
		getLeaderBoardTopList().then((res) => {
			dispatch(changeLeaderBoardTopListAction(res));
		})
	}
}
// 当前显示的榜单index

export const changeLeaderBoardTopListIndexAction = (topListIndex) => ({
	type: actionTypes.CHANGE_LEADER_BOARD_TOP_LIST_INDEDX,
	topListIndex
})

const changeLeaderBoardTopListDetailAction = (res) => ({
	type: actionTypes.CHANGE_LEADER_BOARD_TOP_LIST_DETAIL,
	topListDetail: res
})

export const getLeaderBoardTopListDetailAction = (id) => {
	return (dispatch) => {
		getLeaderBoardTopListDetail(id).then((res) => {
			dispatch(changeLeaderBoardTopListDetailAction(res))
		})
	}
}
