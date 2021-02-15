import React from 'react'
import { useState } from 'react'



export const InputFileField = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    const [file, setFile] = useState(null)

    const [fileName, setFileName] = useState('Upload one or more files')
    const onHandleChange =(e) => {
       setFileName(e.target.files[0].name)
       setFile(e.target.files[0].name)
    }

    return (
            <div className={"input-field col" + " " + props.width} >
                <div class="file-field input-field">
                        <div class="btn">
                            <span>File</span>
                            <input {...input}   name={input.name} type="file" value={null} onChange={onHandleChange} 
                                    className={((hasError) ?  "invalid" : '')}  multiple accept="image/png, image/jpeg"/>
                        </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder={fileName}/>
                        {hasError && <span className="helper-text red-text">{meta.error}</span>}
                    </div>
                </div>
            </div>
    )
}

