import React from 'react'

export const SelecField = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className='col-sm-6'>
          <label className='active'>{props.label}</label> <br/>
            <select {...input} name={input.name} className="browser-default custom-select">
            <option value={props.initVal}  selected >{props.initVal}</option>
            {props.selectValues && props.selectValues.map(s => <option value={s.name}>{s.name}</option> )}
            </select> 
            {hasError && <span className="helper-text red-text">{meta.error}</span>}
        </div>
    )
}
