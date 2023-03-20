import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ReactComponent as Logo } from './assets/logo.svg';
import  LaunchGrid from './features/launch-grid/LaunchGrid';
import './App.css';
import SpecificLaunch from './features/specific-launch/SpecificLaunch';

function App() {
  return (
    <div className='App'>
      <Logo className='App-logo' />
      <header className='App-header'>
        <h1>SpaceX Launches</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<LaunchGrid />} />
          <Route path="/:id" element={<SpecificLaunch />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
