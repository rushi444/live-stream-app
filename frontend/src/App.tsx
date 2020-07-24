import React from 'react';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <ReactPlayer
            url='https://www.twitch.tv/bjergsen'
            playing={true}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
