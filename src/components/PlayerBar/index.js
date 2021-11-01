import React, { useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { formatDate, getSizeImage, getPlaySong } from "@/utils/format";
import { Slider } from "antd";
import {
	getPlayerMusicDetailAction,
	changePlayerMusicOrderAction,
	changePlayerMusicSwitchAction,
	changePlayerMusicLyricIndexAction
} from "./store/actionCreators";
import "./style.less";
import Panel from "./Panel";
export default function PlayerBar() {
	// hooks
	const [Playing, setPlaying] = useState(true);
	const [PlayBtn, setPlayBtn] = useState("cycle");
	const [currentTime, setCurrentTime] = useState(0);
	const [schedule, setSchedule] = useState(0);
	const [isChange, setIsChange] = useState(false);
	const [showPannel, setShowPannel] = useState(false);


	// redux
	const { musicDetail, order, musicList, musicLyricList, musicLyricIndex } = useSelector((state) => ({
		musicDetail: state.getIn(["player", "musicDetail"]),
		order: state.getIn(["player", "order"]),
		musicList: state.getIn(["player", "musicList"]),
		musicLyricList: state.getIn(["player", "musicLyricList"]),
		musicLyricIndex: state.getIn(["player", "musicLyricIndex"])

	}), shallowEqual)
	// 
	const dispatch = useDispatch();
	const audioRef = useRef();
	// 
	useEffect(() => {
		dispatch(getPlayerMusicDetailAction(505993560));
	}, [dispatch])
	useEffect(() => {
		audioRef.current.src = getPlaySong(musicDetail.id);
		audioRef.current
			.play()
			.then((res) => {
				setPlaying(true);
			})
			.catch((err) => {
				setPlaying(false);
			});
	}, [musicDetail])
	// 业务
	const picUrl = (musicDetail.al && musicDetail.al.picUrl) || ""; // 歌曲封面
	const musicName = (musicDetail.ar && musicDetail.ar[0].name) || "";	// 歌曲名称
	const musicTime = musicDetail.dt || 0;	// 歌曲总时长
	const showTime = formatDate(musicTime, "mm:ss"); // 格式化歌曲时长
	const updateTime = formatDate(currentTime, "mm:ss"); // 当前播放歌曲所在的时间

	// other handle
	const changeOrder = () => {
		let currentOrder = order + 1;
		if (currentOrder > 2) {
			currentOrder = 0;
			setPlayBtn("cycle");
		} else if (currentOrder === 1) {
			setPlayBtn("random");
		} else if (currentOrder === 2) {
			setPlayBtn("one");
		}
		dispatch(changePlayerMusicOrderAction(currentOrder));
	}
	// 播放
	const playMusic = () => {
		Playing ? audioRef.current.pause() : audioRef.current.play();
		setPlaying(!Playing);
	}
	// 播放结束
	const timeupdate = (e) => {
		const currentTime = e.target.currentTime;
		if (!isChange) {
			setSchedule(((currentTime * 1000) / musicTime) * 100)
			setCurrentTime(currentTime * 1000)
		}
		// 歌词
		let i = 0;
		for (; i < musicLyricList.length; i++) {
			let lyricItem = musicLyricList[i];
			if (currentTime * 1000 < lyricItem.time) {
				break;
			}
		}
		if (musicLyricIndex !== i - 1) {
			dispatch(changePlayerMusicLyricIndexAction(i - 1));
		}
	}
	const handleMusicEnded = () => {
		if (order === 2) {
			audioRef.current.currentTime = 0;
			audioRef.current.play();
		} else {
			dispatch(changePlayerMusicSwitchAction(1));
		}
	}
	// 进度条
	const sliderChange = useCallback((value) => {
		setIsChange(true);
		setSchedule(value);

	}, [])
	const sliderAfterChange = useCallback((value) => {
		const currentTime = value / 100 * musicTime / 1000;
		audioRef.current.currentTime = currentTime;
		setCurrentTime(currentTime * 1000)
		setIsChange(false);
	}, [musicTime])

	const getSwitchMusic = (tag) => {
		dispatch(changePlayerMusicSwitchAction(tag));
	}
	return (
		<div className="sprite_player playerbar">
			<div className="content">
				<div className="control">
					<button className="sprite_player prev" onClick={e => getSwitchMusic(-1)}></button>
					<button className={classNames("sprite_player", (Playing ? "stop" : "play"))} onClick={e => playMusic()}></button>
					{/*
						<button className={"sprite_player" + " " + (Playing ? "stop" : "play")} onClick={e => playMusic()}></button>
					*/}
					<button className="sprite_player next" onClick={e => getSwitchMusic(+1)}></button>
				</div>
				<div className="playinfo">
					<div className="image">
						<NavLink to="/discover/player">
							<img src={getSizeImage(picUrl, 35)} alt="" />
						</NavLink>
					</div>
					<div className="player_info">
						<div className="song">
							<span className="song-name">{musicDetail.name}</span>
							<a href="#/" className="singer-name">
								{musicName}
							</a>
						</div>
						<div className="progress">
							<Slider
								defaultValue={30}
								value={schedule}
								onChange={sliderChange}
								onAfterChange={sliderAfterChange}
								tipFormatter={null}
							/>
							<div className="time">
								<span className="now-time">{updateTime}</span>
								<span className="divider">/</span>
								<span className="duration">{showTime}</span>
							</div>
						</div>
					</div>
				</div>
				<div className="operator">
					<div className="left">
						<button className="sprite_player btn favor"></button>
						<button className="sprite_player btn share"></button>
					</div>
					<div className="right">
						<button className="sprite_player btn volume"></button>
						{/*
						<button className={"sprite_player" + " " + "btn" + " " + PlayBtn} onClick={e => changeOrder()}></button>
						*/}
						<button className={classNames("sprite_player", "btn", PlayBtn)} onClick={e => changeOrder()}></button>
						<button className="sprite_player btn playlist" onClick={e => setShowPannel(!showPannel)}>
							{musicList.length}
						</button>
					</div>
				</div>
			</div>
			<audio
				ref={audioRef}
				onTimeUpdate={(e) => timeupdate(e)}
				onEnded={(e) => handleMusicEnded()}
			/>
			{
				showPannel ? <Panel /> : null
			}
		</div>
	)
}
