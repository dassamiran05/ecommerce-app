import React, { useState } from 'react';
import Slider from "react-slick";
import { bannerInfo } from '../constants';
import Bannersinglecontent from './Bannersinglecontent';

const Bannerslider = () => {

    const [dotActive, setDotActive] = useState(0);

    const settings = {
        dots: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (prev, next) => {
          setDotActive(next);
        },
        appendDots: dots => (
          <div
            style={{
              // backgroundColor: "#ddd",
              borderRadius: "10px",
              // padding: "15px",
              position: "absolute",
              bottom: "10%",
              left: "0",
              right: "0",
              margin: "0 auto",
              transform: "transition(-50%, -50%)",
              width: "100px"
            }}
          >
            <ul style={{ display: "flex", justifyContent: "space-between" }}> {dots} </ul>
          </div>
        )
      };
    return (
        <div className="relative mt-3">
            <Slider {...settings}>
                {
                  bannerInfo.map(info => <Bannersinglecontent key={info.id} info={info}/>)
                }
            </Slider>
        </div>
    );
};

export default Bannerslider;