import { createSlice } from "@reduxjs/toolkit"
import { getComment } from "./comment.action"

const initialState = {
	comment: [],
	loading: false
}

export const commentSlice = createSlice({
	name: "comment",
	initialState,
	reducers:{},

	extraReducers: builder => {
		builder
		.addCase(getComment.pending, state => {
			state.loading = true
		})
			.addCase(getComment.fulfilled, (state, action) => {
				state.comment = action.payload
			})
			.addCase(getComment.rejected, state => {
				state.loading = false
			})
	}
})

export default commentSlice.reducer