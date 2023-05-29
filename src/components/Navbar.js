import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { MenuItem, Menu, Button } from "@mui/material";
import Logo from "../assets/logo.png";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <div>
        <img src={Logo} alt="" style={{ width: "55px" }} />
      </div>

      <nav ref={navRef}>
        <Link to="/" onClick={showNavbar}>
          MATCHING
        </Link>

        <Link to="/hiSpeed" onClick={showNavbar}>
          HIGH SPEED
        </Link>

        <Link to="/lowSpeed" onClick={showNavbar}>
          LOW SPEED
        </Link>
        <Link to="dimension" onClick={showNavbar}>
          3D
        </Link>

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ color: "#FFFFFF" }}
        >
          Report
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose} id="menu1">
            <Link id="menu1" to="/report_hsp" onClick={showNavbar}>
              Report High Speed
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} id="menu2">
            <Link id="menu2" to="/report_lsp" onClick={showNavbar}>
              Report Low Speed
            </Link>
          </MenuItem>
        </Menu>

        <button onClick={showNavbar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>

      <button onClick={showNavbar} className="nav-btn">
        <FaBars />
      </button>
    </header>
  );
}
export default Navbar;
