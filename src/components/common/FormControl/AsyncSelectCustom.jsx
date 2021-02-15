import React from 'react'
import AsyncSelect from 'react-select/async';

function AsyncSelectCustom({input, meta, ...props}) {
    return (
        <AsyncSelect
        {...input}
        onBlur={() => input.onBlur(input.value)}
        cacheOptions
        loadOptions={props.loadOptions}
        className='col 12'
        defaultOptions
        onInputChange={props.handleInputChange}
    />
    )
}
export default AsyncSelectCustom
