import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsTelephone,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20 border-t border-t-blue-500">
        <div className="container mx-auto w-full">
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="w-full mb-10">
                <a
                  href="/#"
                  className="mb-6 inline-block max-w-[160px] text-3xl text-blue-500"
                >
                  GrafiQ
                </a>
                <p className="text-base mb-7 text-body-color">
                  Where imagination dances on screen. A cutting-edge animation
                  studio that brings stories to life through stunning visuals.
                  Unleash your creativity with us and experience the magic of
                  animation like never before.
                </p>
                <p className="flex items-center text-sm font-medium text-dark">
                  <span className="mr-3 text-primary">
                    <BsTelephone />
                  </span>
                  <span>+91 **** *** ***</span>
                </p>
              </div>
            </div>

            <LinkGroup header="Resources">
              <NavLink link="/#" label="Animation Showcase" />
              <NavLink link="/#" label="Our Projects" />
              <NavLink link="/#" label="Artistic Process" />
              <NavLink link="/#" label="Creative Strategy" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" label="About Grafiq" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Success Stories" />
              <NavLink link="/#" label="Privacy Policy" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/#" label="Premium Services" />
              <NavLink link="/#" label="Meet Our Artists" />
              <NavLink link="/#" label="Join the Studio" />
              <NavLink link="/#" label="Watch Animations" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold mb-9 text-dark">
                  Follow us On
                </h4>
                <div className="flex items-center mb-6 gap-4 text-xl">
                  <div>
                    <BsFacebook />
                  </div>
                  <div>
                    <BsTwitter />
                  </div>
                  <div>
                    <BsYoutube />
                  </div>
                  <BsLinkedin />
                </div>
                <p className="text-base text-body-color">
                  {" "}
                  © {new Date().getFullYear()} GrafiQ Studio{" "}
                  <span className="text-xs">By Techtoor</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }: any) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="w-full mb-10">
          <h4 className="text-lg font-semibold mb-9 text-dark"> {header} </h4>
          <ul>{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }: any) => {
  return (
    <div>
      <li>
        <a
          href={link}
          className={`inline-block mb-2 text-base leading-loose text-body-color hover:text-primary`}
        >
          {label}
        </a>
      </li>
    </div>
  );
};
