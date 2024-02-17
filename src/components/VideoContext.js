// VideoContext.js
import React, { createContext, useContext, useState } from "react";
import { videos } from "../utils/constants";


const VideoContext = createContext();

export const useVideoContext = () => {
  return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
  const [video, setVideo] = useState(videos[0]); // Set the initial video

  const handleSetVideo = (vid) => {
    setVideo(vid);
  };

  return (
    <VideoContext.Provider value={{ video, handleSetVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
