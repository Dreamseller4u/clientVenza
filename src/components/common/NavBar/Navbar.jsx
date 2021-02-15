import React , {useState} from 'react'
import { useLocation } from 'react-router-dom'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBIcon} from "mdbreact";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';
import style from './style.module.css'
import wa from '../../../assets/img/wa.png'

const Navbar = (props) => {
  const [about, setAbout] = useState(false)
  const [rules, setRules] = useState(false)
  const toggle = (cont) => {
    setAbout(!about)
}
const toggle2 = () => {
  setRules(!rules)
}
  let location = useLocation();
  if(location.pathname === '/' || location.pathname === '/search' ){
    return <>
    <MDBNavbar color="elegant-color-dark " dark expand="md"  scrolling >
        <MDBNavbarBrand>
          <strong className="white-text"> 
            <MDBNavLink to='/' style={{color:'white'}}>Venza Rider Club</MDBNavLink>
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarNav right>
           <MDBNavItem>
              <MDBNavLink to='/' onClick={()=> window.scrollTo({top:1000,behavior:'smooth'})}>Bikes list</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/' onClick={()=> toggle()}>About us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/' onClick={()=> toggle2()}>Rules</MDBNavLink>
            </MDBNavItem>
        </MDBNavbarNav>
    </MDBNavbar>  

    <MDBContainer> 
    <MDBModal isOpen={about} toggle={()=>toggle()} size='lg'>
      <MDBModalBody style={{opacity: '0.8'}}>
        
        <div className={style.TextWrapper}>
          <h1>About us</h1>
          
          <p> "RIDER CLUB VENZA CO., LTD"</p>
          <p>The official company in Phuket</p>
          <p>Scooter, bike, car and jet ski rental </p>
          <p>☎ WhatsApp, Viber, Telegram, Line, WeChat</p>
          <p><img src={wa} style={{width:'40px'}} alt=""/><a href="https://wa.me/66635492707">+66635492707 RU</a></p>
          <p><img src={wa} style={{width:'40px'}} alt=""/><a href="https://wa.me/66635492707">+66620986303 EN</a></p>
          <p>Line ID: VENZA_RU </p>
          <p>Line ID: VENZA_EN</p>
          <p>Instagram: @RiderClubVenza</p>
          <span>
          <p>🔴 All bikes and cars in excellent condition, not older than 2017.</p>
          <p>🔴 All bikes have medical insurance - coverage up to 30,000 baht</p>
          <p>🔴 We have everything officially, draw up a contract </p>
          <p>🔴 All cars have first class insurance.</p>
          <p>🔴 Large selection of bikes and cars </p>
          <p>🔴 No need to leave your passport</p>
          <p>🔴 Delivery all over Phuket </p>
          <p>🔴 Free helmet</p>
          </span>
          <div class="mapouter">
          <div class="gmap_canvas">
          <iframe width="80%" height="350px" id="gmap_canvas" 
              src="https://maps.google.com/maps?q=RENT%20BIKE%2C%20JET%20SKI%2C%20CAR.RIDER%20CLUB%20VENZA%20CO.%2CLTD%2C%D0%90%D0%A0%D0%95%D0%9D%D0%94%D0%90%2C%D0%A1%D0%9A%D0%A3%D0%A2%D0%95%D0%A0%D0%9E%D0%92%2C%D0%90%D0%92%D0%A2%D0%9E%D0%9C%D0%9E%D0%91%D0%98%D0%9B%D0%95%D0%99%2C%D0%93%D0%98%D0%94%D0%A0%D0%9E%D0%A6%D0%98%D0%9A%D0%9B%D0%9E%D0%92%20%D0%9F%D0%A5%D0%A3%D0%9A%D0%95%D0%A2&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              frameborder="0" 
              scrolling="no"
              marginheight="0" 
              marginwidth="0">

           </iframe>
           <a href="https://putlocker-is.org">

           </a>
           </div>
           </div>
        </div>
       

        
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="danger" onClick={()=>toggle()}>Close</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
    </MDBContainer>
    <MDBContainer> 
    <MDBModal isOpen={rules} toggle={()=>toggle2()} size='ls'>
      <MDBModalBody>
        <h1>Rules</h1>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="danger" onClick={()=>toggle2()}>Close</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
    </MDBContainer>
 </>
  }
    return (
      
      <MDBNavbar color="elegant-color-dark" dark expand="md"  double style={{marginBottom:'50px'}}>
        <MDBNavbarBrand>
          <strong className="white-text"> 
            <MDBNavLink to='/'>Venza Rider Club</MDBNavLink>
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarNav center>
          <MDBNavItem>
              <MDBNavLink to='/backend'>Dashboard</MDBNavLink>
            </MDBNavItem>
        <MDBNavbarNav right>
        </MDBNavbarNav>
        
           <MDBNavItem>
              <MDBNavLink  to='/backend/bikes'>Bikes</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to='/backend/booking'>Booking</MDBNavLink>  
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/backend/location'>Location</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/backend/settings'>Settings</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
             <MDBIcon onClick={props.signOut} icon="sign-out-alt" size="2x" className="white-text pr-3 mx-2"/>
            </MDBNavItem>
        </MDBNavbarNav>
    </MDBNavbar>

    
    )
}

export default Navbar;