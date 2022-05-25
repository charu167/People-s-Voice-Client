import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useRouteMatch } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { ShieldMoonRounded } from "@mui/icons-material";

const Navbar = () => {
  const { path } = useRouteMatch();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings0 = ["settings", "Logout"];

  return (
    <div className="navbar">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ShieldMoonRounded
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <NavLink className="link" to="/">
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                PEOPLE'S VOICE
              </Typography>
            </NavLink>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/2021-Best-Latest-Whatsapp-Dp-Profile-Images-pics.gif"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings0.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <NavLink className="link" to={`${path}/settings`}>
                      <Typography textAlign="center">{setting}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
