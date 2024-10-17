import React, { useRef, useEffect, useState } from "react";

import urlVideo from "assets/video/company-profile-tkj-compressed.mp4";
import thumbnail from "assets/img/thumbnail-video.png";

const Video = () => {
	const videoRef = useRef(null);
	const [isInView, setIsInView] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "50px",
			threshold: 0.1,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					observer.unobserve(entry.target);
				}
			});
		}, options);

		if (videoRef.current) {
			observer.observe(videoRef.current);
		}

		return () => {
			if (videoRef.current) {
				observer.unobserve(videoRef.current);
			}
		};
	}, []);

	const handleVideoLoad = () => {
		setIsLoading(false);
	};

	return (
		<div className="max-w-4xl mx-auto pt-2">
			<div className="mt-4 text-center my-6">
				<h3 className="text-2xl font-semibold italic">"Real Impact for Every Client"</h3>
			</div>
			<div
				ref={videoRef}
				className="flex relative aspect-w-16 aspect-h-9rounded-lg items-center justify-center"
			>
				{isLoading && isInView && (
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
					</div>
				)}
				{isInView ? (
					<video
						className="w-10/12 h-10/12 rounded-lg shadow-lg object-cover"
						controls
						poster={thumbnail}
						preload="metadata"
						onLoadedData={handleVideoLoad}
					>
						{/* <source src="URL_VIDEO_WEBM" type="video/webm" /> */}
						<source src={urlVideo} type="video/mp4" />
						Browser Anda tidak mendukung tag video.
					</video>
				) : (
					<div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
						<p className="text-gray-500">Video akan dimuat saat terlihat</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Video;
