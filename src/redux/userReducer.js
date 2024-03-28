import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserAsyncThunk = createAsyncThunk("getUser", async () => {
	try {
		return fetch("http://localhost:8080/user/get-user").then((response) =>
			response.json()
		);
	} catch (error) {
		console.log(error);
	}
});

export const userLoginAsynkThunk = createAsyncThunk(
	"userLogin",
	async (args) => {
		try {
			const { signInForm } = args;
			console.log(signInForm);
			return fetch("http://localhost:8080/user/sign-in", {
				method: "POST",
				headers: {
					"Content-Type": "application/json", // Specify content type as JSON
				},
				credentials: "include",
				body: JSON.stringify(signInForm),
			}).then((response) => response.json());
		} catch (err) {
			console.log(err);
		}
	}
);

export const userSignUpAsynkThunk = createAsyncThunk(
	"userSignUp",
	async (args) => {
		try {
			const { signUpForm } = args;
			return fetch("http://localhost:8080/user/sign-up", {
				method: "POST",
				headers: {
					"Content-Type": "application/json", // Specify content type as JSON
				},
				credentials: "include",
				body: JSON.stringify(signUpForm),
			}).then((response) => response.json());
		} catch (err) {
			console.log(err);
		}
	}
);

const userSlice = createSlice({
	name: "user",
	initialState: { user: null },
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(userLoginAsynkThunk.fulfilled, (state, action) => {
			state.user = action.payload.user;
		});

		builder.addCase(getUserAsyncThunk.fulfilled, (state, action) => {
			state.user = action.payload.user;
		});

		builder.addCase(userSignUpAsynkThunk.fulfilled, (state, action) => {
			state.user = action.payload.user;
		});
	},
});

export const userReducer = userSlice.reducer;

export const userSelector = (state) => state.userReducer;

// const response = await fetch(
// 	"http://localhost:8080/user/user-with-posts",
// 	{
// 		credentials: "include",
// 	}
// );
