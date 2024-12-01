import { FaGithub, FaTwitter, FaLinkedin, FaFacebook,FaInstagram } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaGithub /> },
  { href: "https://discord.com", icon: <FaLinkedin /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaFacebook /> },
  { href: "https://medium.com", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©RAHUL SAINI 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          BE BOLD
        </a>
      </div>
    </footer>
  );
};

export default Footer;