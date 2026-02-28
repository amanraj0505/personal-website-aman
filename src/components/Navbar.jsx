import logo from "../assets/aman_logo_tr.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            className="h-8 w-auto opacity-90 transition hover:opacity-100"
            width={80}
            height={80}
            src={logo}
            alt="logo"
          />
        </a>
      </div>
      <div className="flex items-center justify-center gap-4 pr-1 text-xl text-slate-400">
        <a
          href="https://www.linkedin.com/in/amanraj0505/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-full border border-stone-800/60 bg-black/60 p-2 transition hover:border-stone-500 hover:text-slate-100"
        >
          <FaLinkedin aria-hidden="true" />
        </a>
        <a
          href="https://github.com/amanraj0505"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded-full border border-stone-800/60 bg-black/60 p-2 transition hover:border-stone-500 hover:text-slate-100"
        >
          <FaGithub aria-hidden="true" />
        </a>
        <a
          href="https://www.instagram.com/amanraj__05/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="rounded-full border border-stone-800/60 bg-black/60 p-2 transition hover:border-stone-500 hover:text-slate-100"
        >
          <FaInstagram aria-hidden="true" />
        </a>
        <a
          href="https://x.com/amanraj05_05"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="rounded-full border border-stone-800/60 bg-black/60 p-2 transition hover:border-stone-500 hover:text-slate-100"
        >
          <FaXTwitter aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
