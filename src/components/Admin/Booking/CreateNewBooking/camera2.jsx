import React from "react";
import Webcam from "react-webcam";
import { MDBBtn } from "mdbreact";
import style from './style.module.css'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const WebcamCapture = (props) => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const [visa, setVisa] = React.useState(null);
    const [passportImg, setPassportImg] = React.useState(null);
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      console.log(webcamRef.current.getScreenshot())
    }, [webcamRef, setImgSrc]);
  
    return (
      <>


<MDBContainer>
      <MDBRow>
        <MDBCol>
          <p>Camera</p>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg"/>
          <MDBBtn color='primary' onClick={capture}>Capture photo</MDBBtn>
        </MDBCol>
        <MDBCol>
          {imgSrc && (
            <>
            <p>Promo</p>
            <img  src={imgSrc} /> 
            <MDBBtn color='indigo' onClick={()=>setPassportImg(imgSrc)}>Select Passport</MDBBtn>
           <MDBBtn  color='blue' onClick={()=>setVisa(imgSrc)}>Select Visa</MDBBtn>
           </>)}
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
         {passportImg && (
           <>
           <p>Passport</p>
           <img src={passportImg}/>
           </>
           )}
        </MDBCol>
        <MDBCol>
           {visa && (
             <>
             <p>Visa</p>
             <img src={visa}/> 
             <MDBBtn  color='blue' onClick={()=> props.setPhotoToUpdate(props.id, passportImg, visa)}>Confirm</MDBBtn>
             </>
             )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
        
      </>
    );
  };

  export default WebcamCapture
