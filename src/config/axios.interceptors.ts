import axios from "axios"

export const baseURL = "https://www.googleapis.com/youtube/v3"
const key = "AIzaSyCsUBl7MGq9eCgNgiZFY6Efxh4gpo2MbpE"

export const axiosAPI = axios.create({
	baseURL,
	params: {
		part: "snippet, contentDetails, id, liveStreamingDetails, player, recordingDetails, statistics, topicDetails",
		maxResults: 50,
		chart: "mostPopular",
		key,
	}
})

export const axiosSearch = axios.create({
	baseURL,
	params: {
		part: "snippet, id",
		maxResults: 50,
		key
	}
})

export const axiosChannel = axios.create({
	baseURL,
	params: {
		part: "snippet, contentDetails, contentOwnerDetails, brandingSettings, localizations, statistics, status, topicDetails",
		key,
		maxResult: 50,
	}
})


export const axiosComment = axios.create({
	baseURL,
	params: {
		part: "snippet",
		key,
		maxResults: 100,
		textFormat: "plainText"
	}
})