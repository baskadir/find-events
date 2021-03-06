import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home/home';
import EventsLayout from './components/events/events-layout';
import EventDetail from './components/events/detail/event-detail';
import EventsByPlace from './components/events/events-by-place';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/events" element={<EventsLayout/>}></Route>
          <Route path="/events/:id" element={<EventDetail/>}></Route>
          <Route path="/places/:id/events" element={<EventsByPlace/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;