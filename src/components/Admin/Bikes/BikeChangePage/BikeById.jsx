import React, { useState, useEffect } from 'react'
import Preloder from '../../../common/Preloder/preloder'
import style from './style.module.css'
import {MDBCol, MDBRow, MDBBtn} from 'mdbreact'


const BikeById = (props) => {
    const [edit, setEdit] = useState(false)
    const [plateNumber, setPlateNumber] = useState('')
    const [pricePerDay, setPricePerDay] = useState('')
    const [pricePerMonth, setPricePerMonth] = useState('')
    const [deposit, setDeposit] = useState('')
    useEffect(() => {
        if(props.bikeById){
           setPlateNumber(props.bikeById.plateNumber) 
           setPricePerDay(props.bikeById.pricePerDay) 
           setPricePerMonth(props.bikeById.pricePerMonth) 
           setDeposit(props.bikeById.deposit) 
        }
    }, [props.bikeById]);
    const changeHundleDay = (e) => {
        setPricePerDay(e.target.value)
    }
    const changeHundleMonth = (e) => {
        setPricePerMonth(e.target.value)
    }
    const changeHundleNumber = (e) => {
        setPlateNumber(e.target.value)
    }
    const changeHundleDeposit = (e) => {
        setDeposit(e.target.value)
    }
    const saveHundle = () => {
        setEdit(false)
        props.bikeById.pricePerDay = pricePerDay
        props.bikeById.pricePerMonth = pricePerMonth
        props.bikeById.deposit = deposit
        props.bikeById.plateNumber = plateNumber
       const _id = props.bikeById._id
        const data = {
            plateNumber,
            pricePerDay,
            pricePerMonth,
            deposit,
            _id
        }
        props.updateBikeThunk(data)
    }
    const setPrimary = (_id,img) => {
       props.setPrimaryThunk(_id,img)
       props.bikeById.mainImage = img
    } 
    if (!props.bikeById) {
        return <Preloder />
    }
    return (
        <>
        <MDBRow>
                <MDBCol size='4' className={style.images}>
                        <a href="#img1">
                         <img  src={'http://localhost:4000/' + props.bikeById.mainImage} className={style.thumbnail}/>
                        </a>
                        <a href="#_" className={style.lightbox} id="img1">
                        <img   src={'http://localhost:4000/' + props.bikeById.mainImage} alt="" />
                        </a>
                        <div className={style.anotherPhoto}>
                             {   (props.bikeById.images) 
                                    ? props.bikeById.images.map( i => 
                                                    <div className={style.thumb}>
                                                        <a href={"#img"+ i}>
                                                            <img   src={'http://localhost:4000/' + i} alt="" />
                                                         </a>
                                                         <a href="#_" className={style.lightbox} id={"img"+ i}>
                                                             <img   src={'http://localhost:4000/' + i} alt="" />
                                                             <MDBBtn onClick={()=>setPrimary(props.bikeById._id, i)}>Set Primary</MDBBtn>
                                                          </a>
                                                    </div>)
                                     :              <div className={style.thumb}>
                                                     <img   src='https://icon2.cleanpng.com/20180219/kle/kisspng-car-wheel-motorcycle-vector-motorcycle-5a8abe306c55a7.8814570615190420964438.jpg' alt="" />
                                                    </div>              
                                     }
                        </div>
                    </MDBCol>
                    <MDBCol className={style.content + ' ' + "col s9"}>
                        <p className={style.title}>{props.bikeById.brand + ' ' + props.bikeById.model 
                        + ' #'}{(!edit) ? plateNumber 
                        : <input type="text" value={plateNumber} onChange={changeHundleNumber} />}</p>
                       
                       <p>Price per day :  {(!edit) 
                       ? <span >{props.bikeById.pricePerDay}</span> 
                       : <span><input type="text" name='perDay' value={pricePerDay} onChange={changeHundleDay}/></span> } </p>  
                       
                        <p>Price per month : {(!edit) 
                       ? <span >{props.bikeById.pricePerMonth}</span> 
                       : <span><input type="text" value={pricePerMonth} onChange={changeHundleMonth}/></span> } </p> 

                        <p>Deposit :  {(!edit) 
                       ? <span >{props.bikeById.deposit}</span> 
                       : <span><input type="text" value={deposit} onChange={changeHundleDeposit}/></span> } </p> 

                        <p>Is Availible : <span>{(props.bikeById.isAvailible) ? 'Yes' : "Busy"}</span> </p>  
                        {(edit) ? <MDBBtn onClick={saveHundle} color="dark-green">Save</MDBBtn> : <MDBBtn onClick={()=>setEdit(true)} color="dark-green">edit</MDBBtn>}
                    </MDBCol>
               </MDBRow> 
               <MDBRow>
                <MDBCol>
                    <h3>Bookings</h3>
                </MDBCol>
                </MDBRow>
                </>

    )
}

export default BikeById
