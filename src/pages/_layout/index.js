import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import {
  Paper,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Content, ContainerCustom, Header } from "./styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import store from "../../services/store";
import auth from "../../services/auth";
import AddIcon from "@material-ui/icons/Add";
import ModalCandidato from "../../components/ModalCandidato";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  return (
    <ContainerCustom maxWidth="false">
      <ModalCandidato
        isOpen={isOpenModal}
        handler={() => setIsOpenModal(false)}
        closeModal={() => setIsOpenModal(false)}
      />
      <Header>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">
              RH - Gerenciamento de candidatos
            </Typography>
            <div>
              {store.token && (
                <>
                  <Button
                    variant="contained"
                    size="small"
                    endIcon={<AddIcon />}
                    onClick={() => setIsOpenModal(true)}
                  >
                    Add Novo Candidato
                  </Button>
                  <IconButton
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
                    <MenuItem onClick={auth.logout}>Sair</MenuItem>
                  </Menu>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </Header>
      <Content>{children}</Content>
    </ContainerCustom>
  );
}
