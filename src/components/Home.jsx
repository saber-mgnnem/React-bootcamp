import React from 'react'
import './App.css'
import {  Link } from "react-router-dom";
import  {useEffect , useState} from 'react';
import axios from "axios";

function Home() {
  const [Event, setEvent] = useState([]);
  const [user, setuser] = useState([]);

  useEffect(()=>{
      axios.get('http://localhost:3000/Event')
      .then(re => setEvent(re.data))
      .catch(err => console.log(err));
      console.log(Event);
  },[])

  return (
<div className="card-list">
{
    Event.map((e,i) =>(
        <div className="card"key={i}>
            <img src={e.image} alt={e.title} class="card-image" />
            <div className="card-content">
                <h2 className="card-title"><span >Title :</span>{e.title}{}</h2>
                <p className="card-text">{e.date} / <span>{e.location}</span></p>
                <Link to={`/add_participant/${e.id}`} className='button'>Participe</Link>

            </div>
        </div>
 ))
}
        
</div> 
 )
}

export default Home