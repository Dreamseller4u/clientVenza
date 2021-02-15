import React from 'react'
import logo from '../../../assets/img/logo.png'
import noRefund from '../../../assets/img/norefund.png'
import format from 'date-format'
import style from './style.module.css'
import { MDBBtn , MDBIcon} from "mdbreact";
import { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import { useEffect } from 'react'
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Camera from './CreateNewBooking/camera2'


function BookingModal(props) {
    const [edit, setEdit] = useState(false)
    const [phone, setPhone] = useState(props.bee.phone)
    const [name, setName] = useState(props.bee.name)
    const [passport, setPassport] = useState(props.bee.passport)
    const [address, setAddress] = useState(props.bee.address)
    const [helmet, setHelmet] = useState(props.bee.helmets)
    const [gas, setGas] = useState(props.bee.gas)
    const [startDate, setStartDate] = useState(new Date(props.bee.startDate))
    const [endDate, setEndDate] = useState(new Date(props.bee.endDate))
    const [priceD, setPriceD] = useState(props.bee.pricePerDay)
    const [totalDays, setTotalDays] = useState(props.bee.totalDays)
    const [totalRate, setTotalRate] = useState(props.bee.totalRate)
    const [alreadyPaid, setAlreadyPaid] = useState(props.bee.alreadyPaid)
    const [payOnArrival, setPayOnArrival] = useState(props.bee.payOnArrival)
    const [deposit, setDeposit] = useState(props.bee.deposit)
    const [modal ,setModal] = useState(false)
    const [modal1 ,setModal1] = useState(false)
   
    const toggle =() => {
        setModal(!modal)
    }
    const toggle1 =() => {
        setModal1(!modal1)
    }
    const data = {_id:props.bee._id, phone, name, passport, address, helmet, gas,
        startDate, endDate, priceD,  totalDays, totalRate, alreadyPaid,payOnArrival,deposit}

    useEffect(() => {
        setTotalDays(Math.floor((endDate - startDate) / 1000 / 60 / 60 / 24))
    }, [endDate, startDate]);
    
    const printDiv = (id) =>  { 
        let divContents = document.getElementById("contract" + id).innerHTML; 
        let a = window.open('', '', 'height=1290, width=900'); 
        a.document.write('<html>'); 
        a.document.write('<body >'); 
        a.document.write(divContents); 
        a.document.write('</body></html>'); 
        a.document.close(); 
        a.print(); 
    } 
    const hundleSave = () => {
        setEdit(false)
       props.update(data)
    }
    const handleConfirm = (id) => {
        props.confirm(id)
    }
    return (
        <div>
            <div id={'contract'+ props.bee._id} style={{transform: "scaleX(0.7)",fontFamily: "Helvetica, Arial, sans-serif"}}>
            <div className='logo'> 
                <img src={logo} style={{width:'200px'}} alt=""/>
            </div>
                <div className='HeaderCenter' style={{position: 'relative', left: '40%'}}>
                    <p className='Thai' style={{fontSize:'10px',margin:'0px'}}>สัญญาเช่ารถจักรยานยนต์/รถยนต์</p>
                    <h2>HIRRING AGREEMENT</h2>
                </div>
               
                <div className='first' style={{ width:'1290px', height:'100px'}}>
                <div style={{float: 'left', width:'600px',margin: '0px 0px 10px 0px'}}>
                        <p className='Thai' style={{fontSize:'10px',margin:'0px'}}>ทะเบียนรถเลขที่ </p>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>For Motorbike/Car No :</span> 
                        <span style={{display:'inline-block',width:'50%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{props.bee.plateNumber}</span> 
                        </p>
                    </div>
                    <div style={{float: 'left', width:'600px',margin: '0px 0px 10px 0px'}}>
                    <p className='Thai' style={{fontSize:'10px',margin:'0px'}}>เบอร์โทร </p>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Customer Phone Number :</span> 
                        <span style={{display:'inline-block',width:'50%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{(!edit) ? phone : <input value={phone} onChange={(e)=>setPhone(e.target.value)} />}</span> </p>
                    
                    </div>
                </div>
               
                <div className='Customer' style={{ width:'1290px', height:'100px'}}>
                    <div style={{float: 'left', width:'400px',margin: '0px 0px 10px 0px'}}>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>ผู้เช่า </p>
                        <p style={{margin: '0px 0px 10px 0px'}}>
                        <span style={{fontWeight: 'bold',fontSize:'22px'}}> Name : </span>
                        <span style={{display:'inline-block',width:'70%', borderBottom:'1px dashed black', width:'60%' ,fontSize:'22px', textAlign:"center"}}>{(!edit) ? name : <input value={name} onChange={(e)=>setName(e.target.value)} />}</span> </p>
                    </div>
                    <div style={{float: 'left', width:'400px'}}>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>หนังสือเดินทางเลขที่</p>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Passport No :</span>  
                        <span style={{display:'inline-block',width:'60%',borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{(!edit) ? passport : <input value={passport} onChange={(e)=>setPassport(e.target.value)} />}</span></p>
                    </div>
                    <div style={{float: 'left', width:'400px'}}>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>สัญชาติ</p>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Nationality :</span>
                        <span style={{display:'inline-block',width:'60%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}> </span> </p>
                    </div>
                </div>

                <div className="Address" style={{ width:'1290px', height:'100px'}}>
                    <div style={{float: 'left', width:'600px'}}>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>ขณะนี้พักที่ ห้อง </p>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Presently residing At :</span> 
                        <span style={{display:'inline-block',width:'60%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{(!edit) ? address : <input value={address} onChange={(e)=>setAddress(e.target.value)} />}</span></p>
                    </div>
                    <div style={{float: 'left', width:'600px'}}> 
                        <br/>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Room No :</span>
                        <span style={{display:'inline-block',width:'60%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}></span> </p>
                    </div>
                </div>
                <div className="Bike" style={{ width:'1290px', height:'100px'}}>
                    <div style={{float: 'left', width:'600px'}}>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>ชนิดรุ่น/แบบ สี เลขตัวถัง</p>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Model :</span> 
                        <span style={{display:'inline-block',width:'80%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{props.bee.brand + ' ' + props.bee.model}</span></p>
                    </div>
                    <div style={{float: 'left', width:'600px'}}>
                        <br/>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Chassis No :</span> 
                        <span style={{display:'inline-block',width:'60%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{props.bee.plateNumber}</span></p>
                    </div>
                </div>

                <div className="Date" style={{ width:'1290px'}}>
                    <div style={{float: 'left', width:'400px'}}>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>รับรถที่ ตั้งแต่วันที่ เวลา ถึงวันที่ เวลา</p>
                        <p style={{margin: '0px 0px 10px 0px'}}>
                         <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Get At : </span>
                         <span style={{display:'inline-block',width:'60%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{props.bee.address}</span></p>
                    </div>
                    <div style={{float: 'left', width:'400px'}}>
                        <p style={{margin: '0px 0px 10px 0px'}}>
                         <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>From Date :</span> 
                         <span style={{display:'inline-block',width:'60%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}> {(!edit) ? format('dd.MM.yyyy',new Date(startDate)) : 
                          <ReactDatePicker
                                selected={new Date(startDate)}
                                onChange={e=>setStartDate(e)}
                                dateFormat="eeee d MMMM, yyyy"
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="time"
                            />}</span></p>
                        <p style={{margin: '0px 0px 10px 0px'}}> <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Time :</span>
                        <span style={{display:'inline-block',width:'60%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{format('hh:mm',new Date(startDate))}</span></p>
                    </div>
                    <div style={{float: 'left', width:'400px'}}>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Until Date : </span>
                        <span style={{display:'inline-block',width:'50%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{(!edit) ? format('dd.MM.yyyy',new Date(endDate)) : 
                          <ReactDatePicker
                                selected={new Date(endDate)}
                                onChange={e=>setEndDate(e)}
                                dateFormat="eeee d MMMM, yyyy"
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="time"
                            />}</span></p>
                        <p style={{margin: '0px 0px 10px 0px'}}> <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Time :</span>
                        <span style={{display:'inline-block',width:'50%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{format('hh:mm',new Date(endDate))}</span></p>
                    </div>
                </div>

                <div className="Fuel" style={{position:'relative',top:'50px', width:'200px'}}>
                    <div>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Helmets :</span> 
                        <span style={{display:'inline-block',width:'content', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{(!edit) ? helmet : <input value={helmet} onChange={(e)=>setHelmet(e.target.value)} />}</span></p>
                    </div>
                    <div>
                        <p style={{margin: '0px 0px 10px 0px'}}>
                         <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Gasoline :</span> 
                         <span style={{display:'inline-block',width:'content', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{(!edit) ? gas : <input value={gas} onChange={(e)=>setGas(e.target.value)} />}</span></p>
                    </div>
                </div>
                <div className="RentalTerm" style={{position:"relative", left: '35%'}}>
                    <div>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>ระยะการเช่า วัน/เดือน</p>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Term Rental:</span> 
                        <span style={{display:'inline-block',width:'33%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{(!edit) ? priceD : <input value={priceD} onChange={(e)=>setPriceD(e.target.value)} />}</span></p>
                    </div>
                    <div>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>รวมจำนวน วัน</p>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Total Days :</span>  
                        <span style={{display:'inline-block',width:'34.5%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{(!edit) ? totalDays : <input value={totalDays} onChange={(e)=>setTotalDays(e.target.value)} />}</span></p>
                    </div>
                    <div>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>รวมราคา บาท</p>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Total Rate :</span>  
                        <span style={{display:'inline-block',width:'35%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{(!edit) ? totalRate : <input value={totalRate} onChange={(e)=>setTotalRate(e.target.value)} />}</span></p>
                    </div>
                    <div>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>  จ่ายแล้ว  </p>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Alreade paid :</span>
                        <span style={{display:'inline-block',width:'32%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{(!edit) ? alreadyPaid : <input value={alreadyPaid} onChange={(e)=>setAlreadyPaid(e.target.value)} />}</span></p>
                    </div>
                    <div>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>จ่ายเมื่อเดินทางมาถึง</p>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                         <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Pay on arrival :</span> 
                         <span style={{display:'inline-block',width:'30%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{(!edit) ? payOnArrival : <input value={payOnArrival} onChange={(e)=>setPayOnArrival(e.target.value)} />}</span></p>
                    </div>
                    <div>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>เงินมัดจำ</p>
                        <p style={{margin: '0px 0px 10px 0px'}}>
                         <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Deposit :</span> 
                         <span style={{display:'inline-block',width:'38%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}>{(!edit) ? deposit : <input value={deposit} onChange={(e)=>setDeposit(e.target.value)} />}</span></p>
                    </div>
                </div>
                

                <p style={{fontSize:'18px'}}>I have paid the amount of ________ Baht to the lessor on the agreement for the rental I agree to pay the 
                 to the lessor. If any accident occurs during the rental of this
                 motorbike/car I agree to pay for the restoration of the bike/car and for the purchase of new parts. 
                If any part of motorbike/car has been stolen. Lost or damage I agree to pay the actual price and if the motorbike/car is stolen 
                I agree to pay {props.bee.cost} Baht, I hereby also agree to pay to be liable to all claims of accident occurring and to pay all claims 
                of third parties should an accident occur during my use of the motorbike/car. In case
                I bring the motorbike/car back late I agree to pay 100 Baht per hour for the over time. I confirm that I have
                a motorcycle driver's license.
                <p style={{color:'red'}}>1.Bikes less then 300cc use only in Phuket Aria (Fine is the amount of deposit)</p>
                <p style={{color:'red'}}>2.The company is not responsible for lost personal items.</p>
                </p>
                <p style={{fontSize:'18px'}}>ข้าพเจ้ายินดีจะชดใช้ค่าเสียหายต่อผู้ให้เช่า หากมีการเกิดอุบัติเหตุในขณะที่ข้าพเจ้าครอบครองรถอยู่ข้าพเจ้ายินดีจะชดใช้ทุกกรณี
                และในกรณีที่เกิดการเสียหายหรือขาดหายของส่วนประกอบของรถ ข้าพเจ้าก็พร้อมที่จะชดใช้ให้ตามจำนวนเงินที่เป็นจริง ถ้ารถเกิดการสูญหาย
                ข้าพเจ้าจะต้องชดใช้เป็นจำนวนเงิน {props.bee.cost} บาท
                กรณีที่เกิดการผิดสัญญาในการนำส่งรถคืนตามสัญญาการเช่า
                ข้าพเจ้าพร้อมที่จะจ่ายค่าทดแทนตามจำนวนเงินชั่วโมงละ 100 บาท
                <p style={{color:'red'}}>1. จักรยานยนต์ 300cc ใช้เฉพาะในพื้นที่ภูเก็ต (ปรับเท่ากับเงินมัดจำ)</p>
                <p style={{color:'red'}}>2. บริษัท จะไม่รับผิดชอบในการสูญหายของใช้ส่วนตัว</p>
                </p>

                <div className="Signeture" style={{position:"relative", left: '35%'}}>
                    <div>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>ผู้เช่า</p>
                        <p style={{margin: '0px 0px 10px 0px'}}>
                         <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Signed :</span>
                         <span style={{display:'inline-block',width:'40%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}></span> Hirer</p>
                    </div>
                    <div>
                        <p className="Thai" style={{fontSize:'10px',margin:'0px'}}>ผู้ให้เช่า</p>
                        <p style={{margin: '0px 0px 10px 0px'}}> 
                        <span style={{fontWeight: 'bold',margin: '0px 0px 10px 0px',fontSize:'22px'}}>Signed :</span> 
                        <span style={{display:'inline-block',width:'40%', borderBottom:'1px dashed black', fontSize:'22px', textAlign:"center"}}></span> The Latter</p>
                    </div>

                </div>
                    <div className='noredunf' style={{position:'absolute', right:'0px', bottom:'0px'}}> 
                        <img src={noRefund} style={{width:'200px'}} alt=""/>
                    </div>
            </div>
           
           <div className={style.buttons}>
                <MDBIcon icon="bars" className="indigo-text " size="2x"/>
                <div className={style.btnDropDown}>
                    <MDBBtn id='radiusButton' color="purple" onClick={()=> {printDiv(props.bee._id)}}>Print</MDBBtn><br/>
                    {(!edit) 
                    ? <MDBBtn color="warning" onClick={()=>setEdit(true)}>Edit</MDBBtn>
                    : <MDBBtn color="warning" onClick={()=>hundleSave()}>Save</MDBBtn>
                    }
                    <MDBBtn id='radiusButton' color="indigo" onClick={toggle}>Passport</MDBBtn><br/>
                    <MDBBtn id='radiusButton' color="primary" onClick={toggle1}>Upload passport</MDBBtn>


                    {(!props.bee.confirmed)
                    ? <MDBBtn color="green" onClick={()=>handleConfirm(props.bee._id)}>Confirm</MDBBtn>
                    : ''
                    }
                    
                </div>
               
           </div>
           <MDBContainer >
                    <MDBModal isOpen={modal} toggle={toggle} size="lg" backdrop={true}>
                        <MDBModalBody >
                            <img src={props.bee.passportImg} style={{width:'350px', marginRight:'20px', float:'left'}}/>
                            <img src={props.bee.visaImg} style={{width:'350px', marginRight:'20px', float:'left'}}/>
                        </MDBModalBody>
                    </MDBModal>
                    <MDBModal isOpen={modal1} toggle={toggle1} size="lg" backdrop={true}>
                        <MDBModalBody >
                           <Camera id={props.bee._id} setPhotoToUpdate={props.setPhotoToUpdate}/>
                        </MDBModalBody>
                    </MDBModal>
            </MDBContainer>
            
        </div>

    )
}

export default BookingModal
