import React, { Component } from "react";
import styles from "./Footer.module.css";
import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.shareIcons}>
          <FacebookShareButton
            url={"https://www.kooiker-fr.com/"}
            quote={"kooikerhondje “de la bande de rigolos“"}
            hashtag={"kooikerhondje “de la bande de rigolos“"}
          >
            <FacebookIcon size={25} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            url={"https://www.kooiker-fr.com/"}
            quote={"kooikerhondje “de la bande de rigolos“"}
            title={"kooikerhondje “de la bande de rigolos“"}
            hashtags={
              (["kooikerhondje “de la bande de rigolos“"], ["Kooiker Hunde"])
            }
          >
            <TwitterIcon size={25} round={true} />
          </TwitterShareButton>
          <RedditShareButton
            url={"https://www.kooiker-fr.com/"}
            quote={"kooikerhondje “de la bande de rigolos“"}
            title={"kooikerhondje “de la bande de rigolos“"}
          >
            <RedditIcon size={25} round={true} />
          </RedditShareButton>
          <TelegramShareButton
            url={"https://www.kooiker-fr.com/"}
            quote={"kooikerhondje “de la bande de rigolos“"}
            title={"kooikerhondje “de la bande de rigolos“"}
          >
            <TelegramIcon size={25} round={true} />
          </TelegramShareButton>
          <FacebookMessengerShareButton
            url={"https://www.kooiker-fr.com/"}
            quote={"kooikerhondje “de la bande de rigolos“"}
            to={""}
          >
            <FacebookMessengerIcon size={25} round={true} />
          </FacebookMessengerShareButton>
          <WhatsappShareButton
            url={"https://www.kooiker-fr.com/"}
            quote={"kooikerhondje “de la bande de rigolos“"}
            title={"kooikerhondje “de la bande de rigolos“"}
            separator={""}
          >
            <WhatsappIcon size={25} round={true} />
          </WhatsappShareButton>
        </div>
        <div>
          <p className={styles.copyright}>
            Copyright&copy;
            {new Date().getFullYear()}&nbsp;| All Rights Reserverd
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
