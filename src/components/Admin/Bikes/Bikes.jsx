import React from 'react';
import { MDBDataTableV5, MDBIcon } from 'mdbreact';
import Preloder from '../../common/Preloder/preloder';
import { NavLink } from 'react-router-dom';

const Bikes = (props) => {
 
if (!props.bikes) {
             return <Preloder />
  }
  const deleteBikeHundler = (id) => {
    props.deleteBike(id)
} 
  const data = {
    columns: [
      {
        label: 'Availible',
        field: 'availible',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Brand',
        field: 'brand',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Model',
        field: 'model',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Plate Number',
        field: 'plateNumber',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Dayly Price',
        field: 'pricePerDay',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Monthly Price',
        field: 'pricePerMonth',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Deposit',
        field: 'deposit',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Edit',
        field: 'edit',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Delete',
        field: 'delete',
        sort: 'asc',
        width: 100
      }
    ],
    rows: props.bikes.map(b => ({availible:(b.isAvailible)
       ? <MDBIcon icon="motorcycle" className="green-text mr-3" size='2x'/> 
       :  <MDBIcon icon="motorcycle" className="red-text mr-3" size='2x'/>
    
    , brand:b.brand, model:b.model, plateNumber:b.plateNumber, 
        pricePerDay:b.pricePerDay, pricePerMonth:b.pricePerMonth, deposit:b.deposit, edit:
        <NavLink to={`/backend/bikes/${b._id}`}>
          <MDBIcon icon="edit" size='lg' className="orange-text  mr-3"/>
         </NavLink>, 
        delete: <MDBIcon icon="trash-alt" className="red-text mr-3" onClick={()=>deleteBikeHundler(b._id)} size='lg'/>
       })) 
      

  };
  
  return (
      
    <MDBDataTableV5 hover searchTop  sortable={false} searchBottom={false} data={data}  />
    
  );
}

export default Bikes;




// import React  from 'react';
// import Preloder from '../../common/Preloder/preloder';
// import { NavLink } from 'react-router-dom';

// const Bikes = (props) => {
//     if (!props.bikes) {
//         return <Preloder />
//     }
//     const deleteBikeHundler = (e) => {
//         props.deleteBike(e.target.id)
//     } 
//     return (
//         <div>
//             <h3>Bikes list</h3>
//             <table className='highlight centered'>
//                 <thead>
//                     <tr>
//                         <th>Availible</th>
//                         <th>Brand</th>
//                         <th>Model</th>
//                         <th>Plate number</th>
//                         <th>Dayly price</th>
//                         <th>Monthly price </th>
//                         <th>Deposit</th>
//                     </tr>
//                 </thead>
//                 <tbody >
//                     {props.bikes.map(b =>

//                         <tr key={b._id}>
//                             <td style={(b.isAvailible)? {"borderBottom": "4px solid #4CAF50"} : {"borderBottom": "4px solid #F44336"}}>{(b.isAvailible) ? 'Free' : 'Busy'}</td>
//                             <td>{b.brand}</td>
//                             <td>{b.model}</td>
//                             <td>{b.plateNumber}</td>
//                             <td>{b.pricePerDay}</td>
//                             <td>{b.pricePerMonth}</td>
//                             <td>{b.deposit}</td>
//                             <td>
//                                 <NavLink to={`/backend/bikes/${b._id}`}><button className="btn-floating btn-small waves-effect waves-light green">
//                                     <i className="material-icons" id={b._id}>create</i></button>
//                                 </NavLink>
//                             </td>
//                             <td>
//                                 <button className="btn-floating btn-small waves-effect waves-light red" onClick={deleteBikeHundler}>
//                                 <i className="material-icons" id={b._id}>delete</i></button>
//                                 </td>
//                         </tr>
//                     )}

//                 </tbody>
//             </table>
//         </div>

//     )
// }
// export default Bikes;