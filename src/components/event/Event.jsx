import axios from "axios";
import React ,{useEffect , useState} from 'react';
import {  Link, Navigate } from "react-router-dom";

function Event() {

    const [Event, setEvent] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/Event')
        .then(res => setEvent(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = (id)=>{
        const confirm = window.confirm("would you like to delete ?");
        if (confirm){
            axios.delete(`http://localhost:3000/Event/${id}`)
            .then(res =>{
                window.location.reload();
            }).catch(err => console.log(err));
        }
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-20'>
            <h1>List of event</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
            <table className="table table-sm">
  <thead>
    <tr>

      <th scope="col">#Id</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Date</th>
      <th scope="col">Location</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
                        {
                            Event.map((e,i) =>(
                                <tr key={i}>
                                    <th scope="row">{e.id}</th>
                                    <td>{e.title}</td>
                                    <td>{e.description}</td>
                                    <td>{e.price}</td>
                                    <td>{e.date}</td>
                                    <td>{e.location}</td>
                                    <td>
                                    {/* Display the image for the event */}
                                    <img src={e.image} alt={e.title} style={{ maxWidth: '50px' }} />
                                </td>
                                    <td>
                                       <Link to={`/eventRead/${e.id}`}className="btn btn-sm btn-info me-2">Read</Link>
                                        <Link to={`/eventUpdate/${e.id}`}className="btn btn-sm btn-primary me-2">Edit</Link>
                                        <button onClick={() => handleDelete(e.id)} className="btn btn-sm btn-danger">Delete</button>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
               </table>

           
            </div>
        </div>
    );
   
  }
  
  export default Event;
  