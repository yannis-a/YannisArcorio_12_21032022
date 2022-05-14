import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

/**
 * Make up the full menu, navigation, logo and sidebar
 * 
 * @component
 */
const Menu = () => {
  const navData = [
    { url: "/", id: "homePath", title: "Accueil" },
    { url: "/user/12", id: "userPath", title: "Profil" },
    { url: "/settings", id: "settingsPath", title: "Réglage" },
    { url: "/community", id: "communityPath", title: "Communauté" },
  ];
  return (
    <div className="menu">
      <Navigation navData={navData} />
      <Logo />
      <Sidebar />
    </div>
  );
};

export default Menu;
