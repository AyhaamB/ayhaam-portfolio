import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-left">
        <SocialIcon
        bgColor="#6082b6"
            className="social-icons"
            url="https://github.com/AyhaamB"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
          bgColor="#6082b6"
            className="social-icons"
            url="https://www.linkedin.com/in/ayhaam-baksh-4981b7211/"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
          bgColor="#6082b6"
            className="social-icons"
            url="https://linkedin.com"
            style={{ height: 40, width: 40 }}
          />
        </div>
        <div className="footer-center">
          <p>"Comparison is the thief of joy" - Theodore Roosevelt</p>
        </div>
        <div></div>
      </footer>
    </>
  );
};

export default Footer;
