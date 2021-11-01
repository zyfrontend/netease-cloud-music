import {
	getDiscoverRecommendBanners,
	getDiscoverRecommendHot,
	getDiscoverRecommendNewDvd,
	getDiscoverRecommendMusicCharts,
	getDiscoverRecommendHotSinger,
	getDiscoverRecommendHotDJ
} from "@/services/discover/recommend";
import * as actionTypes from "@/store/constants";

// 轮播图
// 数据存储
const changeDiscoverRecommendBannersAction = (res) => ({
	type: actionTypes.CHANGE_DISCOVER_RECOMMEND_BANNERS,
	banners: res.banners,
});
// 数据处理
export const getDiscoverRecommendBannersAction = () => {
	return (dispatch) => {
		getDiscoverRecommendBanners().then((res) => {
			dispatch(changeDiscoverRecommendBannersAction(res));
		});
	};
};
// 热门推荐
const changeDiscoverRecommendHotAction = (res) => ({
	type: actionTypes.CHANGE_DISCOVER_RECOMMEND_HOT,
	hot: res.result,
});
// 数据处理
export const getDiscoverRecommendHotAction = (limit) => {
	return (dispatch) => {
		getDiscoverRecommendHot(limit).then((res) => {
			dispatch(changeDiscoverRecommendHotAction(res));
		});
	};
};

// 新碟上架
const changeDiscoverRecommendNewDvdAction = (res) => ({
	type: actionTypes.CHANGE_DISCOVER_RECOMMEND_NEW_DVD,
	newDvd: res.albums,
});
export const getDiscoverRecommendNewDvdAction = (limit) => {
	return (dispatch) => {
		getDiscoverRecommendNewDvd(limit).then((res) => {
			dispatch(changeDiscoverRecommendNewDvdAction(res));
		});
	};
};



// 榜单
const changeDiscoverRecommendSoaringAction = (res) => ({
	type: actionTypes.CHANGE_DISCOVER_RECOMMEND_SOARING,
	soaring: res.playlist,
})
const changeDiscoverRecommendNewSongAction = (res) => ({
	type: actionTypes.CHANGE_DISCOVER_RECOMMEND_NEWSONG,
	newSong: res.playlist,
})
const changeDiscoverRecommendOriginalAction = (res) => ({
	type: actionTypes.CHANGE_DISCOVER_RECOMMEND_ORIGINAL,
	original: res.playlist,
})

export const getDiscoverRecommendTopListAction = (idx) => {
	return (dispatch) => {
		getDiscoverRecommendMusicCharts(idx).then((res) => {
			switch (idx) {
				case 0:
					dispatch(changeDiscoverRecommendSoaringAction(res));
					break;
				case 2:
					dispatch(changeDiscoverRecommendNewSongAction(res));
					break;
				case 3:
					dispatch(changeDiscoverRecommendOriginalAction(res));
					break;
				default:
			}
		});
	};
};

const changeDiscoverRecommendHotSingerAction = (res) => ({
	type: actionTypes.CHANGE_DISCOVER_RECOMMEND_HOT_SINGER,
	hotSinger: res.artists
})

export const getDiscoverRecommendHotSingerAction = (limit) => {
	return (dispatch) => {
		getDiscoverRecommendHotSinger(limit).then((res) => {
			dispatch(changeDiscoverRecommendHotSingerAction(res));
		})
	}
}

const changeDiscoverRecommendHotDJAction = (res) => ({
	type: actionTypes.CHANGE_DISCOVER_RECOMMEND_RADIO_STATION,
	radioStation: res.data.list
})

export const getDiscoverRecommendHotDJAction = (limit) => {
	return (dispatch) => {
		getDiscoverRecommendHotDJ(limit).then((res) => {
			dispatch(changeDiscoverRecommendHotDJAction(res))
		})
	}
}
