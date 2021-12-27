import React, {useState} from 'react';
import Showcase from './components/Showcase';
import MusicButton from './components/MusicButton';
import MusicList from './components/MusicList';
import ReactPlayer from 'react-player';

function App() {

  const [musicList, setMusicList] = useState([])

  return (
    <div className="App">
      <header>
        <h1 className="text-5xl font-bold text-center">React Music</h1>
      </header>

      <Showcase></Showcase>
      <MusicButton
        musicList={musicList}
        setMusicList={setMusicList}
      />
      <MusicList
        musicList={musicList}
      />
    </div>
  );
}

export default App;
