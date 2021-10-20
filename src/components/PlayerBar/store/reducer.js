import { Map } from "immutable";
import * as actionTypes from "@/store/constants";

const defaultState = Map({
	musicDetail: [],
	order: 0,
	musicIndex: [],
	musicLyricList: [],
	musicLyricIndex: 0,
	musicList: [
		{
			name: "25",
			id: 1842765421,
			pst: 0,
			t: 0,
			ar: [
				{
					id: 34624664,
					name: "王云宏",
					tns: [],
					alias: [],
				},
				{
					id: 13451730,
					name: "0883",
					tns: [],
					alias: [],
				},
			],
			alia: [],
			pop: 100,
			st: 0,
			rt: "",
			fee: 8,
			v: 11,
			crbt: null,
			cf: "",
			al: {
				id: 126993955,
				name: "25",
				picUrl:
					"https://p2.music.126.net/ErQqvx0v-cs9wiSSLg5pyw==/109951165953810948.jpg",
				tns: [],
				pic_str: "109951165953810948",
				pic: 109951165953810940,
			},
			dt: 206117,
			h: {
				br: 320002,
				fid: 0,
				size: 8247423,
				vd: -32555,
			},
			m: {
				br: 192002,
				fid: 0,
				size: 4948471,
				vd: -29917,
			},
			l: {
				br: 128002,
				fid: 0,
				size: 3298995,
				vd: -28129,
			},
			a: null,
			cd: "01",
			no: 1,
			rtUrl: null,
			ftype: 0,
			rtUrls: [],
			djId: 0,
			copyright: 0,
			s_id: 0,
			mark: 64,
			originCoverType: 0,
			originSongSimpleData: null,
			resourceState: true,
			version: 11,
			single: 0,
			noCopyrightRcmd: null,
			rtype: 0,
			rurl: null,
			mst: 9,
			cp: 0,
			mv: 0,
			publishTime: 0,
		},
		{
			name: "我们俩",
			id: 1861632812,
			pst: 0,
			t: 0,
			ar: [
				{
					id: 2124,
					name: "陈楚生",
					tns: [],
					alias: [],
				},
				{
					id: 14116394,
					name: "鲁怀德",
					tns: [],
					alias: [],
				},
				{
					id: 33697021,
					name: "曹杨Young",
					tns: [],
					alias: [],
				},
				{
					id: 1079074,
					name: "余佳运",
					tns: [],
					alias: [],
				},
			],
			alia: [],
			pop: 100,
			st: 0,
			rt: "",
			fee: 8,
			v: 3,
			crbt: null,
			cf: "",
			al: {
				id: 130454126,
				name: "谁是宝藏歌手 第13期",
				picUrl:
					"https://p1.music.126.net/oX0ohjqJ51WphemOVqGcGw==/109951166183334243.jpg",
				tns: [],
				pic_str: "109951166183334243",
				pic: 109951166183334240,
			},
			dt: 240619,
			h: {
				br: 320000,
				fid: 0,
				size: 9626925,
				vd: -51062,
			},
			m: {
				br: 192000,
				fid: 0,
				size: 5776173,
				vd: -48472,
			},
			l: {
				br: 128000,
				fid: 0,
				size: 3850797,
				vd: -46790,
			},
			a: null,
			cd: "01",
			no: 6,
			rtUrl: null,
			ftype: 0,
			rtUrls: [],
			djId: 0,
			copyright: 0,
			s_id: 0,
			mark: 8192,
			originCoverType: 0,
			originSongSimpleData: null,
			resourceState: true,
			version: 3,
			single: 0,
			noCopyrightRcmd: null,
			mst: 9,
			cp: 2709472,
			rtype: 0,
			rurl: null,
			mv: 0,
			publishTime: 1626364800000,
		},
	]
});

function reducer(state = defaultState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_PLAYER_MUSIC_DETAIL:
			return state.set("musicDetail", action.musicDetail);
		case actionTypes.CHANGE_PLAYER_MUSIC_ORDER:
			return state.set("order", action.order);
		case actionTypes.CHANGE_PLAYER_MUSIC_LIST:
			return state.set("musicList", action.musicList);
		case actionTypes.CHANGE_PLAYER_MUSIC_INDEX:
			return state.set("musicIndex", action.musicIndex);
		case actionTypes.CHANGE_PLAYER_MUSIC_LYRIC:
			return state.set("musicLyricList", action.musicLyricList);
		case actionTypes.CHANGE_PLAYER_MUSIC_LYRIC_INDEX:
			return state.set("musicLyricIndex", action.musicLyricIndex);
		default:
			return state;
	}
}

export default reducer;
