import React from "react";
import { userSelector } from "../redux/userReducer";
import { useSelector } from "react-redux";

const PostWrapper = ({ post }) => {
	const user = useSelector(userSelector);

	const postData = {
		avatar:
			"https://media.licdn.com/dms/image/D4E22AQG_LLOMJCDi8g/feedshare-shrink_2048_1536/0/1705507031406?e=2147483647&v=beta&t=w-fx9voRK0hUABScc8bdmel1uTMbhu6XSs0yE4xKRv4",
		content:
			"https://i.pinimg.com/originals/3a/2a/87/3a2a8777656322c7b55b474b514ccac8.jpg",
	};

	return (
		<div className="post-wrapper">
			<div className="avatar-name-wrapper">
				<div className="post-avatar">
					<img src={postData.avatar} alt="profile-pic"></img>
				</div>
				<div className="">
					<span className="post-author-name">{post.author.username}</span>
					<span className="time-of-post"> min</span>
				</div>
			</div>
			<div className="post-content">
				<img src={postData.content} alt="content"></img>
			</div>
			<div className="like-comment-share-bookmark-wrapper">
				<div className="like-share-comment-wrapper">
					<div className="like-icon">
						<svg
							aria-label="Notifications"
							className="x1lliihq x1n2onr6 x5n08af"
							fill="currentColor"
							height="24"
							role="img"
							viewBox="0 0 24 24"
							width="24"
						>
							<title>Notifications</title>
							<path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
						</svg>
						
					</div>
					<div className="comment-icon">
						<svg
							aria-label="Comment"
							className="x1lliihq x1n2onr6 x5n08af"
							fill="currentColor"
							height="24"
							role="img"
							viewBox="0 0 24 24"
							width="24"
						>
							<title>Comments</title>
							<path
								d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
								fill="none"
								stroke="currentColor"
								strokeLinejoin="round"
								strokeWidth="2"
							></path>
						</svg>
					</div>
					<div className="share-icon">
						<svg
							aria-label="Direct"
							className="x1lliihq x1n2onr6 x5n08af"
							fill="currentColor"
							height="24"
							role="img"
							viewBox="0 0 24 24"
							width="24"
						>
							<title>Direct</title>
							<line
								fill="none"
								stroke="currentColor"
								strokeLinejoin="round"
								strokeWidth="2"
								x1="22"
								x2="9.218"
								y1="3"
								y2="10.083"
							></line>
							<polygon
								fill="none"
								points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
								stroke="currentColor"
								strokeLinejoin="round"
								strokeWidth="2"
							></polygon>
						</svg>
					</div>
				</div>
				<div className="bookmark">
					<svg
						aria-label="Save"
						className="x1lliihq x1n2onr6 x5n08af"
						fill="currentColor"
						height="24"
						role="img"
						viewBox="0 0 24 24"
						width="24"
					>
						<title>Save</title>
						<polygon
							fill="none"
							points="20 21 12 13.44 4 21 4 3 20 3 20 21"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						></polygon>
					</svg>
				</div>
			</div>
			<div className="likes-count">{post.likes.length} likes</div>
			<div className="post-title">
				<span className="post-author-name">{post.author.username}</span>&nbsp;{" "}
				{post.title}
			</div>
			<div className="view-comments-link">
				{" "}
				View all {post.comments.length} comments
			</div>
			{/* <div className="comments-collapsed"></div> */}
			<div className="add-comment-input">
				<input placeholder="Add a Comment..."></input>
				<p>Post</p>
			</div>
			<hr></hr>
		</div>
	);
};

export default PostWrapper;
