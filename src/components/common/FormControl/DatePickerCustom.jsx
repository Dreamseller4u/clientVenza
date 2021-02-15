import React from 'react';
import ReactDatePicker from 'react-datepicker';

export const DatePickerCustom = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className="col-sm-6">
    <br/>
      <label className="active" >{props.label}</label>
      <br/>
      <ReactDatePicker
        selected={input.value || props.curDate}
        onChange={input.onChange}
        dateFormat="eeee d MMMM, yyyy"
        className={(hasError && 'invalid')}
        className='form-control'
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
      />
      {hasError && <span className="helper-text red-text">{meta.error}</span>}

    </div>
  );
}

