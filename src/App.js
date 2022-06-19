import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeLayout from './components/home-layout';
import Home from './components/home/home';
import EventsLayout from './components/events/events-layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/events" element={<EventsLayout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;