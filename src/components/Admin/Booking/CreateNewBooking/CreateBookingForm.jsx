import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form';
import { InputField } from '../../../common/FormControl/InputField';
import { required } from '../../../../utils/Validator/validators';
import { DatePickerCustom } from '../../../common/FormControl/DatePickerCustom';
import Preloder from '../../../common/Preloder/preloder'
import AsyncSelectCustom from '../../../common/FormControl/AsyncSelectCustom';
import { connect } from 'react-redux'
import { SelecField } from '../../../common/FormControl/SelectField';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Camera from './camera'

const CreateBookingForm1 = (props) => {
    const [inputValue, setInputValue] = useState('')
    const [deposit, setDeposit] = useState('')
    const [price, setPrice] = useState('')
    const [totalDays, setTotalDays] = useState('')
    const [termRental, setTermRental] = useState('')
    const [alreadyPaid, setAlreadyPaid] = useState('0')
    const [payOnArriva, setPayOnArrival] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date().setDate(startDate.getDate() + 3))
    const [modal, setModal] = useState(false)


    let fuel = [{name:'full'},{name:'1/2'},{name:'1/3'},{name:'empty'}]
    let helmets = [{name:'none'},{name:'1'},{name:'2'},{name:'3'}]

    useEffect(() => {
        setTotalDays(Math.floor((endDate - startDate) / 1000 / 60 / 60 / 24))
    }, [endDate, startDate]);

    useEffect(() => {
        setTermRental(price * totalDays)
    }, [price, totalDays]);
     useEffect(() => {
        setPayOnArrival(termRental - alreadyPaid)
    }, [alreadyPaid, termRental]);

    ///////////////////////////////////////////////////////////
    let opt = []
    if (props.bikes) {
        let arr = props.bikes.map(b => ({ label: b.brand + ' ' + b.model + ' ' + b.plateNumber, 
        brand:b.brand, plateNumber:b.plateNumber, model:b.model ,cost:b.cost , 
        value: b._id, price: b.pricePerDay, deposit: b.deposit }))
        opt.push(arr)
    }
    const filterColors = (inputValue) => {
        return opt[0].filter(i =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };
    let loadOptions = (inputValue, callback) => {
        callback(filterColors(inputValue))
    }
    ///////////////////////////////////////////////////////////

    let handleInputChange = (e) => {
        setPrice( e.price)
        setDeposit(e.deposit)
    }

    let handleChangeStartDate = (e) => {
        setStartDate(e)
    }
    let handleChangeEndDate = (e) => {
        setEndDate(e)
    }
    let onChangePrice = (e)=>{
        setPrice(e.target.value)
    }
    let onChangeAlreadyPaid = (e)=>{
        setAlreadyPaid(e.target.value)
    }
    let onChangeDeposit = (e)=>{
        setDeposit(e.target.value)
    }
    let onChangeTermRental = (e)=>{
        setTermRental(e.target.value)
    }
    const toggle =()=>{
        setModal(!modal)
    }
    if (opt.length <= 0) {
        return <Preloder />
    }
    
    return (
        <div className="row">
            <form onSubmit={props.handleSubmit}  className="col-12">
                    <div className="row">
                        <p className="col-12">Cusrtomer info </p>
                        <Field component={InputField} name='name'  placeholder='Customer Name' validate={required} width='sm-3' />
                        <Field component={InputField} name='passport' placeholder='Passport No.' validate={required} width='sm-3' />
                        <Field component={InputField} name='address' placeholder='Address' validate={required} width='sm-3' />
                        <Field component={InputField} name='phone' placeholder='Phone Number' validate={required} width='sm-3' />
                    </div>
                    <div className="row">
                        <p className="col-12">Choose a bike</p>
                        <Field component={AsyncSelectCustom} name='bike'
                            validate={required}
                            loadOptions={loadOptions}
                            onChange={handleInputChange}
                            cacheOptions
                        />
                    </div>
                    <div className="row">
                        <p className="col-12">Helmets and Fuel</p>
                        <div className="input-field col s4">
                            <Field component={SelecField} label='Helmets' initVal='Choose helmets' selectValues={helmets} name='helmets' validate={[required]} />
                        </div>
                        <div className="input-field col s4">
                            <Field component={SelecField}  label='Fuel' initVal='Choose gas' selectValues={fuel} name='gas' validate={[required]} />
                        </div>
                     </div>

                    <div className="row">
                        <p className="col-12">Choose a date</p>
                        <Field component={DatePickerCustom} curDate={startDate} name='startDate' label='Start Date' validate={[required]} onChange={handleChangeStartDate} width='s6' />
                        <Field component={DatePickerCustom} curDate={endDate} name='endDate' label='End Date' validate={[required]} onChange={handleChangeEndDate} width='s6' />
                    </div>

                    <div className="row">
                        <p className="col-12">Payment</p>
                        <Field component={InputField} name='pricePerDay'   eValue={price} onChange={onChangePrice} placeholder='Price per Day' validate={required} width='sm-4' />
                        <Field component={InputField} name='totalDays'     eValue={totalDays} placeholder='Total Days' validate={required} width='sm-4 ' />
                        <Field component={InputField} name='alreadyPaid'   eValue={alreadyPaid} onChange={onChangeAlreadyPaid} placeholder='Already paid' validate={required} width='sm-4' />
                        <Field component={InputField} name='payOnArrival'  eValue={payOnArriva}  placeholder='Pay On Arrival' validate={required} width='sm-4' />
                        <Field component={InputField} name='deposit'       eValue={deposit} onChange={onChangeDeposit} placeholder='Deposit' validate={required} width='sm-4' />
                        <Field component={InputField} name='termRental'    eValue={termRental} onChange={onChangeTermRental} placeholder='Term Rental' validate={required} width='sm-4' />
                    </div>
                    <div className='row'>
                        <button className='btn green white-text'>Create New Booking </button>
                        <MDBBtn color='amber' onClick={toggle}>Input passport photo </MDBBtn>
                    </div>
                    <MDBContainer >
                    <MDBModal isOpen={modal} toggle={toggle} size="fluid" backdrop={true}>
                        <MDBModalBody >
                            <Camera setPhoto={props.setPhoto}/>
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                    </MDBContainer>

                
            </form>
        </div>
    )
}
export default connect(null,null)(reduxForm({
     form: 'craetBooking'
  })(CreateBookingForm1))