import React from 'react';
import { MDBDataTableV5, MDBBtn } from 'mdbreact';
import { useState } from 'react';

const SetPrice = (props) => {
    const [model, setModel]= useState('')
    const [pricePerDay, setPricePerDay] = useState('')
    const [pricePerMonth, setPricePerMonth] = useState('')
    const [deposit, setDeposit] = useState('')
    const values =['Aerox', 'Click', 'Forza','XMAX', 'NMAX', "PCX", 'Filano','Scoopy','Zoomer']
    const setPrice = () => {
        const prices = {
            model,
            pricePerDay,
            pricePerMonth,
            deposit
        }
        props.setPriceThunk(prices)
    }
    
    const data = {
        columns: [
          {
            label: 'Model',
            field: 'model',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Price per Day',
            field: 'dayly',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Price per month',
            field: 'monthly',
            sort: 'asc',
            width: 200
          },
          {
            label: 'deposit',
            field: 'deposit',
            sort: 'asc',
            width: 100
          },
          {
            label: '',
            field: 'btn',
            sort: 'asc',
            width: 100
          }
        ],
        rows: [{
        "model": 
        <select name='model' onChange={e=>setModel(e.target.value)} >
        <option value={model}  selected >Choose model</option>
        {values.map(s => <option value={s}>{s}</option> )}
        </select> , 
        dayly:<input name='pricePerDay' placeholder='Dayly price' onChange={e=>setPricePerDay(e.target.value)} />, 
        monthly:<input name='pricePerMonth' placeholder='Monthly price' onChange={e=>setPricePerMonth(e.target.value)} />,
        deposit:<input name='deposit' placeholder='Deposit' onChange={e=>setDeposit(e.target.value)}/> ,
        btn:<MDBBtn color='green' size='sm' onClick={setPrice}>Set price</MDBBtn>   
    }]
    
      };
    return (
        <div>
             <MDBDataTableV5 hover fullPagination={false} sortable={false} searchBottom={false} data={data}  />
        </div>
    );
}

export default SetPrice
