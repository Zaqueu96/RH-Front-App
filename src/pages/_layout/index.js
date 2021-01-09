import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import {
  Paper,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Content, ContainerCustom, Header, Footer } from "./styles";
import AccountCircle from "@material-ui/icons/AccountCircle";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true)
  };

  return (
    <ContainerCustom maxWidth="false">
      <Header>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">
              RH - Gerenciamento de candidatos
            </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
              >
                <MenuItem onClick={() => {}}>Sair</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <Typography variant="subtitle2">Gerenciamento de candidatos</Typography>
      </Footer>
    </ContainerCustom>
  );
}
