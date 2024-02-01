import React, { useEffect } from 'react';
import {  useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
const Test = ()=>{
    const swiper = useSwiper();

    useEffect(() => {
        //This never gets called on React 18
        swiper.on('slideChange', swipe => {
          console.log('slideChange event Works!')
        });
        swiper.on('click', swipe => {
            console.log('click event Works!')
          });
        return () => {
          swiper.off('slideChange');
          swiper.off('click');
        };
      }, []);

    return <div>test</div>
}

export default Test;