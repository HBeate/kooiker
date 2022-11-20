
import "./Home.css";
import dog1 from "./dog1.jpeg";
import dog2 from "./dog2.jpg";
import dog3 from "./dog3.jpg";
import logo from "./logo.jpg";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import Zoom from "react-reveal/Zoom";
import ParallaxJSXWrapper from "./ParallaxJSXWrapper.js";
import React, { useEffect, useRef, Fragment } from "react";

export default function Home(props) {
  // +++++++++++++++++++++++++++++++++++++++++++++++++
  // ++++++++++++++logo verschwinden lassen ++++++++++
  // const [logoTop, setLogoTop] = useState(false);
  // const changeDisplay = () => {
  //   if (window.scrollY >= 800) {
  //     setLogoTop(true);
  //   } else {
  //     setLogoTop(false);
  //   }
  // };

  // window.addEventListener("scroll", changeDisplay);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
  const Head = ParallaxJSXWrapper(
    <div className="home_welcome_header">
      <Zoom>
        <h1>Kooikerhondje</h1>
        <h2>“de la bande de rigolos“</h2>
      </Zoom>
    </div>,
    0.05 );

  const myRef = useRef(null);

  useEffect(() => {
    if (props.goto3 === true) {
      if (props.goto3 === true) {
        myRef.current.scrollIntoView();}
    }
  });

  const BackgroundImage = ParallaxJSXWrapper(<img className="dog_background" src={dog1} alt="dog" />,0.035);

  const LogoTop = ParallaxJSXWrapper(
    <div className="logoTopPageActive">
            <a href="http://www.fci.be/de/" target="_blank" rel="noreferrer"><img src={logo2} alt={"logo2"} /></a>
            <a href="https://www.centrale-canine.fr/" target="_blank" rel="noreferrer" ><img src={logo1} alt={"logo1"} /></a>
            <a  href="http://association-francaise-kooikerhondje.fr/"  target="_blank"  rel="noreferrer" >  <img src={logo} alt={"logo"} /></a>
          </div>,0.035);

  const BackgroundImageDogTwo = ParallaxJSXWrapper(<img className="second_dog_background" src={dog2} alt="dog" />, 0.034);

  const BackgroundImageDogPuppy = ParallaxJSXWrapper(<img className="dog_background_puppy" src={dog3} alt="dog" />,0.035);

  const text2 = () => {
    let fragment = [];
    props.text.split("\n").map((item, key) => {
      fragment.push(<Fragment key={key}>{item}<br /></Fragment>);
      return null;
    });
    return fragment;
  };

  return (
    <div className="main_wrapper">
      <div className="main_container">
        <div className="section1">
          <BackgroundImage />
          <LogoTop/>
          <Zoom>
            <Head />
          </Zoom>
        </div>
        <div className="section2">
          <div className="first_content">
            <h2>{props.title}</h2>
            <p>{text2()}</p>
          </div>
        </div>
        <div className="section3">
          <BackgroundImageDogTwo />
        </div>
        <div className="section4" id="links" ref={myRef}>
          <div className="section4_Container">
            <div className="zertifikat_logo">
              <a href="http://www.fci.be/de/" target="_blank" rel="noreferrer"><img src={logo2} alt={"logo2"} /></a>
              <a href="https://www.centrale-canine.fr/" target="_blank" rel="noreferrer"><img src={logo1} alt={"logo1"}/></a>
                <a href="http://association-francaise-kooikerhondje.fr/" target="_blank" rel="noreferrer"><img src={logo} alt={"logo"} /></a>
            </div>
            <div className="externe_links">
              <ul>
                <li><a href="https://www.vom-kooikerbeis.de/"  target="_blank" rel="noreferrer"> Vom Kooikerbeis</a></li>
                <li><a href="https://www.vom-haus-tusburch.de/" target="_blank" rel="noreferrer">Vom Haus Tusburch</a></li>
                <li><a href="http://www.rundumahund.com/" target="_blank" rel="noreferrer">Rund uma Hund</a></li>
                <li><a href="https://www.cdc-goetzis.at/" target="_blank" rel="noreferrer">cdc Götzis</a></li>
                  <p></p>
                <li><a href="https://www.shinothekooiker.ch/" target="_blank" rel="noreferrer">Shino de la bande de rigolos</a></li></ul>
            </div>
          </div>
        </div>
        <div className="section5">
          <BackgroundImageDogPuppy />
        </div>
      </div>
    </div>
  );
}
