import request from "../request";

export function getAnchorStationCategory() {
	return request({
		url: "/dj/catelist",
	})
}

export function getAnchorStationRecommendProgram() {
	return request({
		url: "/program/recommend"
	})
}
