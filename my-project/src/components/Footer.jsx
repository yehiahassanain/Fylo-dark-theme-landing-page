import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const [contact, setContact] = useState([
    { icon: "icon-phone.svg", text: "01028648289" },
    { icon: "icon-email.svg", text: "example@fylo.com" },
  ]);
  const [link, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jops",
    "Terms",
    "Press",
    "privacy",
    "Blog",
  ]);
  const [socialIcon, setSocialIcon] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pd-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="/">
          <img
            src="/src/assets/images/logo.svg"
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div>
          <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
            <div className="flex items-start w-[340px] gap-[15px] max-w-full">
              <img
                src="src/assets/images/icon-location.svg"
                alt="location-image"
                className="w-[18px] h-[18px] object-contain"
              />
              <p className="font-normal text-sm tracking-[0.8px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                excepturi incidunt quo deserunt quidem accusamus iure ab
                arumreprehenderit debitis!
              </p>
            </div>
            <div >
              {contact.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-[15px] mb-[15px] last-of-type:0"
                >
                  <img
                    src={`/src/assets/images/${item.icon}`}
                    alt="icon-image"
                    className="w-[18px] h-[18px] object-contain"
                  />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
              <ul className="grid grid-col-1 md:grid-cols-2 gap-[20px]">
                {link.map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="hover:text-[#42b0d1] transition-color duration-200 text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex justify-center gap-[15px] w-full md:w-auto">
                {socialIcon.map((item) => (
                  <li key={item}>
                    <a to={item} className="group">
                      <div className="w-[40px] h-[40px] element-center border border-white rounded-[50%]">
                        {item === "facebook" ? (
                          <FaFacebookF className="  group-hover:text-[#42b0d1] transition-all duration-200" />
                        ) : item === "twitter" ? (
                          <FaTwitter className="  group-hover:text-[#42b0d1] transition-all duration-200" />
                        ) : (
                          <FaInstagram className="  group-hover:text-[#42b0d1] transition-all duration-200" />
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
