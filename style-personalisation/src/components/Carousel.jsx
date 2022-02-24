import React from "react"
import Carousel from 'react-bootstrap/Carousel'

export default function CarouselImpl(props) {
  return(
    <div style={{ display: 'block', width: 900, padding: 30 }}>
      <Carousel>
          {props.data.map((index) => {
              return (
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={index}
                        alt="Image"
                    />
                </Carousel.Item>
              )
          })}
        
      </Carousel>
    </div>
  )
}