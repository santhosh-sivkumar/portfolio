import React from "react";

const Social = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/santhoshsivkumar/",
      iconClass: "uil uil-instagram",
      title: "instagram-santhoshsivkumar",
    },
    {
      href: "https://dribbble.com/santhosh-sivkumar",
      iconClass: "uil uil-dribbble",
      title: "dribbble-santhoshsivkumar",
    },
    {
      href: "https://github-santhosh-sivkumar.netlify.app/",
      iconClass: "uil uil-github-alt",
      title: "github-santhoshsivkumar",
    },
  ];

  return (
    <div className="home__social">
      {socialLinks.map((link, index) => (
        <a
          title={link.title}
          key={index}
          href={link.href}
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={link.iconClass}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
