import React from 'react'
import { reduxForm, Field } from 'redux-form';
import { InputField } from '../../common/FormControl/InputField';
import { required } from '../../../utils/Validator/validators';
import { InputFileField } from '../../common/FormControl/InputFileField';

const addBikesForm = (props) => {
    
    return (
        <div className="row">
            <form onSubmit={props.handleSubmit} className="col s12">
                <div className="row">
                         <Field component={InputField} name='brand' placeholder='Brand' validate={required} width='s4'/>
                        <Field component={InputField} name='model' placeholder='Model' validate={required} width='s4'/>
                        <Field component={InputField} name='plateNumber' placeholder='Plate Number' validate={required} width='s4'/>
                        <Field component={InputField} name='pricePerDay' placeholder='Dayly price' validate={required}  width='s4'/>
                        <Field component={InputField} name='pricePerMonth' placeholder='Monthly price' validate={required} width='s4'/>
                        <Field component={InputField} name='deposit' placeholder='Deposit' validate={required} width='s4'/>  
                        <Field component={InputFileField} name='image' width='s10'/>
                       
                    <br/>
                    <div className="input-field col s2" style={{'bottom': "-25px"}}>
                        <label>
                            <Field component='input' type="checkbox" name='isAvailible'/>
                            <span>Availible</span>
                        </label>
                    </div>
                    <button class="btn waves-effect waves-light right">Add new bike
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export const AddBikesFormRedux = reduxForm({ form: 'addBikes' })(addBikesForm)