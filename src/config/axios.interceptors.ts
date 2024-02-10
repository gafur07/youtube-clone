import axios from "axios"

export const baseURL = "https://www.googleapis.com/youtube/v3"
// key: AIzaSyCsUBl7MGq9eCgNgiZFY6Efxh4gpo2MbpE,

export const axiosAPI = axios.create({
	baseURL,
	params: {
		part: "snippet",
		maxResults: 50,
		key: "AIzaSyCsUBl7MGq9eCgNgiZFY6Efxh4gpo2MbpE",
	}
})