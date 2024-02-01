import React, { useEffect } from 'react';
import {  useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
const Test = ()=>{
    const swiper = useSwiper();

    useEffect(() => {
        swiper.on('slideChange', swipe => {
          console.log('eventWorks!')
        });
        return () => {
          swiper.off('slideChange');
        };
      }, []);

    return <div>test</div>
}

export default Test;