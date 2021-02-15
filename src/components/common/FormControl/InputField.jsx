import React from 'react'
import { MDBInput } from "mdbreact";
export const InputField = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={'col-' + props.width}>
            <MDBInput {...input} outline label={props.placeholder} name={input.name}  type={props.type} value={props.eValue} onChange={input.onChange} className={((hasError) ?  "invalid" : '')} />
            {hasError && <span className="helper-text red-text">{meta.error}</span>}
        </div>
    )
}

