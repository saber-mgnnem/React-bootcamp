import axios from "axios";
import React ,{useEffect , useState} from 'react';

function Participant() {
    const [Participant, setParticipant] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/Participant')
        .then(res => setParticipant(res.data))
        .catch(err => console.log(err));
    },[])
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-20'>
        <h1>List of Participant</h1>
        <div className="w-75 rounded bg-white border shadow p-4">
        <table className="table table-sm">
<thead>
<tr>

  <th scope="col">#Id</th>
  <th scope="col">Event Id</th>
  <th scope="col">name</th>
  <th scope="col">Payment Status</th>
  <th scope="col">Location</th>
  <th scope="col">Action</th>

</tr>
</thead>
<tbody>
                    {
                        Participant.map((e,i) =>(
                            <tr key={i}>
                                <th scope="row">{e.id}</th>
                                <th scope="row">{e.event}</th>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.paymentStatus}</td>
                                <td>{e.phone}</td>
                                <td>
                                    <button className="btn btn-sm btn-info me-2">Read</button>
                                    <button className="btn btn-sm btn-primary me-2">Edit</button>
                                    <button className="btn btn-sm btn-danger">Delete</button>

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
  
  export default Participant;
  