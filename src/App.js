import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import "./App.css";
import SliderIcon from "./components/sliderIcon";
import Carousel from "./components/carousel";
import CarouselEvent from "./components/carouselEvent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIcon: [],
      data: [],
      dataEvent: [],
      nation: "Country",
      platform: "Platform",
      lang: "Tiếng Việt",
    };
  }

  getData = async () => {
    const res = await fetch("data.json");
    const resIcon = await fetch("data-slideicon.json");
    const resEvent = await fetch("data-event.json");
    const data = await res.json();
    const dataIcon = await resIcon.json();
    const dataEvent = await resEvent.json();

    this.setState({
      data: data,
      dataIcon: dataIcon,
      dataEvent: dataEvent,
    });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    const { dataIcon, data, dataEvent } = this.state;
    return (
      <div className="main-container">
        <Fade top>
          <header className="x-header">
            <div className="x-header-container">
              <div className="x-header-container-logo">
                <img
                  src="https://mkt-web.gameloft.com/assets/images/logo_gameloft_black.png"
                  className="x-header-logo-img"
                  alt="logo"
                />
              </div>
              <div className="x-header-container-menu">
                <svg
                  version="1.1"
                  className="x-header-menu-svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 315 153"
                >
                  <g>
                    <g>
                      <rect width="315" height="37" />
                    </g>
                    <g>
                      <rect y="58" width="263" height="37" />
                    </g>
                    <g>
                      <rect y="116" width="315" height="37" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </header>
        </Fade>
        <div className="button-social">
          <ul>
            <li>
              <i className="fas fa-share-alt"></i>
            </li>
            <li>
              <i className="far fa-envelope"></i>
            </li>
            <li>
              <i className="fas fa-headset"></i>
            </li>
          </ul>
        </div>
        <div className="x-banner">
          <div className="x-banner-container">
            <div className="x-banner-box">
              <div className="x-banner-box-row">
                <h2>GAMELOFT GAME</h2>
                <p>
                  Racing/Action | <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </p>
              </div>
              <div className="x-banner-box-row">
                <p>
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
        <Fade bottom>
          <div className="x-form">
            <div className="x-form-row">
              <div className="x-form-row-container">
                <p>Download latest version</p>
                <div className="x-form-row-platform">
                  <img
                    src="./nintendo.png"
                    className="x-form-row-platform-img"
                    alt="Nintendo"
                  />
                  <img
                    src="./microsoft.png"
                    className="x-form-row-platform-img"
                    alt="Microsoft"
                  />
                  <img
                    src="./steam.png"
                    className="x-form-row-platform-img"
                    alt="Steam"
                  />
                </div>
              </div>
            </div>
            <div className="x-form-row">
              <img
                src="./minion.png"
                className="x-form-row__form-img"
                alt="minion"
              />
              <div className="x-form-row__form-container">
                <div className="x-form-row__form-container-row">
                  <p className="x-form-row__form-container-row-title">
                    <span>Stay in the Know!</span>
                    <br />
                    Don't get left behind!
                    <br />
                    Subscribe to our newsletters today!
                  </p>
                </div>
                <div className="x-form-row__form-container-row">
                  <form>
                    <ul>
                      <li>
                        <input
                          className="input-text"
                          type="text"
                          name="name"
                          placeholder="Name"
                        />
                      </li>
                      <li>
                        <input
                          className="input-text"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </li>
                      <li>
                        <select nation={this.state.nation} name="country">
                          <option value="Country" disabled>
                            Country
                          </option>
                          <option value="Vietnam">Việt Nam</option>
                          <option value="US">United State</option>
                        </select>
                      </li>
                      <li>
                        <select platform={this.state.platform} name="platform">
                          <option value="Platform" disabled>
                            Platform
                          </option>
                          <option value="Vietnam">Nintendo</option>
                          <option value="US">Microsoft</option>
                          <option value="US">Stream</option>
                        </select>
                      </li>
                      <li>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="" />
                            By signing up, I confirm that I am 13 years old or
                            older. I agree to the Gameloft Terms and Conditions
                            and I have read the Privacy Policy.
                          </label>
                        </div>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" value="" />I agree to receive
                          promotional offers relating to all Gameloft games and
                          services.
                        </label>
                      </li>
                      <li>
                        <button type="submit" className="">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="x-game-hub">
            <div className="x-game-hub-row">
              <h2>Game Community Hub</h2>
              <p>Live Game Updates</p>
            </div>
            <div className="x-game-hub-row">
              <SliderIcon input={dataIcon} />
            </div>
            <div className="x-game-hub-row">
              <div className="x-game-hub-row_filter">
                <div className="x-game-hub-row_filter-column">
                  <p>All Posts</p>
                </div>
                <div className="x-game-hub-row_filter-column">
                  <div className="search">
                    <i className="fas fa-search"></i>
                    <input
                      name="search-post"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="x-game-hub-row_filter-column">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-twitter-square"></i>
                  <i className="fab fa-instagram-square"></i>
                  <div className="search">
                    <i className="fas fa-search"></i>
                    <input
                      name="search-post"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <Carousel input={data} />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="x-events">
            <div className="x-events-row">
              <h2>Special Events & Promotional</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos.
              </p>
            </div>
            <div className="x-events-row">
              <CarouselEvent input={dataEvent} />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="x-game-content">
            <div className="x-game-content-row">
              <h2>Exclusive Game Content</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos.
              </p>
            </div>
            <div className="x-game-content-row">{/* <SliderIcon /> */}</div>
            <div className="x-game-content-row">
              <Carousel input={data} />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <footer className="x-footer">
            <div className="x-footer-container">
              <div className="x-footer-col">
                <div className="x-footer-col-row">
                  <img
                    src="https://mkt-web.gameloft.com/assets/images/logo_gameloft_black.png"
                    alt="logo"
                  />
                </div>
                <div className="x-footer-col-row">
                  <p>Follow Us</p>
                  <div className="social">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-youtube-square"></i>
                  </div>
                </div>
                <div className="x-footer-col-row">
                  <i className="fas fa-globe-asia"></i>
                  <select lang={this.state.lang} className="languages">
                    <option value="Viet Nam">Tiếng Việt</option>
                    <option value="English">English</option>
                    <option value="Chinese">Chinese</option>
                  </select>
                </div>
              </div>
              <div className="x-footer-col">
                <div className="x-footer-col-row">
                  <ul>
                    <li>VISIT</li>
                    <li>Gameloft Games</li>
                    <li>Gameloft Careers</li>
                    <li>Gameloft News</li>
                    <li>Gameloft Forum</li>
                    <li>Gameloft Corporate</li>
                    <li>Gameloft Advertising</li>
                    <li>Gameloft Support</li>
                  </ul>
                </div>
                <div className="x-footer-col-row">
                  <ul>
                    <li>LEGAL</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Policy</li>
                    <li>EULA</li>
                    <li>Legal Notices</li>
                    <li>Event Rules</li>
                    <li>Business Contacts</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="x-footer-copyright">
              <p>
                ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft
                logo are trademarks of Gameloft in the U.S. and/or other
                countries. All other trademarks are the property of their
                respective owners.
              </p>
            </div>
          </footer>
        </Fade>
      </div>
    );
  }
}
