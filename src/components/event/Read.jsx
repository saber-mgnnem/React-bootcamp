import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import React ,{useEffect , useState} from 'react';
function Read () {
    const [Event, setEvent] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get('http://localhost:3000/Event/'+id)
        .then(res => setEvent(res.data))
        .catch(err => console.log(err));
        console.log(Event)
    },[])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
  <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded d-flex align-items-center'>
    <div className='me-4'>
      <img src={Event.image} alt={Event.title} style={{ maxWidth: '200px' }} />
    </div>
    <div>
      <h3>Detail of Event</h3>
      <div className='mb-2'>
        <strong>Title: {Event.title}</strong>
      </div>
      <div className='mb-2'>
        <strong>Description: {Event.description}</strong>
      </div>
      <div className='mb-2'>
        <strong>Price: {Event.price}</strong>
      </div>
      <div className='mb-2'>
        <strong>Date: {Event.date}</strong>
      </div>
      <div className='mb-2'>
        <strong>Location: {Event.location}</strong>
      </div>
      <div className='mb-2'>
        <Link to={`/eventUpdate/${id}`} className='btn btn-success'>Edit</Link>
        <Link to="/event" className='btn btn-primary ms-3'>Back</Link>
      </div>
    </div>
  </div>
</div>

  )
}
export default Read;

