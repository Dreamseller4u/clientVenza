import React,{useState}from 'react'
import { MDBDataTableV5, MDBBtn } from 'mdbreact';
import Preloder from '../../common/Preloder/preloder';

function Location(props) {
    const [name, setName] = useState('')
    const [low, setLow] = useState('')
    const [high, setHigh] = useState('')
    if(!props.location){
        return <Preloder />
    }
    const data = {
        columns: [
          {
            label: 'Location',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Delivery price low then 7 days',
            field: 'low',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Delivery price high then 7 days',
            field: 'high',
            sort: 'asc',
            width: 200
          }
        ],
        rows: props.location.map(l => ({name: l.name, low:l.low, high: l.high})) 

      };
      const handleSubmit = ()=>{
          let locationData = {name, low, high}
          console.log(locationData)
          props.addNewLocationThunk(locationData)
      }
      

    return (
      <>
        <div>
            <h3>Location list</h3>

            <MDBDataTableV5 hover searchTop sortable={false} searchBottom={false} data={data}  />
            <input type="text" name='name' placeholder='Location' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" name='low' placeholder='Price low then 7 days' onChange={(e)=>setLow(e.target.value)}/>
            <input type="text" name='high' placeholder='Price High then 7 days' onChange={(e)=>setHigh(e.target.value)} />
            <MDBBtn onClick={handleSubmit} >Add new</MDBBtn>
        </div>
        </>
    )
}

export default Location
