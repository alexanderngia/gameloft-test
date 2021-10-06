import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderIcon extends Component {
  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };

  render() {
    const { input } = this.props;

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <ul className="x-game-hub-row__slide-icon">
        <i
          className="fas fa-chevron-left left-arrow"
          onClick={this.previous}
        ></i>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {input.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className="icon-item"
                  href="blank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <img
                      className="img-button-tab"
                      src={item.src}
                      alt="img-alt"
                    />
                  </span>
                  <p>{item.caption}</p>
                </a>
              </li>
            );
          })}
        </Slider>
        <i className="fas fa-chevron-right right-arrow" onClick={this.next}></i>
      </ul>
    );
  }
}
