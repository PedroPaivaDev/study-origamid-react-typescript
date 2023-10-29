import React from 'react';

import videoSrc from './assets/video.mp4';

function App() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);

  function handlePlayPause() {
    if(isPlaying) {
      video.current?.pause();
    } else {
      video.current?.play();
    }
    // setIsPlaying(!isPlaying);
  }

  function handleForward() {
    if(!video.current) return
    video.current.currentTime += 2;
  }

  function handleSpeed(speed:number) {
    if(!video.current) return
    video.current.playbackRate = speed;
  }

  async function handlePiP() {
    if(!video.current) return
    if(document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.current?.requestPictureInPicture();
    }
  }

  function handleMute() {
    if(!video.current) return
    // if(isMuted) {
    //   video.current.volume = 1
    // } else {
    //   video.current.volume = 0
    // }
    video.current.muted = !video.current.muted
    setIsMuted(!isMuted)
  }

  // React.useEffect(() => {
  //   video.current?.addEventListener('ended', () => setIsPlaying(false));
  //   return () => video.current?.removeEventListener('ended', () => setIsPlaying(false));
  // },[])

  return (
    <div>
      <h1>Exercício da Aula 303</h1>
      <br />
      <div className='flex'>
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={handleForward}>+ 2s</button>
        <button onClick={() => handleSpeed(1)}>x1</button>
        <button onClick={() => handleSpeed(2)}>x2</button>
        <button onClick={handlePiP}>PiP</button>
        <button onClick={handleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
      </div>
      <br />
      <video
        ref={video}
        src={videoSrc}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}

export default App;
