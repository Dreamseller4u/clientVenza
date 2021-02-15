import React from 'react'
import Preloder from '../../common/Preloder/preloder'
import BookingModal from './BookingModal'
import format from 'date-format'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { useState } from 'react'
import { MDBDataTableV5, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const Booking = (props) => {
    const deleteBookingHundler = (id) => {
        props.deleteBookingThunk(id)
    }
    const [type, setType] = useState('confirmed')
    const[modal, setModal] = useState(false)
    const[modal2, setModal2] = useState(false)
    const [content, setContent] = useState(null)
    const toggle = (cont) => {
        setModal(!modal)
        if(cont){
            setContent(cont)
        }
    }
    const toggle2 = () => {
      setModal2(!modal2)
  }
  const  setPhotoToUpdate = (id, passportImg,visaImg) =>  {
     const data = {id ,passportImg, visaImg}
     props.updatePhotoPass(data)
    }
    if (!props.booking) {
        return <Preloder />
    }
   
    const data = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Address',
            field: 'address',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Bike',
            field: 'bike',
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
            label: 'Start Date',
            field: 'startDate',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Finish Date',
            field: 'endDate',
            sort: 'asc',
            width: 100
          },
          {
            label: '',
            field: 'buttons',
            sort: 'asc',
            width: 200
          }
        ],
        rows: props.booking.map(b => (
          (type === 'confirmed') ? 
          ((b.confirmed) ? {name: b.name, address:b.address, bike:b.brand + ' ' + b.model, plateNumber:b.plateNumber, 
            startDate:format('dd.MM.yyyy',new Date(b.startDate)), endDate:format('dd.MM.yyyy',new Date(b.endDate)),
            buttons:<div><MDBIcon  onClick={()=>toggle(b)} className=" mr-3" size='lg' far icon="address-card" />
                    <MDBIcon  onClick={()=>deleteBookingHundler(b._id)} className="red-text mr-3" size='lg' far icon="trash-alt" />
                    </div>
     } : '')
     : ((!b.confirmed) ? {name: b.name, address:b.address, bike:b.brand + ' ' + b.model, plateNumber:b.plateNumber, 
     startDate:format('dd.MM.yyyy',new Date(b.startDate)), endDate:format('dd.MM.yyyy',new Date(b.endDate)),
     buttons:<div><MDBIcon  onClick={()=>toggle(b)} className=" mr-3" size='lg' far icon="address-card" />
             <MDBIcon  onClick={()=>deleteBookingHundler(b._id)} className="red-text mr-3" size='lg' far icon="trash-alt" />
             </div>
} : ''))
     
     )
      };
    return (
        <>
        <MDBContainer> 
          <MDBModal isOpen={modal2} toggle={()=>toggle2()} fullHeight position="right">
            <MDBModalBody>
              <NavLink to='/backend/booking/create'>
                  <MDBBtn className='col 12' color="primary">Add new booking</MDBBtn>
              </NavLink>
              <MDBBtn  className='col 12' color="primary" onClick={()=>setType('confirmed')}>Confirmed Bookings</MDBBtn>
              <MDBBtn  className='col 12' color="primary" onClick={()=>setType('')}>Customers Bookings</MDBBtn>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={()=>toggle2()}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      
        <div style={{textAlign: 'center'}}>
          {(type === 'confirmed') 
        ? <h3 onClick={()=>toggle2()}>Confirmed booking</h3>
        : <h3 onClick={()=>toggle2()}>New not confirmed booking</h3> }
        </div>
        <MDBDataTableV5 hover searchTop  sortable={false} searchBottom={false} data={data}  />
        <MDBContainer >
        <MDBModal isOpen={modal} toggle={toggle} size="fluid" backdrop={true}>
         <MDBModalHeader toggle={toggle}>Contract</MDBModalHeader>
            <MDBModalBody >
              <BookingModal bee={content} update={props.updateBookingThunk} setPhotoToUpdate={setPhotoToUpdate}
               confirm={props.confirmBookingThunk}/>
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
        </MDBContainer>
      </>
    )
}

export default Booking
