import React, { useState, useEffect } from 'react';
import style from './home.module.css'
import HomeSerachContainer from '../HomeSearch/HomeSerachContainer';
import BikeListContainer from '../BikesList/BikeListContainer'

const Home = (props) => {
    const [scrollY, setScrollY] = useState(0);

    function logit() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });
    return (
        <div>
            <div className={style.background}>
             <HomeSerachContainer /> 
             
            </div>
            <div className={style.mainTitle}>
                <h4>НАШ АВТО-МОТО ПАРК</h4>
            </div>
            <div className='container'>
                <div className={style.content}>
                    <BikeListContainer {...props} /> 
                    {/* {(scrollY > 1350) ? <AboutUs /> : ""}
                    {(scrollY > 2350) ? <RulesComponent /> : ""}
               */}
               </div> 
            </div>
        </div>
    );
}

export default Home;
