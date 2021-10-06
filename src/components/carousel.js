import React, { Component } from "react";
import Slider from "react-slick";
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };
  render() {
    const { input } = this.props;
    const getlength = input.length;

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 1,
      slidesPerRow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
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
      <>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {input.map((item, index) => {
            return (
              <div className="slide-count-control_post-item" key={index}>
                <div className="slide-count-control_post-item-row">
                  <div className="social">
                    <i className="fab fa-facebook"></i>
                    <i className="fas fa-share-alt"></i>
                    <a href={item.src} download>
                      <i className="fas fa-arrow-alt-circle-down"></i>
                    </a>
                  </div>
                  <img src={item.src} alt="" />
                </div>
                <div className="slide-count-control_post-item-row">
                  <p>{item.descript}</p>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="slide-count-control_arrow">
          <i className="fas fa-arrow-left" onClick={this.previous}></i>
          <p>{`${this.state.activeSlide + 1}/ ${getlength}`}</p>
          <i className="fas fa-arrow-right" onClick={this.next}></i>
        </div>
      </>
    );
  }
}
