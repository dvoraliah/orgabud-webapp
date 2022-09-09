import React from 'react'
import CarouselAutoPlay from "../../Component/CarouselAutoPlay"; 

export default function Home() {
// sessionStorage.clear()
    return (

        <div className="body">
          <div className="carousel-contenair">
            <CarouselAutoPlay />
          </div>
        </div>

    );
}
