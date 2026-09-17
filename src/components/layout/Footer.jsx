import { Link } from "react-router";
import Logo from "../../assets/logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-secondaryBg">
      <div className="mx-auto flex max-w-375 flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row">
        <Link to="/" className="text-xl font-bold flex items-center">
          <img src={Logo} width={32} alt="" />
          <span>
            move<span className="text-baseColor">Verse</span>
          </span>
        </Link>
        <p className="text-xs text-slate-500">
          © 2026 MovieExplorer. All rights reserved.
        </p>
        <div className="flex gap-4 text-slate-400">
          <a href="https://github.com/kamrulcode" aria-label="githug">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kamruliislam/"
            aria-label="linkedin"
          >
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/ikamrul7/" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
