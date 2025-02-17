import React from 'react'
import "./Footer.css"
import facebook from "../../assets/assets/facebook_icon.png"
import instagram from "../../assets/assets/instagram_icon.png"
import twitter from "../../assets/assets/twitter_icon.png"
import youtube from "../../assets/assets/youtube_icon.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="inner-footer-wrapper">
          <div className="social-media">
            <img src={facebook} className="facebook" />
            <img src={instagram} className="instagram" />
            <img src={twitter} alt="" className="twitter" />
            <img src={youtube} alt="" className="youtube" />
          </div>
          <div className="footer-description">
            <div className="links-wrapper-1">
              <ul>
                <li>
                  <a href="#">Audio Description</a>
                </li>
                <li>
                  <a href="#">Investor Relation</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-2">
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Legal Notices</a>
                </li>
                <li>
                  <a href="#">
                    <p>
                      Do not sell or share my personal <br />
                      information
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-3">
              <ul>
                <li>
                  <a href="#">Gift Card</a>
                </li>
                <li>
                  <a href="#">Netflix Shop</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
                <li>
                  <a href="#"> Ad Choices</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-4">
              <ul>
                <li>
                  <a href="#">Media Center</a>
                </li>
                <li>
                  <a href="#">Term of Use</a>
                </li>
                <li>
                  <a href="#">Corporate information</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="Service-code">
            <div className="Service">
              <p>Service Code</p>
            </div>
            &copy;1997-2025 NetFlix,inc.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
