import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputField } from '../../../common/FormControl/InputField'
import {required} from './../../../../utils/Validator/validators'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import style from './style.module.css'


const WizardFormSecondPage = props => {
  const { pristine, submitting } = props
  const { handleSubmit, previousPage } = props
  return (
      <>
      <MDBContainer>
          <MDBRow>
              <MDBCol>
                <Field component={InputField} name='name'  placeholder='Customer Name' validate={required} />
                <Field component={InputField} name='passport' placeholder='Passport No.' validate={required}  />
              </MDBCol>
              <MDBCol>
                <Field component={InputField} name='address' placeholder='Address' validate={required}  />
                <Field component={InputField} name='phone' placeholder='Phone Number' validate={required} /> 
              </MDBCol>
          </MDBRow>
      </MDBContainer>
    <form onSubmit={handleSubmit}>
      <div className={style.btns}>
        <button type="button" className="btn red white-text" onClick={previousPage}>
        <MDBIcon icon="arrow-left" size='lg'/>
        </button>
        <button type="submit" className="btn green white-text" disabled={pristine || submitting}>
        <MDBIcon  icon="arrow-right"  size='lg'/>
        </button>
      </div>
    </form>
    </>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
  
})(WizardFormSecondPage)