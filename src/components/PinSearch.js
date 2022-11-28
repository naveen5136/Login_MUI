
import { useState,useEffect} from 'react'
import axios from "axios";

export default function PinSearch() {
  const[input,setInput]=useState('')
  const[pin,setPin] =useState([])
 
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(input) 
 axios.get(`https://api.postalpincode.in/pincode/${input}`)
  .then(resp=> setPin(resp.data))
  console.log("pin",pin)
}


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <h1>Search Pin Code</h1>
      <input  onChange={(e)=>setInput(e.target.value)}/>
      {input}
      <button type="submit"> submit </button>
      
      {pin.map((item,index)=>(
        <ul key={index}>{item.PostOffice.map((list,index)=>(<li key={index}>{list.Name}</li>))}</ul>
      ))}
      </form>
    </div>
  );
}
