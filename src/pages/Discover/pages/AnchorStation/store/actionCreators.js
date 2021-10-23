import * as actionTypes from "@/store/constants";
import {
	getAnchorStationCategory,
	getAnchorStationRecommendProgram
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
	type: actionTypes.CHANGE_ANCHOR_STATION_RECOMMEND_PROGRAME:
	recommendProgram: res
})

export const
