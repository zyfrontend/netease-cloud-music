import React from "react";
import { getPlayerMusicDetailAction } from "@/components/PlayerBar/store/actionCreators";
import { formatMinuteSecond } from "@/utils/format"
import "./style.less";
import { useDispatch } from "react-redux";
export default function DetailList(props) {
	const { listData } = props;
	const dispatch = useDispatch();
	const playerMusic = (id) => {
		dispatch(getPlayerMusicDetailAction(id))
	}
	const tracks = (listData && listData.tracks) || [];
	return (
		<div className="detail_list">
			<div className="detail_list_header">
				<div className="left">
					<h1>歌曲列表</h1>
					<span>{listData.trackCount}首歌</span>
				</div>
				<div>
					<span style={{ color: '#3498db' }}>生成外链播放器</span>
					<span>播放: <span style={{ color: '#e74c3c' }}>{listData.playCount}</span>次</span>
				</div>
			</div>
			<div>
				<table>
					<thead>
						<tr>
							<th className="sprite_table"></th>
							<th className="sprite_table">歌曲标题</th>
							<th className="sprite_table">时长</th>
							<th className="sprite_table">歌手</th>
							<th className="sprite_table">专辑</th>
						</tr>
					</thead>
					<tbody>
						{
							tracks.map((item, andex) => {
								return (
									<tr key={item.al.id}>
										<td className="td_index">
											{andex + 1}
											<a className="sprite_table" onClick={() => { playerMusic(item.id) }} alt=""></a>
										</td>
										<td className="td_name">{item.name}</td>
										<td>
											<span className="td_time">{formatMinuteSecond(item.dt)}</span>
											<div className="td_time_btn">
												<a className="sprite_table" href="#/" alt=""></a>
												<a className="sprite_table" href="#/" alt=""></a>
												<a className="sprite_table" href="#/" alt=""></a>
												<a className="sprite_table" href="#/" alt=""></a>
											</div>
										</td>
										<td className="td_ar">{(item.ar[0] && item.ar[0].name) || ''}</td>
										<td className="td_al">{(item.al && item.al.name) || ''}</td>
									</tr>

								)
							})
						}
					</tbody>
				</table>
				<div className="hint">查看更多内容，请下载客户端</div>
				<a href="https://music.163.com/#/download" className="downloadnow">立即下载</a>
			</div>
		</div >
	)
}
