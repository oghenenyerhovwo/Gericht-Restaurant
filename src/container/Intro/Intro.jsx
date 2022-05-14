import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      videRef.current.pause();
    } else {
      videRef.current.play();
    }
  };
  return (
    <div className="app_video">
      <video
        src={meal}
        ref={videRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app_video-overlay flex__center">
        <div onClick={handleVideo} className="app_video-overlay_circle flex__center">
          {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
