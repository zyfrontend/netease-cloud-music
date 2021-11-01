import { getMusicListDetail, getMusicListDetailCommit } from "@/services/discover/musicListDetail"

import * as actionTypes from "@/store/constants";

const changeMusicListDetailAction = (res) => ({
	type: actionTypes.CHANGE_MUSIC_DETAIL_LIST,
	musicListDetail: res
})

export const getMusicListDetailAction = (id) => {
	return (dispatch) => {
		getMusicListDetail(id).then((res) => {
			dispatch(changeMusicListDetailAction(res))
		})
	}
}

const changeMusicListDetailCommentAction = (res) => ({
	type: actionTypes.CHANGE_MUSIC_DETAIL_COMMENT,
	musicListComment: res
})

export const getMusicListDetailCommentAction = (id) => {
	return (dispatch) => {
		getMusicListDetailCommit(id).then((res) => {
			dispatch(changeMusicListDetailCommentAction(res))
		})
	}
}
