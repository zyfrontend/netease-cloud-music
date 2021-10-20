# 网易云音乐

## 

## 技术栈

- react
- react-router-dom
- react-router-config
- axios
- less
- less-loader
- redux
- react-redux
- redux-thunk
- redux-immutable
- immutable
- antd
- normalize.css

## 路由

## 接口

- 发现音乐(discover)
  - 推荐(recommend)
  - 排行榜(leaderboard)
  - 歌单(songlist)
  - 主播电台(anchorstation)
  - 歌手(singer)
  - 新碟上架(newdisc)
- 我的音乐(mine)
- 朋友(friend)

## 接口信息开发文档

> demo中用到的后端接口全部来自[网易云音乐API](https://binaryify.github.io/NeteaseCloudMusicApi/#/)

### 发现

- 轮播图

  ```js
  export function getDiscoverBanners() {
    return request({ 
      url: "/banner",
    });
  }
  ```

- 热门推荐

  ```js
  export function getDiscoverRecommends(limit) {
    return request({
      url: "/personalized",
      params: {
        limit,
      },
    });
  }
  ```

- 新碟上架

  ```js
  export function getDiscoverNewDvd(limit) {
    return request({
      url: "/top/album",
      params: {
        limit,
      },
    });
  }
  ```

- 音乐排行

  ```js
  export function getDiscoverMusicCharts(idx) {
    return request({
      url: "/top/list",
      params: {
        idx,
      },
    });
  }
  ```

- 热门歌手

  ```js
  export function getDiscoverHotSinger(limit) {
    return request({
      url: "/top/artists",
      params: {
        limit,
      },
    });
  }
  ```

- 热门主播

  ```js
  
  ```
  
- 播放音乐

  ```js
  export function getMusicDetail(ids) {
    return request({
      url: "/song/detail",
      params: {
        ids,
      },
    });
  }
  ```

### 排行榜

- 榜单列表

  ```js
  export function getLeaderBoardList() {
    return request({
      url: "/toplist",
    });
  }
  ```

- 榜单详情

  ```js
  export function getLeaderBoardListDetail(id) {
    return request({
      url: "/playlist/detail",
      params: {
        id,
      },
    });
  }
  ```

### 歌单

- 歌单分类 - /playlist/catlist
- 热门歌单分类 - /playlist/hot
- 歌单详情 - /playlist/detail/dynamic?id=24381616
