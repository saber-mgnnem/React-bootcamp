import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/event/Event';
import Read  from './components/event/Read';
import Update from './components/event/Update';
import AjouterEvent from './components/event/AjouterEvent';
import Participant from './components/participant/Participant';
import AjouterParticipant from './components/participant/AjouterParticipant';
import Home from './components/Home';
import Register from './components/login/Register';
import Login from './components/login/Login';
import { Link } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import './components/App.css';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {user && user.role === 'admin' && (
          <>
            <Route path="/event" element={<Event />} />
            <Route path="/eventRead/:id" element={<Read />} />
            <Route path="/eventUpdate/:id" element={<Update />} />
            <Route path="/add_event" element={<AjouterEvent />} />
            <Route path="/participant" element={<Participant />} />
          </>
        )}
        {user && (
          <Route path="/add_participant/:id" element={<AjouterParticipant />} />
        )}
        {!user && (
          <Route path="*" element={
            <div className="Home">
              <p>Please log in to access this page</p>
              <Link to="/login" className="button">Login</Link>
            </div>
          } />
        )}

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
