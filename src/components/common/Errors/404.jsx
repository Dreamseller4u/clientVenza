import React from 'react'

const err404 = () =>  {

    let booking1 = new Date('2020-07-1').getTime();
    let booking2 = new Date('2020-07-23').getTime();

    let date1 = new Date('2020-06-14').getTime();
    let date2 = new Date('2020-07-14').getTime();
   
   let isA = date2 - booking1
    if(isA < 0){
        console.log('is Availible')
    }
    else{
        console.log('is booking on this date')
    }

    
    return (
        <div>
            <div>       
                <img style = {{width : 900 + 'px'}} src="https://www.boostability.com/wp-content/uploads/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg" alt=""/>
            </div>
        </div>
    )
}
export default err404;