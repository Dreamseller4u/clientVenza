import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputField } from '../../../common/FormControl/InputField'
import {DatePickerCustom} from '../../../common/FormControl/DatePickerCustom'
import {required} from '../../../../utils/Validator/validators'
import {MDBIcon} from 'mdbreact'
import style from './style.module.css'

const WizardFormFirstPage = props => {
 const {  pristine, submitting } = props
  const { handleSubmit } = props
  console.log('this',props)
  return (
    <form onSubmit={handleSubmit}>
    <div className="row">
        <Field component={DatePickerCustom} curDate={props.startDate}
         name='startDate' label='Please confirm start Date' validate={[required]} onChange={props.onChangeStartDate} />
        <Field component={DatePickerCustom} curDate={props.endDate}
         name='endDate' label='Please confirm end Date' validate={[required]} onChange={props.onChangeEndDate}  />
    </div>  
      <div className={style.btns}>
        <button type="submit" disabled={pristine || submitting} className="btn green white-text ">
        <MDBIcon  icon="arrow-right"  size='lg'/>
        </button>
      </div>
    </form>
  )
}
export default reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true // <------ unregister fields on unmount
  })(WizardFormFirstPage)