import React from "react";
import { Parallax, Background } from "react-parallax";
import "./Home.css";
import dog from "../Home/dog-min.jpg";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import logo from "./logo.jpg";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import dog1 from "./dog1.jpg";

const dogBackground = dog;
const zertifikat = logo;
const zertifikat1 = logo1;
const zertifikat2 = logo2;
const dogBagroundPuppy = dog1;


function Home() {
  return (
    <div style={{width: '100vw'}}>
      <Parallax strength={500} >
        <Background className="parallaxHomeBg">
          <div className="imgContainer">
          <img  src={dogBackground} alt='background'/>
          </div>
        </Background>
        <div className="overflow">
          <Zoom>
            <div className="headerHome">
              <h1>Kooikerhondje</h1>
              <h2>“de la bande de rigolos“</h2>
            </div>
          </Zoom>
        </div>
      </Parallax>
      <div className="overflow">
        <Fade left>
          <div className="contentOneHome">
            <h2>Hier kommt überschrift</h2>
            <p>hier kommt der text</p>
          </div>
        </Fade>
      </div>
      <Parallax strength={600}>
        <Background className="parallaxHomeBg">
        <img src={dogBackground} alt='background'/>
        </Background>
        <div className="overflow"></div>
      </Parallax>
      <div className="overflow">
        <div className="contentTwoHome">
          <Fade right>
            <div className="certificatLogo">
              <a href="http://www.fci.be/de/" target="_blank" rel="noreferrer">
                <img src={zertifikat2} alt={"logo2"} />
              </a>
              <a
                href="https://www.centrale-canine.fr/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={zertifikat1} alt={"logo1"} />
              </a>
              <a
                href="http://association-francaise-kooikerhondje.fr/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={zertifikat} alt={"logo"} />
              </a>
            </div>
            <div className="exLinks">
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
          </Fade>
        </div>
      </div>
      <Parallax>
        <Background className="parallaxHomeBg">
        <img src={dogBagroundPuppy} alt='background'/>
        </Background>
        <div className="overflow">
          
        </div>
      </Parallax>
    </div>
  );
}

export default Home;

// function Home() {

//   const [offset, setOffset] = useState(0);
//   useEffect(() => {
//     function handleScroll(){
//       setOffset(window.pageYOffset)
//     }
//     window.addEventListener("scroll",handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [offset]);

//   return (
//     <div className={styles.homeWrapper}>
//       <section className={styles.hero}>
//         <img
//         src={dog}
//         alt="dog background"
//         className={styles.parallaxHomeBg}
//         style={{
//           transform: `translateY(${offset * 0.8}px)`
//         }}
//         />
//         <div className={styles.headerHome}>
//         <Zoom>
//             <h1>Kooikerhondje</h1>
//             <h2>“de la bande de rigolos“</h2>
//         </Zoom>
//         </div>
//         <div className={styles.contentOneHome}>
//             <Fade left>
//               <div className={styles.contentText}>
//                 <h2>Hier kommt überschrift</h2>
//                 <p>hier kommt der text</p>
//               </div>
//             </Fade>
//           </div>
//           <div className={styles.overflow}></div>
//           <div>
//           <div className={styles.contentTwoHome}>
//              <Fade right>
//                <div className={styles.certificatLogo}>
//                  <a
//                    href="http://www.fci.be/de/"
//                    target="_blank"
//                    rel="noreferrer"
//                  >
//                    <img src={logo2} alt={"logo2"} />
//                  </a>
//                  <a
//                    href="https://www.centrale-canine.fr/"
//                    target="_blank"
//                    rel="noreferrer"
//                  >
//                    <img src={logo1} alt={"logo1"} />
//                  </a>
//                  <a
//                    href="http://association-francaise-kooikerhondje.fr/"
//                    target="_blank"
//                    rel="noreferrer"
//                  >
//                    <img src={logo} alt={"logo"} />
//                  </a>
//                </div>
//                <div className={styles.exLinks}>
//                  <ul>
//                    <li>
//                      <a
//                        href="http://association-francaise-kooikerhondje.fr/"
//                        target="_blank"
//                        rel="noreferrer"
//                      >
//                        Association Francaise Kooikerhond
//                      </a>
//                    </li>
//                    <li>
//                      <a
//                        href="https://www.vom-kooikerbeis.de/"
//                        target="_blank"
//                        rel="noreferrer"
//                      >
//                        Vom Kooikerbeis
//                      </a>
//                    </li>
//                    <li>
//                      <a
//                        href="https://www.vom-haus-tusburch.de/"
//                        target="_blank"
//                        rel="noreferrer"
//                      >
//                        Vom Haus Tusburch
//                      </a>
//                    </li>
//                    <li>
//                      <a
//                        href="http://www.rundumahund.com/"
//                        target="_blank"
//                        rel="noreferrer"
//                      >
//                        Rund uma Hund
//                      </a>
//                    </li>
//                    <li>
//                      <a
//                        href="https://www.cdc-goetzis.at/"
//                        target="_blank"
//                        rel="noreferrer"
//                      >
//                        CDC Götzis
//                      </a>
//                    </li>
//                  </ul>
//                </div>
//              </Fade>
//            </div>
//           </div>
//           <div className={styles.overflow} ></div>
//       </section>

