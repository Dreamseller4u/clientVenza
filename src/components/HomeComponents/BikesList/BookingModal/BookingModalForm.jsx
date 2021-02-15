import React , { useState, useEffect }from 'react'
import { reduxForm } from 'redux-form'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'
import format from 'date-format'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {addNewBookinThunk} from '../../../../redux/bookingReducer'
import { compose } from 'redux'
import {connect} from 'react-redux'
import style from './style.module.css'

const ModalForm = (props) => {
    let helmets = [{value:'none'},{value:'1'},{value:'2'},{value:'3'}]
    const [startDate, setStartDate] = useState(props.info.dateInfo.startDate || new Date())
    const [endDate, setEndDate] = useState(props.info.dateInfo.endDate || new Date().setDate(startDate.getDate() + 3))
    const [pickUp, setPickUp] = useState(props.info.dateInfo.pickUp || 'Office')
    const [dropOff, setDropOff] = useState(props.info.dateInfo.dropOff || 'Office')
    const [name, setName] = useState('')
    const [passport, setPassport] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [totalDays, setTotalDays] = useState('')
    const [pricePerDay, setPricePerDay] = useState(props.info.content.pricePerDay)
    const [totalAmount, setTotalAmount] = useState('')
    const [deposit, setDeposit] = useState(props.info.content.deposit)

    useEffect(() => {
        setTotalDays(Math.floor((endDate - startDate) / 1000 / 60 / 60 / 24))
    }, [endDate, startDate]);
    useEffect(() => {
        const sum =totalDays * pricePerDay  
        setTotalAmount( (sum < props.info.content.pricePerMonth) ? sum  : props.info.content.pricePerMonth)
    }, [totalDays, pricePerDay]);
    useEffect(() => {
        if(totalDays >= 15){
            setPricePerDay(props.info.content.pricePerDay - 50)
        } 
        if (totalDays > 31 ){
            alert(" If you want rent more then 1 mmonth pls contact us and we give you special price")
        } 
    }, [totalDays]);

    const [page , setPage] = useState(1)
    const nextPage = (values) => {
        setStartDate(values.startDate)
        setEndDate(values.endDate)
        setName(values.name)
        setPassport(values.passport)
        setAddress(values.address)
        setPhone(values.phone)
        if(totalDays >= 3)
        {
          setPage(page + 1)  
        }else{
            alert('3 Days minimum')
        }
        }
    const previousPage = () => {setPage(page - 1)}
    const onChangeEndDate = (e) => {
        setEndDate(e)
    }
    const onChangeStartDate = (e) => {
        setStartDate(e)
    }
    const handleSubmit= (values) => {
        const booking = {
            name: values.name,
            passport : values.passport,
            address :values.address,
            phone: values.phone,
            bikeId: props.info.content._id,
            brand  :props.info.content.brand,
            model : props.info.content.model,
            plateNumber : props.info.content.plateNumber,
            cost : (props.info.content.model === 'Forza' || 'X-Max') ? "140,000" : "75,000",  //Дотелать проверку на стоимость байка
            pricePerDay :pricePerDay,
            alreadyPaid : '0',
            payOnArrival : '0',
            totalRate: totalAmount,
            deposit : deposit,
            startDate:values.startDate,
            endDate: values.endDate,
            totalDays : totalDays,
            helmets :'none',
            gas : 'full',
            confirmed:false,
            description:values.description || 'none',
            passportImg:'none',
            visaImg:'none'
            }
            props.addNewBookinThunk(booking)
    }

    return (
    <> 
    <MDBContainer>
        <MDBRow>
            <MDBCol><p>Total days: <span>{totalDays}</span></p></MDBCol>
            <MDBCol><p>Price per day <span>{pricePerDay}</span></p></MDBCol>
            <MDBCol><p>Total amount: <span>{totalAmount}</span></p></MDBCol>
            <MDBCol><p>Deposit: <span>{deposit}</span></p></MDBCol> 
        </MDBRow>
   {(page > 1) ? 
   <>
        <MDBRow>
           <MDBCol>
                <p>Start Date : <span>{format('dd.MM.yyyy',new Date(startDate))}</span>
                &nbsp;  -  &nbsp;
                 <span>{format('hh:mm',new Date(startDate))}</span></p>
           </MDBCol> 
           <MDBCol>
                <p>End Date : <span>{format('dd.MM.yyyy',new Date(endDate))}</span>
                &nbsp;  - &nbsp;
                 <span>{format('hh:mm',new Date(endDate))}</span></p>
           </MDBCol> 
        </MDBRow>
        <MDBRow>
            <MDBCol>
                <p>Pick Up : <span>{pickUp}</span></p>
            </MDBCol>
            <MDBCol>
                 <p>Drop Off : <span>{dropOff}</span></p>
            </MDBCol>
        </MDBRow>
    </>
    : ''}
    {(page > 2) 
    ? 
    <>
    <MDBRow>
        <MDBCol>
            <p>Name : <span>{name}</span></p>
        </MDBCol>
        <MDBCol> 
        <p>Passport N : <span>{passport}</span></p>
        </MDBCol>
    </MDBRow>
    <MDBRow>
        <MDBCol><p>Phone : <span>{phone}</span></p></MDBCol>
        <MDBCol><p>Address : <span>{address}</span></p></MDBCol>
    </MDBRow>
    </>
    :''
    }
</MDBContainer>
        {page === 1 && <WizardFormFirstPage 
        startDate={startDate}
        endDate={endDate}
        onSubmit={nextPage} 
        onChangeEndDate={onChangeEndDate}
        onChangeStartDate={onChangeStartDate}
        />}
        {page === 2 && (
          <WizardFormSecondPage
            previousPage={previousPage}
            onSubmit={nextPage}
           
          />
        )}
        {page === 3 && (
            <>
          <WizardFormThirdPage
            previousPage={previousPage}
            onSubmit={handleSubmit}
          />
          </>
        )}
      </>
    )
}

export default compose(
    connect(null, {addNewBookinThunk}),
    reduxForm({ form: 'bookinModal' }))(ModalForm)


reduxForm({ form: 'bookinModal' })(ModalForm)
