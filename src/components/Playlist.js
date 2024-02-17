import React, { useState, useRef } from "react";
import { useVideoContext } from "./VideoContext";
import { videos } from "../utils/constants";

const Playlist = () => {
  const { handleSetVideo } = useVideoContext();
  const [playlist, setPlaylist] = useState(videos);

  const dragVideo = useRef(0);
  const draggedOverVideo = useRef(0);

  const handleSort = () => {
    const playlistClone = [...playlist];
    const temp = playlistClone[dragVideo.current];
    playlistClone[dragVideo.current] = playlistClone[draggedOverVideo.current];
    playlistClone[draggedOverVideo.current] = temp;
    setPlaylist(playlistClone);
  };

  return (
    <div className="playlist-container max-h-[calc(100vh-200px)] bg-slate-700 overflow-y-scroll w-full lg:w-[30%] mt-10 lg:mt-0 pt-0 p-5">
      {playlist.map((video, index) => (
        <div
          key={video.sources}
          className="cursor-pointer"
          draggable
          onDragStart={() => (dragVideo.current = index)}
          onDragEnter={() => (draggedOverVideo.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => {
            handleSetVideo(video);
          }}
        >
          <div>
            <img src={video.thumb}  className="ml-9 w-[250px] aspect-[15/9] rounded-lg"
        alt="thumbnail"/>
            <p className="title font-semibold text-neutral-100 text-center">Title: {video.title}</p>
            <p className="subtitle text-xs mt-1 text-amber-200 pb-8 text-center" >Subtitle: {video.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
