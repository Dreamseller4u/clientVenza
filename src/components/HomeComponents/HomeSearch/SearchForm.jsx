import React, {useState, useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../../utils/Validator/validators'
import { SelecField } from '../../common/FormControl/SelectField'
import { DatePickerCustom } from '../../common/FormControl/DatePickerCustom'

const SearchForm = (props) => {
    const [load, setLoad] = useState(false)
    const searchHandler = () => {
        setLoad(true)
        setTimeout(()=>
            window.scrollTo({
            top:1000,
            behavior:'smooth'
        })
        ,2000)
        setTimeout(()=>
        setLoad(false)
    ,2000)
        
    }
    return (
        <form onSubmit={props.handleSubmit} className='col-12'>
            <div className="row">
            <Field component={SelecField}
                name='pickUp' 
                type="text" width='sm-6'
                label="PickUp location"
                selectValues={props.location}
                initVal='Office (Chalong)'
            />
            <Field component={SelecField}
                name='dropOff' 
                type="text" width='sm-6'
                label="DropOff location"
                selectValues={props.location}
                initVal='Office (Chalong)'
            />
            
            <Field component={DatePickerCustom} name='startDate' label='Start Date'
             curDate={new Date()}  validate={[required]} width='sm-6' />
            <Field component={DatePickerCustom} name='endDate'  label='End Date'
            curDate={new Date().setDate(new Date().getDate() + 3)} validate={[required]} width='sm-6' />
            </div>
            <button style={{borderRadius: '20px', float: 'right', background:'red', color: "white"}}
             className='btn' color="danger"
             disabled={props.invalid}
             onClick={()=>{searchHandler()}}>{ load && 
             <div className="spinner-border text-white" style={{marginRight:'20px',height:'20px', width:'20px'}} role="status">
                <span className="sr-only" >Loading...</span>
            </div>}Search</button>
        </form>
    )
}

export default reduxForm({ form: 'search' })(SearchForm)
