import React from 'react'
import style from './style.module.css'
import Preloder from '../../common/Preloder/preloder'
import { useState, useEffect } from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import BookingModal from './BookingModal/BookingModal'

function BikeList(props) {
    const [bikes, setBikes] = useState(null)
    const[modal, setModal] = useState(false)
    const [info , setInfo] = useState('')
    const [type, setType] = useState('all')
    
    useEffect(() => {
        if(props.useSearch){
            setBikes(props.availiblesBikes)
        }
        if(!props.useSearch){
            setBikes(props.allBikes)
        }
    }, [props.allBikes, props.useSearch]);

    useEffect(() => {
        if (type === 'all') {
            setBikes(props.allBikes)
        }
        if (type == 'cheap'){
            let bbb = props.allBikes.filter(b=> b.pricePerDay <= 300)
           setBikes(bbb )
        }
        if (type == 'bigBike'){
            let bbb = props.allBikes.filter(b=> b.bigBike === true)
           setBikes(bbb )
        }
    },[type]);
    useEffect(() => {
        if (type === 'all' && props.useSearch) {
            setBikes(props.availiblesBikes)
        }
        if (type == 'cheap' && props.useSearch){
            let bbb = props.availiblesBikes.filter(b=> b.pricePerDay <= 300)
           setBikes(bbb )
        }
        if (type == 'bigBike' && props.useSearch){
            let bbb = props.availiblesBikes.filter(b=> b.bigBike === true)
           setBikes(bbb )
        }
    },[type , props.useSearch]);
    
    const toggle = (data) => {
        setModal(!modal)
        if (data) {
            setInfo(data)
        }
    }
    const handleFilter = e => {
    }
    if (!bikes) {
        return <div style={{ "height": "1000px" }}>
            <Preloder />
        </div>
    }
    return (
    <>
        <div className = {style.centerBtns + ' ' + 'col 12'}>
                <MDBBtn className={(type === 'all') ? style.activeBtn : ''} color='red' onClick={()=>setType('all')}>All</MDBBtn>
                <MDBBtn className={(type === 'cars') ? style.activeBtn : ''} color='red' onClick={()=>setType('cars')}>Cars</MDBBtn>
                <MDBBtn className={(type === 'bigBike') ? style.activeBtn : ''} color='red' onClick={()=>setType('bigBike')}>BigBikes</MDBBtn>
                <MDBBtn className={(type === 'cheap') ? style.activeBtn : ''} color='red' onClick={()=>setType('cheap')}>Cheap</MDBBtn> 
            </div>
        <div className={style.mainContent}>
            {bikes.map(b =>
                <div className={style.card}>
                    <div className={style.cardFront}>
                        <div className={(b.isAvailible) ? style.cardImage : style.cardImage + ' ' + style.busy}>
                            <img  src={'http://localhost:4000/' + b.mainImage} />
                        </div>
                        <div className={style.cardContent}>
                            <span> {b.brand + ' ' + b.model} </span>
                            
                        </div>
                        <div className={style.cardInside}>
                            <span className="card-title white-text text-darken-4">
                                {b.brand + ' ' + b.model} </span>
                            <div className={style.thumbImg}>
                                                    <div className={style.thumb}>
                                                        <a href={"#img"+ b.images[1]}>
                                                            <img   className={style.thumbImg1} src={'http://localhost:4000/' + b.images[1]} alt="" />
                                                         </a>
                                                         <a href="#_" className={style.lightbox} id={"img"+ b.images[1]}>
                                                             <img   src={'http://localhost:4000/' + b.images[1]} alt="" />
                                                          </a>
                                                    </div>
                                                    <div className={style.thumb}>
                                                        <a href={"#img"+  b.images[2]}>
                                                            <img   className={style.thumbImg1} src={'http://localhost:4000/' + b.images[2]} alt="" />
                                                         </a>
                                                         <a href="#_" className={style.lightbox} id={"img"+  b.images[2]}>
                                                             <img   src={'http://localhost:4000/' +  b.images[2]} alt="" />
                                                          </a>
                                                    </div>
                                                    <div className={style.thumb}>
                                                        <a href={"#img"+  b.images[3]}>
                                                            <img   className={style.thumbImg1} src={'http://localhost:4000/' + b.images[3]} alt="" />
                                                         </a>
                                                         <a href="#_" className={style.lightbox} id={"img"+ b.images[3]}>
                                                             <img   src={'http://localhost:4000/' + b.images[3]} alt="" />
                                                          </a>
                                                    </div>
                            </div>    
                            <p className='white-text'>Dayly price : <span>{b.pricePerDay} </span></p>
                            <p className='white-text'>Mothly price : <span>{b.pricePerMonth} </span></p>
                            <p className='white-text'>Deposit : <span>{b.deposit} </span></p>
                            {(b.isAvailible) 
                            ? <MDBBtn  className={style.btnBook}   onClick={()=>toggle(b)} color="green" >BooKing</MDBBtn>
                            : <MDBBtn  className={style.btnBook}    disabled color="grey" >BooKing</MDBBtn>}
                        </div>
                    </div>
                </div>
            )} 
            <MDBContainer >
                    <MDBModal isOpen={modal} toggle={toggle} size="lg" backdrop={true}>
                    <MDBModalHeader toggle={toggle}>Booking</MDBModalHeader>
                        <MDBModalBody >
                                <BookingModal content={info} {...props}/>
                        </MDBModalBody>
                    </MDBModal>
                </MDBContainer>
        </div>
    </>
    )
}

export default BikeList
