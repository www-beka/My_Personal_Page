import "./footer.scss";
import Top from '../../assets/images/top.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
          <div className="footer_conten container mx-auto px-52 flex justify-between items-center">
            <div className="top">
              <a href="#top-id">
                <img src={Top} alt="" />
              </a>
            </div>
            <div className="right_footer">
                <span>© 2023 Behzod Bekmuratov</span>
            </div>
            <div className="left_footer">
                <span>About</span>
                <span>Portfolio</span>
                <span>Contact</span>
                <span>Blog</span>
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;
