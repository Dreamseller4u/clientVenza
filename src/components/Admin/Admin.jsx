import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import Preloder from '../common/Preloder/preloder';
import style from './style.module.css'
import format from 'date-format'

const Admin = (props) => {
    if (!props.bikes || !props.bookings){
        return <Preloder />
    }
   const availiblesBikes =  props.bikes.filter(b => b.isAvailible === true).length
   const busyBikes = props.bikes.filter(b => b.isAvailible === false).length
   const confirmedBooking = props.bookings.filter( b => b.confirmed === true).length
   const waitingBooking = props.bookings.filter( b => b.confirmed === false).length
    const state1 = {
        dataDoughnut: {
          labels: ["In rent", "Availibles",],
          datasets: [
            {
              data: [busyBikes, availiblesBikes],
              backgroundColor: ["#2e7d32", "#66bb6a"],
                hoverBackgroundColor: [
                "#388e3c",
                "#81c784"
              ]
            }
          ]
        }
    }
    const state2 = {
        dataDoughnut: {
          labels: ["Confirmed bookings", "Waiting for confirm",],
          datasets: [
            {
              data: [confirmedBooking, waitingBooking],
              backgroundColor: ["#ffc107", "#ff6f00"],
                hoverBackgroundColor: [
                "#ffca28",
                "#ff8f00"
              ]
            }
          ]
        }
    }
    const confBooking = props.bookings.filter(b => b.confirmed === true)
    return (
        <div>
       
            <MDBContainer>
                <h3>Statistics</h3> 
                <hr/>
                <MDBRow>
                    <MDBCol>
                        <h3 className="mt-5">Bikes chart</h3>
                        <Doughnut data={state1.dataDoughnut} options={{ responsive: true }} />
                        <p style={{textAlign:'center'}}>Total : 
                        <span>{props.bikes.length}</span></p>
                    </MDBCol>
                    <MDBCol>
                    <h3 className="mt-5">Booking chart</h3>
                        <Doughnut data={state2.dataDoughnut} options={{ responsive: true }} />
                        <p style={{textAlign:'center'}}>Total : 
                        <span>{props.bookings.length}</span></p>
                    </MDBCol>
                </MDBRow>
                <h3>Delivery and Return</h3>
                <hr/>
                <MDBRow>
                    <MDBCol>
                    {confBooking.map(b=> 
                    (Math.floor((new Date(b.startDate).getTime() - new Date().getTime())/ 1000 / 60 / 60 / 24) <= 3
                     && Math.floor((new Date(b.startDate).getTime() - new Date().getTime())/ 1000 / 60 / 60 / 24) >= 0 ) 
                    ?  <div className={style.deliveryBox}>
                            <h3>{b.model + ' #' + b.plateNumber}</h3>
                            <p>Customer: <span>{b.name}</span> <span>{b.phone}</span></p>
                            <p>Date: <span>{format('dd.MM.yyyy',new Date(b.startDate))}</span> Time: <span>{format('hh:mm',new Date(b.startDate))}</span></p>
                            <p>Delivery to: <span>{b.address}</span></p>
                        </div>
                    : null
                    
                    )}
                    </MDBCol>
                    <MDBCol>
                    {confBooking.map(b=> 
                    ( Math.floor((new Date(b.endDate).getTime() - new Date().getTime())/ 1000 / 60 / 60 / 24)  <= 3 
                    && Math.floor((new Date(b.endDate).getTime() - new Date().getTime())/ 1000 / 60 / 60 / 24)  >= 0  )
                    ?  <div className={style.returnBox}>
                            <h3>{b.model + ' #' + b.plateNumber}</h3>
                            <p>Customer: <span>{b.name}</span> <span>{b.phone}</span></p>
                            <p>Date: <span>{format('dd.MM.yyyy',new Date(b.endDate))}</span> Time: <span>{format('hh:mm',new Date(b.endDate))}</span></p>
                            <p> Return from: <span>{b.address}</span></p>
                        </div>
                    : null
                    )}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Admin;
