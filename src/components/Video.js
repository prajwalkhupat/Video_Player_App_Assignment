import React, { useEffect, useState, useRef } from "react";
import { useVideoContext } from "./VideoContext";

const Video = () => {
  const { video } = useVideoContext();
  const [videoData, setVideoData] = useState(video);
  const videoRef = useRef(null);

  useEffect(() => {
    setVideoData(video);
  }, [video]);

  useEffect(() => {
    setVideoData((prevVideo) => ({
      ...prevVideo,
      sources: video.sources,
    }));

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [video.sources]);

  return (
    <div className="video-container w-full lg:w-[70%] bg-slate-700">
      <video ref={videoRef} className="w-full h-auto rounded-lg" controls={true}>
        <source src={videoData.sources} type="video/mp4" />
        <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
        Your browser does not support the video tag.
      </video>
      <div className="info mt-5">
        <div className="title text-3xl font-semibold text-gray-100">{videoData.title}</div>
        <div className="subtitle text-amber-200">{videoData.subtitle}</div>
        <div className="description text-gray-400 mt-5">{videoData.description}</div>
      </div>
    </div>
  );
};

export default Video;
