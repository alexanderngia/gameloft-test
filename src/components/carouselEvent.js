import React, { Component } from "react";
import Slider from "react-slick";

export default class CarouselEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    const { input } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,

      appendDots: (dots) => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <ul style={{ margin: "0px" }}>{dots}</ul>
        </div>
      ),
      customPaging: (i) => (
        <div className="circular">
          <div className="inner"></div>
          <div className="number">{i + 1}</div>
          <div className="circle">
            <div className="bar left">
              <div className="progress-bar"></div>
            </div>
            <div className="bar right">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
      ),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider ref={(slider) => (this.slider = slider)} {...settings}>
        {input.map((item, index) => {
          return (
            <span key={index}>
              <div
                style={{ backgroundImage: `url(${item.src})` }}
                className="icon-item-container"
              >
                <div className="icon-item-row">
                  <h3>{item.cap}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="icon-item-row">
                  <button type="button">Read More</button>
                </div>
              </div>
            </span>
          );
        })}
      </Slider>
    );
  }
}
