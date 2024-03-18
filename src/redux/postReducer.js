import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPostsAsynkThunk = createAsyncThunk("getPosts", async () => {
	try {
		return fetch("http://localhost:8080/post/get-posts", {
			credentials: "include",
		}).then((response) => response.json());
	} catch (err) {
		console.log(err);
	}
});

// export const userSignUpAsynkThunk = createAsyncThunk(
// 	"userSignUp",
// 	async (args) => {
// 		try {
// 			const { signUpForm } = args;
// 			console.log(signUpForm);
// 			return fetch("http://localhost:8080/user/sign-up", {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json", // Specify content type as JSON
// 				},
// 				credentials: "include",
// 				body: JSON.stringify(signUpForm),
// 			}).then((response) => response.json());
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	}
// );

const postSlice = createSlice({
	name: "post",
	initialState: { posts: [] },
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getPostsAsynkThunk.fulfilled, (state, action) => {
			state.posts = action.payload.data;
			console.log(state.posts);
		});
	},
});

export const postReducer = postSlice.reducer;

export const postSelector = (state) => state.postReducer;

// const response = await fetch(
// 	"http://localhost:8080/user/user-with-posts",
// 	{
// 		credentials: "include",
// 	}
// );
