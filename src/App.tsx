import React from 'react';

import videoSrc from './assets/video.mp4';

function App() {
  const video = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    console.log(video.current)
  },[])

  return (
    <div>
      <h1>Exercício da Aula 303</h1>
      <br />
      <div className='flex'>
        <button onClick={() => video.current?.play()}>Play</button>
        <button onClick={() => video.current?.pause()}>Pause</button>
      </div>
      <br />
      <video ref={video} src={videoSrc}></video>
    </div>
  );
}

export default App;
