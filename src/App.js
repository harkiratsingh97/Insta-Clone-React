import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";
import Home from "./pages/Home";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "./redux/userReducer";
import { getPostsAsynkThunk } from "./redux/postReducer";

function App() {
	const router = createBrowserRouter([
		{
			path: "",
			element: <Sidebar />,
			children: [
				{
					path: "",
					element: <Home />,
				},
			],
		},
		{
			path: "sign-up",
			element: <SignUp />,
		},
		{
			path: "sign-in",
			element: <SignIn />,
		},
	]);

	const { user } = useSelector(userSelector);

	const dispatch = useDispatch();

	useEffect(() => {
		console.log(user);
		// dispatch(getUserAsyncThunk());
		if (user) {
			dispatch(getPostsAsynkThunk());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
