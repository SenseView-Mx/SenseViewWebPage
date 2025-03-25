  import React from "react";

  function NavbarToggle({ onClick, isOpen }) {
    return (
      <div className="navbar-toggle" onClick={onClick}>
        <img
          src={"/01-NavBar/burger_menu.png"}
          alt="Menu Toggle"
        />
      </div>
    );
  }

  export default NavbarToggle;
