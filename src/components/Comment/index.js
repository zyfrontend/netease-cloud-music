import React from "react";
import { getSizeImage, formatYearMonthDay } from "@/utils/format";
import "./style.less";
import imgbf from "../../assets/img/comment.png";
export default function Comment(props) {
	const { total, hotComments, comments } = props;
	return (
		<div className="comment">
			<div className="comment_header">
				<h1>评论:</h1>
				<span>共{total}条</span>
			</div>

			<div>
				<img className="imgbf" src={imgbf} alt="" />
			</div>
			<div>
				<div className="hot_comment_header">

					<h1>精彩评论</h1>

				</div>
				{
					hotComments.map((item) => {
						return (
							<div className="hot_comment">
								<img src={getSizeImage(item.user && item.user.avatarUrl, 60)} alt="" />
								<div className="comment_box">
									<span className="comment_nickname">{item.user.nickname}:</span>
									{item.content}
									<div className="comment_info">
										<span>{formatYearMonthDay(item.time)}</span>
										<div style={{ display: 'flex' }}>
											<span className="sprite_button btn_great"></span>
											<span>({item.likedCount})</span>
										</div>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
			<div>
				<div className="hot_comment_header">
					<h1>最新评论</h1>
				</div>
				{
					comments.map((item) => {
						return (
							<div className="hot_comment">
								<img src={getSizeImage(item.user && item.user.avatarUrl, 60)} alt="" />
								<div className="comment_box">
									<span className="comment_nickname">{item.user.nickname}:</span>
									{item.content}
									<div className="comment_info">
										<span>{formatYearMonthDay(item.time)}</span>
										<div style={{ display: 'flex' }}>
											<span className="sprite_button btn_great"></span>
											<span>({item.likedCount})</span>
										</div>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}
