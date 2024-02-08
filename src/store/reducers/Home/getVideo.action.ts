import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosAPI, baseURL } from "../../../config/axios.interceptors";

export const getAllVideo = createAsyncThunk(
	"fetshAllVideo",
	async(video, thunkApi) => {
		try {
			const response = await axiosAPI.get(`${baseURL}/search`, {
				params: {
					q: video
				}
			})
			return response.data.items
		} catch (err) {
			return thunkApi.rejectWithValue(err)
		}
	}
)

