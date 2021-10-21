import * as actionTypes from "@/store/constants";
import { getSongsCategory, getSongsCategoryList } from "@/services/discover/songs";

// 获取分类列表
const changeSongsCategoryAction = (res) => ({
	type: actionTypes.CHANGE_SONGS_CATEGORY,
	songsCategory: res
})

export const getSongsCategoryAction = () => {
	return (dispatch) => {
		getSongsCategory().then((res) => {
			dispatch(changeSongsCategoryAction(res));
		})
	}
}
