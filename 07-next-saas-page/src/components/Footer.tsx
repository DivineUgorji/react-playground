import InstaIcon from "../assets/icons/insta.svg";
import TwitterIcon from "../assets/icons/x-social.svg";
import TikTokIcons from "../assets/icons/tiktok.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black py-5 text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            <p>© 2024 Your Company, Inc. All rights reserved</p>
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <TwitterIcon />
            </li>
            <li>
              <InstaIcon />
            </li>
            <li>
              <TikTokIcons />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