//     </div>
//   )
// }

// export default Home;

// import React, { Component } from "react";
// // import styles from "./Home.module.css";
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";
// import logo from "./logo.jpg";
// import logo1 from "./logo1.png";
// import logo2 from "./logo2.png";
// import './Home.css';

// class Home extends Component {
//   state = {
//     title1: "",
//     text1: ""
//   };

//   componentDidMount() {

//     if (this.props.language === "de") {
//       this.setState({
//         title1: "Das Kooikerhondje, Charakter und Haltung:",
//         text1:
//           "Das “Nederlandse Kooikerhondje” ist ein eher kleiner, etwa kniehoher weisser Hund mit orangeroten Platten. Sein Fell ist mittellang, glatt oder leicht wellig. Er ist ein lustiger und sehr gelehriger Hund; er ist familienbezogen und sehr anhänglich, doch Fremden gegenüber eher zurückhaltend und misstrauisch. Eine liebevolle, aber konsequente Erziehung ist angebracht, wobei unnötige Härte zu vermeiden ist. Da er sehr sportlich ist, bietet sich eine Agility-, Flyball- oder ähnliche Ausbildung an. Auch als Therapiehund hat sich diese Rasse bewährt. Er ist aber auch zufrieden, wenn er regelmässig bewegt wird; ausserdem liebt er das Wasser und alle Arten von Suchspielen. Auf Grund seiner angenehmen Grösse kann er auch problemlos in einer Wohnung gehalten werden.",
//       });
//     } else if (this.props.language === "en") {
//       this.setState({
//         title1: "The Kooikerhondje, character and keeping:",
//         text1:
//           "The “Nederlandse Kooikerhondje” is a rather small, about knee-high white dog with orange-red plates. His coat is of medium length, smooth or slightly wavy. He is a funny and very docile dog; he is family-oriented and very affectionate, but rather reserved and distrustful towards strangers. A loving but consistent upbringing is appropriate, avoiding unnecessary harshness. As he is very sporty, agility, flyball or similar training would be a good idea. This breed has also proven itself as a therapy dog. But he is also happy if he is exercised regularly; in addition he loves water and all kinds of search games. Due to his pleasant size, he can be kept in a flat without any problems.",
//       });
//     } else if (this.props.language === "fr") {
//       this.setState({
//         title1: "Le Kooikerhonje, caractéristiques et détention:",
//         text1:
//           "Le Kooikerhondje (chien hollandais de canadière) est un chien blanc de petite taille, arrivant à peu près jusqu'aux genoux. Sa robe a des plaques rouge-orange. Son poil est de longueur moyenne, lisse ou légèrement ondulé. C'est un chien drôle et très facile à éduquer. Il est trés affectueux et sociable. Il a besoin d´une éducation douce mais cohérente et appropriée,. Toute sanction sévère est à éviter. Comme il est très sportif, un entraînement à l'agilité, au flyball ou tout autre entrainement est approprié. Cette race a également fait ses preuves en tant que chien thérapeutique. Mais il est également heureux quand on lui fait simplement faire régulièrement de l'exercice ; Ce chien rapporteur aime aussi l'eau et toutes sortes de jeux de recherche. En raison de sa taille agréable, il peut facilement être logé dans un appartement.",
//       });
//     }
//     console.log(this.props.language);
//   }

//   render() {
//     if (!this.props.language) {
//       return <div>Loading...!</div>;
//     } else {
//       return (
//         <div className="home-wrapper">
//            <div className="parallax-home-bg">
//             <Zoom>
//               <div className="header-home">
//                 <h1>Kooikerhondje</h1>
//                 <h2>“de la bande de rigolos“</h2>
//               </div>
//             </Zoom>
//           </div>

//           <div className="content-one-home">
//             <Fade left>
//               <div>
//                 <h2>{this.state.title1}</h2>
//                 <p>{this.state.text1}</p>
//               </div>
//             </Fade>
//           </div>
//           <div className="parallax-home-bg"></div>
//           <div className="content-two-home">
//             <Fade right>
//               <div className="certificatLogo">
//                 <a
//                   href="http://www.fci.be/de/"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <img src={logo2} alt={"logo2"} />
//                 </a>
//                 <a
//                   href="https://www.centrale-canine.fr/"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <img src={logo1} alt={"logo1"} />
//                 </a>
//                 <a
//                   href="http://association-francaise-kooikerhondje.fr/"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <img src={logo} alt={"logo"} />
//                 </a>
//               </div>
//               <div className="exLinks">
//                 <ul>
//                   <li>
//                     <a
//                       href="http://association-francaise-kooikerhondje.fr/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       Association Francaise Kooikerhond
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.vom-kooikerbeis.de/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       Vom Kooikerbeis
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.vom-haus-tusburch.de/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       Vom Haus Tusburch
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="http://www.rundumahund.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       Rund uma Hund
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.cdc-goetzis.at/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       CDC Götzis
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </Fade>
//           </div>
//       <div className="parallax-home-bg"></div>
//         </div>
//       );
//     }
//   }
// }

// export default Home;
