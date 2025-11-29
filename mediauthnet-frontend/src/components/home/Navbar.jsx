import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import logoImg from "../../img/MediAuthNet logo.png";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({ left: false });
  const navigate = useNavigate();

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": { color: "#0F1B4C" },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    color: "#0F1B4C",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2, 5),
  }));

  const NavbarLogo = styled("img")(() => ({
    cursor: "pointer",
    height: "55px",
  }));

  return (
    <NavbarContainer>
      {/* Logo section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <CustomMenuIcon onClick={() => setMobileMenu({ left: true })} />

        <NavbarLogo
          src={logoImg}
          alt="MediAuthNet"
          onClick={() => navigate("/")}
        />
      </Box>

      {/* Navigation Links */}
      <NavbarLinksBox>
        <NavLink onClick={() => navigate("/")}>Home</NavLink>

        {/* Scroll to Guide Section */}
        <NavLink
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              const section = document.getElementById("guide-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }, 300);
          }}
        >
          Guides
        </NavLink>

        {/* Scroll to Feature Section */}
        <NavLink
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              const section = document.getElementById("featured-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }, 300);
          }}
        >
          Features
        </NavLink>

        <NavLink
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              const section = document.getElementById("services-section");   // must match ID
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }, 300);
          }}
        >
          Services
        </NavLink>


        <NavLink
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              const section = document.getElementById("contact-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }, 300);
          }}
        >
          Contact
        </NavLink>



      </NavbarLinksBox>

      {/* Login Button */}
      <Link to="/login" style={{ textDecoration: "none" }}>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Login"
        />
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
