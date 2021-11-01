import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getMusicListDetailAction, getMusicListDetailCommentAction } from "./store/actionCreators";

import "./style.less";
// 组件
import DetailHeader from "@/components/DetailHeader";
import DetailList from "@/components/DetailList";
import Comment from "@/components/Comment";
import { getSizeImage } from "@/utils/format";

export default function MusicList(props) {
	const { id } = props.match.params;
	const { musicListDetail, musicListComment, hot } = useSelector((state) => ({
		musicListDetail: state.getIn(["detail", "musicListDetail"]),
		musicListComment: state.getIn(["detail", "musicListComment"]),
		hot: state.getIn(["recommend", "hot"])
	}), shallowEqual)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMusicListDetailAction(id))
		dispatch(getMusicListDetailCommentAction(id))
	}, [dispatch, id])
	const playlist = (musicListDetail && musicListDetail.playlist) || '';
	const total = musicListComment.total || '';
	const hotComments = (musicListComment.hotComments && musicListComment.hotComments) || [];
	const comments = (musicListComment.comments && musicListComment.comments) || [];
	return (
		<div className="music_list">
			<div className="music_list_left">
				<DetailHeader headerData={playlist} listId={id} />
				<DetailList listData={playlist} />
				<Comment total={total} hotComments={hotComments} comments={comments} />
			</div>
			<div className="music_list_right">
				<div className="like_header">喜欢这个歌单的人</div>
				<div className="right_like">
					{
						hotComments.map((item) => {
							return (
								<img key={item.commentId} src={getSizeImage(item.user.avatarUrl, 40)} alt='' />
							)
						})
					}
				</div>
				<div>
					<div className="like_header">热门歌单</div>
					<div>
						{
							hot.map((item) => {
								return (
									<div key={item.id} className="hot_recommend_box">
										<img src={getSizeImage(item.picUrl, 50)} alt="" />
										<div className="hot_recommend_title">
											<div>{item.name}</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}
