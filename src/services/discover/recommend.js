import request from "../request";
// 轮播图
export function getDiscoverRecommendBanners() {
  return request({
    url: "/banner",
  });
}

// 热门推荐
export function getDiscoverRecommendHot(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

// 新碟上架
export function getDiscoverRecommendNewDvd(limit) {
  return request({
    url: "/top/album",
    params: {
      limit,
    },
  });
}

// 音乐排行榜
export function getDiscoverRecommendMusicCharts(idx) {
  return request({
    url: "/top/list",
    params: {
      idx,
    },
  });
}

