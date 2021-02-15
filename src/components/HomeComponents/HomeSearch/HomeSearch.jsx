import React from 'react'
import style from './search.module.css'
import SearchForm from './SearchForm';

function HomeSearch(props) {
    const handleSubmit = (values) => {
        props.getAvailiblesBikesThunk(values)
    }
    return (
        <div>
            <div className={style.searchBox}>
                <div className={style.searchHead}><p>FIND YOUR BIKE</p></div>
                <div className='row'>
                    <SearchForm onSubmit={handleSubmit} location={props.location} search={props.useSearch}/>
                </div>
             </div>
        </div>
    )
}

export default HomeSearch
