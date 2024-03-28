import React from "react";
import PostWrapper from "../components/PostWrapper";
import { useSelector } from "react-redux";
import { postSelector } from "../redux/postReducer";

const Home = () => {
	const { posts } = useSelector(postSelector);
	console.log(posts);
	if (!posts) {
		return <></>;
	}
	return (
		<div className="rightpane">
			{posts.map((post) => (
				<PostWrapper key={post.id} post={post}></PostWrapper>
			))}
			{/* <PostWrapper></PostWrapper>
			<PostWrapper></PostWrapper>
			<PostWrapper></PostWrapper>
			<PostWrapper></PostWrapper> */}
		</div>
	);
};

export default Home;
