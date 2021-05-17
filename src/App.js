import "./App.css";
import BreedingCardContainer from "./components/Offspring/BreedingCardContainer";
import React, { Component } from "react";
import DogDetail from "./components/Offspring/DogDetail";
import Aboutus from "./components/Aboutus/Aboutus";
import getUserLocale from "get-user-locale";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Ivy from "./components/Ivy/Ivy";
import { If, Else } from "rc-if-else";
import * as ReactBootStrap from "react-bootstrap";
import Contact from "./components/Contact/Contact";
import Welpen from "./components/Welpen/Welpen";
import Parents from "./components/Parents/Parents";
//vedran
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puppies: [],
      breedings: [],
      showDetail: false,
      language: "",
      image: "",
      showApp: false,
      poppies: false,
      showParentsElement: false,
      showParents: false,
      showLitter: false,
      showDogs: false,
      title: "",
      text: "",
      goto3:false,
    };
  }
  toggleLanguagueDE = () => {
    let title = "Das Kooikerhondje, Charakter und Haltung:";
    let text =
      "Das “Nederlandse Kooikerhondje” ist ein eher kleiner, etwa kniehoher weisser Hund mit orangeroten Platten. Sein Fell ist mittellang, glatt oder leicht wellig. Er ist ein lustiger und sehr gelehriger Hund; er ist familienbezogen und sehr anhänglich, doch Fremden gegenüber eher zurückhaltend und misstrauisch. \n\nEine liebevolle, aber konsequente Erziehung ist angebracht, wobei unnötige Härte zu vermeiden ist. Da er sehr sportlich ist, bietet sich eine Agility-, Flyball- oder ähnliche Ausbildung an. Auch als Therapiehund hat sich diese Rasse bewährt. Er ist aber auch zufrieden, wenn er regelmässig bewegt wird; ausserdem liebt er das Wasser und alle Arten von Suchspielen. Auf Grund seiner angenehmen Grösse kann er auch problemlos in einer Wohnung gehalten werden.";
    this.setState((state) => ({ language: "de", title: title, text: text }));
  };
  toggleLanguagueFR = () => {
    let title = "Le Kooikerhonje, caractéristiques et détention:";
    let text =
      "Le Kooikerhondje (chien hollandais de canadière) est un chien blanc de petite taille, arrivant à peu près jusqu'aux genoux. Sa robe a des plaques rouge-orange. Son poil est de longueur moyenne, lisse ou légèrement ondulé. C'est un chien drôle et très facile à éduquer. Il est trés affectueux et sociable. \n\nIl a besoin d´une éducation douce mais cohérente et appropriée,. Toute sanction sévère est à éviter. Comme il est très sportif, un entraînement à l'agilité, au flyball ou tout autre entrainement est approprié. Cette race a également fait ses preuves en tant que chien thérapeutique. Mais il est également heureux quand on lui fait simplement faire régulièrement de l'exercice ; Ce chien rapporteur aime aussi l'eau et toutes sortes de jeux de recherche. En raison de sa taille agréable, il peut facilement être logé dans un appartement.";
    this.setState((state) => ({ language: "fr", title: title, text: text }));
  };
  toggleLanguagueEN = () => {
    let title = "The Kooikerhondje, character and keeping:";
    let text ="The “Nederlandse Kooikerhondje” is a rather small, about knee-high white dog with orange-red plates. His coat is of medium length, smooth or slightly wavy. He is a funny and very docile dog; he is family-oriented and very affectionate, but rather reserved and distrustful towards strangers. \n\nA loving but consistent upbringing is appropriate, avoiding unnecessary harshness. As he is very sporty, agility, flyball or similar training would be a good idea. This breed has also proven itself as a therapy dog. But he is also happy if he is exercised regularly; in addition he loves water and all kinds of search games. Due to his pleasant size, he can be kept in a flat without any problems.";
    this.setState((state) => ({ language: "en", title: title, text: text }));
  };

  togglePoppies = () => {
    this.setState((state) => ({ poppies: !state.poppies }));
  };
  togglePoppiesNews = () => {
    this.setState((state) => ({ poppies: false }));
  };

  toggleParentsElement = () => {
    this.setState((state) => ({
      showParentsElement: !state.showParentsElement,
    }));
  };

  parentsSwitch = () => {
    this.setState({ showParents: !this.state.showParents });
  };

  welpenSwitch = () => {
    this.setState({ showLitter: !this.state.showLitter });
  };

  breedingSwitch = () => {
    this.setState({ showDogs: !this.state.showDogs });
  };

  defaultSwitch = () => {
    this.setState({ showDogs: false, showParents: false, showLitter: false });
  };

  scroollto3=()=>{
    this.setState({
      goto3:true,
    } ); 
    setTimeout(function() {
      this.setState({goto3: false})
  }.bind(this), 3000); }

  componentDidMount() {
    if (this.state.language === "") {
      let userLocale = getUserLocale();
      var res = userLocale.substring(0, 2);
    }
    if (res === "de") {
      res = "de";
    } else if (res === "en") {
      res = "en";
    } else if (res !== "de" || res !== "en") {
      res = "fr";
    }
    let title = "";
    let text = "";
    switch (res) {
      case "de":
        title = "Das Kooikerhondje, Charakter und Haltung:";
        text =
          "Das “Nederlandse Kooikerhondje” ist ein eher kleiner, etwa kniehoher weisser Hund mit orangeroten Platten. Sein Fell ist mittellang, glatt oder leicht wellig. Er ist ein lustiger und sehr gelehriger Hund; er ist familienbezogen und sehr anhänglich, doch Fremden gegenüber eher zurückhaltend und misstrauisch. \n\nEine liebevolle, aber konsequente Erziehung ist angebracht, wobei unnötige Härte zu vermeiden ist. Da er sehr sportlich ist, bietet sich eine Agility-, Flyball- oder ähnliche Ausbildung an. Auch als Therapiehund hat sich diese Rasse bewährt. Er ist aber auch zufrieden, wenn er regelmässig bewegt wird; ausserdem liebt er das Wasser und alle Arten von Suchspielen. Auf Grund seiner angenehmen Grösse kann er auch problemlos in einer Wohnung gehalten werden.";
        break;
      case "en":
        title = "The Kooikerhondje, character and keeping:";
        text =
          "The “Nederlandse Kooikerhondje” is a rather small, about knee-high white dog with orange-red plates. His coat is of medium length, smooth or slightly wavy. He is a funny and very docile dog; he is family-oriented and very affectionate, but rather reserved and distrustful towards strangers. \n\nA loving but consistent upbringing is appropriate, avoiding unnecessary harshness. As he is very sporty, agility, flyball or similar training would be a good idea. This breed has also proven itself as a therapy dog. But he is also happy if he is exercised regularly; in addition he loves water and all kinds of search games. Due to his pleasant size, he can be kept in a flat without any problems.";
        break;
      default:
        title = "Le Kooikerhonje, caractéristiques et détention:";
        text =
          "Le Kooikerhondje (chien hollandais de canadière) est un chien blanc de petite taille, arrivant à peu près jusqu'aux genoux. Sa robe a des plaques rouge-orange. Son poil est de longueur moyenne, lisse ou légèrement ondulé. C'est un chien drôle et très facile à éduquer. Il est trés affectueux et sociable. \n\nIl a besoin d´une éducation douce mais cohérente et appropriée,. Toute sanction sévère est à éviter. Comme il est très sportif, un entraînement à l'agilité, au flyball ou tout autre entrainement est approprié. Cette race a également fait ses preuves en tant que chien thérapeutique. Mais il est également heureux quand on lui fait simplement faire régulièrement de l'exercice ; Ce chien rapporteur aime aussi l'eau et toutes sortes de jeux de recherche. En raison de sa taille agréable, il peut facilement être logé dans un appartement.";
    }
    this.setState({
      language: res,
      title: title,
      text: text,
      showApp: true,
    });
  }

  onBreedingSelected = (id) => {
    this.setState({
      showDetail: true,
      actualBreeding: id,
    });
  };

  getBreedingContent = () => {
    if (this.state.showDetail) {
      return (
        <div>
          Detail{this.state.breedings[this.state.actualBreeding].name}
          <DogDetail />
        </div>
      );
    } else {
      return (
        <BreedingCardContainer
          onBreedingSelected={this.onBreedingSelected}
          breedings={this.state.breedings}
        />
      );
    }
  };

  render() {
    return (
      <If condition={!this.state.showApp}>
        {
          <ReactBootStrap.Spinner
            animation="grow"
            style={{ position: "fixed", top: "50%", left: "50%" }}
          />
        }
        <Else>
          <div className="App">
            <Navbar
              language={this.state.language}
              togglePoppiesNews={this.togglePoppiesNews}
              defaultSwitch={this.defaultSwitch}
              toggleLanguagueEN={this.toggleLanguagueEN}
              toggleLanguagueFR={this.toggleLanguagueFR}
              toggleLanguagueDE={this.toggleLanguagueDE}
              scroollto3={this.scroollto3}
            />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <Home
                    title={this.state.title}
                    text={this.state.text}
                    language={this.state.language}
                    goto3={this.state.goto3}
                  />
                )}
              />
            </Switch>

            <Switch>
              <Route
                path="/parents"
                exact
                render={() => (
                  <Parents
                    showParentsElement={this.state.showParentsElement}
                    toggleParentsElement={this.toggleParentsElement}
                  />
                )}
              />
            </Switch>

            <Switch>
              <Route
                path="/offspring"
                exact
                render={() => (
                  <div className="center">
                    <div className="doglist">
                      <h1 className="mainHeader">Offspring</h1>
                      {this.getBreedingContent()}
                    </div>
                  </div>
                )}
              />
            </Switch>

            <Switch>
              <Route
                path="/ivy"
                exact
                render={() => <Ivy language={this.state.language} />}
              />
            </Switch>

            {/* <Switch>
          <Route path='/news' exact render ={()=><News picture={this.state.image} togglePoppies={this.togglePoppies} poppies={this.state.poppies}/> }/>
        </Switch> */}

            <Switch>
              <Route
                path="/puppys"
                exact
                render={() => (
                  <Welpen
                    toggleParentsElement={this.toggleParentsElement}
                    defaultSwitch={this.defaultSwitch}
                    poppies={this.state.poppies}
                    language={this.state.language}
                    parentsSwitch={this.parentsSwitch}
                    welpenSwitch={this.welpenSwitch}
                    breedingSwitch={this.breedingSwitch}
                    showParents={this.state.showParents}
                    showLitter={this.state.showLitter}
                    showDogs={this.state.showDogs}
                  />
                )}
              />
            </Switch>

            <Switch>
              <Aboutus path="/aboutus" language={this.state.language} />
            </Switch>

            <Switch>
              <Route
                path="/contact"
                exact
                render={() => <Contact language={this.state.language} />}
              />
            </Switch>

            <Switch>
              <Route
                path="#exLinks"
                exact
                render={() => <Home language={this.state.language} />}
              />
            </Switch>

            <Footer />
          </div>
        </Else>
      </If>
    );
  }
}
