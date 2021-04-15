import React from "react";
import "./Home.css";
import dog from "./dog-min.jpg";
import dog2 from "./dog-2.jpg";
import dog1 from "./dog1.jpg";
import logo from "./logo.jpg";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import ParallaxJSXWrapper from "./ParallaxJSXWrapper.js";

export default function Home() {
  const Head = ParallaxJSXWrapper(
    <div className="home_welcome_header">
      <h1>Kooikerhondje</h1>
      <h2>“de la bande de rigolos“</h2>
    </div>,
    0.05
  );

  const BackgroundImage = ParallaxJSXWrapper(
    <img className="dog_background" src={dog} alt="dog" />,
    0.04
  );

  const BackgroundImageDogTwo = ParallaxJSXWrapper(
    <img className="second_dog_background" src={dog2} alt="dog" />,
    0.04
  );

  return (
    <div className="main_wrapper">
      <div className="main_container">
        <div className="section1">
          <BackgroundImage />
          {/* <img className="dog_background" src={dog} alt="dog" /> */}
          {/* <div className="home_welcome_header">
            <h1>Kooikerhondje</h1>
            <h2>“de la bande de rigolos“</h2>
          </div> */}
          <Head />
        </div>
        <div className="section2">
          <div className="first_content">
            <h2>Hier kommt überschrift</h2>
            <p>hier kommt der text</p>
          </div>
        </div>
        <div className="section3">
          {/* <img className="dog_background" src={dog-2} alt="dog" /> */}
          <BackgroundImageDogTwo/>
        </div>
        <div className="section4">
          <div className="section4_Container">
            <div className="zertifikat_logo">
              <a href="http://www.fci.be/de/" target="_blank" rel="noreferrer">
                <img src={logo2} alt={"logo2"} />
              </a>
              <a
                href="https://www.centrale-canine.fr/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logo1} alt={"logo1"} />
              </a>
              <a
                href="http://association-francaise-kooikerhondje.fr/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logo} alt={"logo"} />
              </a>
            </div>
            <div className="externe_links">
              <ul>
                <li>
                  <a
                    href="http://association-francaise-kooikerhondje.fr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Association Francaise Kooikerhond
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vom-kooikerbeis.de/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vom Kooikerbeis
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vom-haus-tusburch.de/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vom Haus Tusburch
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.rundumahund.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Rund uma Hund
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cdc-goetzis.at/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CDC Götzis
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section5">
          <img className="dog_background_puppy" src={dog1} alt="dog" />
        </div>
      </div>
    </div>
  );
}
