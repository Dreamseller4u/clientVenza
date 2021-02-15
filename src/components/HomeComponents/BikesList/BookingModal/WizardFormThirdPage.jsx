import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputField } from '../../../common/FormControl/InputField'
import {MDBIcon} from 'mdbreact'
import style from './style.module.css'

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
        <Field component={InputField} name="description" placeholder='P.S. Whrite some description' />
        <div className={style.btns}>
          <button type="button" className="btn red white-text" onClick={previousPage}>
          <MDBIcon icon="arrow-left" size='lg'/>
          </button>
          <button type="submit" className='btn green white-text' disabled={pristine || submitting}>
            Submit
          </button>
        </div>
    </form>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true// <------ unregister fields on unmount
})(WizardFormThirdPage)
