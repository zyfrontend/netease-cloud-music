import * as actionTypes from "@/store/constants";
import { getSongsCategory, getSongsCategoryList } from "@/services/discover/songs";
import { handleSongsCategory } from "@/utils/format";
// 获取分类列表
const changeSongsCategoryAction = (category) => ({
	type: actionTypes.CHANGE_SONGS_CATEGORY,
	songsCategory: category
})

export const getSongsCategoryAction = () => {
	return (dispatch) => {
		getSongsCategory().then((res) => {
			const category = handleSongsCategory(res);
			dispatch(changeSongsCategoryAction(category));
		})
	}
}

// 分类详情

export const changeSongsCategoryNameAction = (name) => ({
	type: actionTypes.CHANGE_SONGS_CATEGORY_NAME,
	songsCategoryName: name
})
const changeSongsCategoryListAction = (res) => ({
	type: actionTypes.CHANGE_SONGS_CATEGORY_LIST,
	songsCategoryList: res
})

export const getSongsCategoryListAction = (page) => {
	return (dispatch, getState) => {
		// 1.获取currentCategory
		const name = getState().getIn(["songs", "songsCategoryName"]);

		// 2.获取数据
		getSongsCategoryList(name, page * 35).then(res => {
			dispatch(changeSongsCategoryListAction(res));
		})
	}
}
