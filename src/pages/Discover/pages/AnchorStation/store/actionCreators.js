import * as actionTypes from "@/store/constants";
import {
	getAnchorStationCategory,
	getAnchorStationRecommendProgram,
	getAnchorStationTopList
} from "@/services/discover/Anchorstation";

// 节目分类
const changeAnchorStationCategoryListAction = (res) => ({
	type: actionTypes.CHANGE_ANCHOR_STATION_CATEGORY_LIST,
	anchorStationCategoryList: res.categories
})


export const getAnchorStationCategoryListAction = () => {
	return (dispatch) => {
		getAnchorStationCategory().then((res) => {
			dispatch(changeAnchorStationCategoryListAction(res));
		})
	}
}

// 推荐节目
const changeAnchorStationRecommendProgramAction = (res) => ({
	type: actionTypes.CHANGE_ANCHOR_STATION_RECOMMEND_PROGRAME,
	recommendProgram: res.programs
})

export const getAnchorStationRecommendProgramAction = () => {
	return (dispatch) => {
		getAnchorStationRecommendProgram().then((res) => {
			dispatch(changeAnchorStationRecommendProgramAction(res));
		})
	}
}

// 节目排行榜
const changeAnchorStationTopListAction = (res) => ({
	type: actionTypes.CHANGE_ANCHOR_STATION_TOP_LIST,
	programTopList: res.toplist
})

export const getAnchorStationTopListAction = (limit) => {
	return (dispatch) => {
		getAnchorStationTopList(limit).then((res) => {
			dispatch(changeAnchorStationTopListAction(res));
		})
	}
}
