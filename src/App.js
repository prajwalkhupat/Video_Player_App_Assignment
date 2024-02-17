// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Playlist from './components/Playlist';

const App = () => {
  return (
    <div className="bg-slate-700">
      <Navbar />
      <div className="max-w-[1330px] m-auto min-h-[calc(100vh-200px)] w-full px-[15px] py-10 lg:flex bg-slate-700">
        <Video />
        <Playlist />
      </div>
      <span className="pl-[110px] text-purple-300 text-[12px]">Created by - @Prajwal Khupat</span>
    </div>
  );
};

export default App;
