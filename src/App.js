import './App.css';
import AudioPlayer from './components/AudioPlayer';

function Header() {
  return (
    <header className="App-header">
      <div className="logo">
        Oznek
      </div>
      <nav className="nav">
        <ul className="navlist">
          <li>Sei la</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="audio-player-container">
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
