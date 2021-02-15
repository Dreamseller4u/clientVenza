import React from 'react'
import './preloder.css'

let preloder = () => {
    return <div className="preloder1">
       <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
}

export default preloder;