import React from "react";
import { TextField, Button } from "@material-ui/core";
import { ContainerCustom, CardCustom } from "./styles";
import EmailIcon from '@material-ui/icons/EmailOutlined';
import PassIcon from '@material-ui/icons/LockOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function LoginPage() {
  return (
    <ContainerCustom>
      <CardCustom>
        <h1>Login RH</h1>
        <TextField label="E-mail" variant="outlined" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}  />
        <br/>
        <TextField label="Senha" variant="outlined" type="password"
      InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PassIcon />
            </InputAdornment>
          ),
        }} 
         />
        <br/>
        <Button variant="contained" color="primary" size="medium">
            Entrar
        </Button>
      </CardCustom>
    </ContainerCustom>
  );
}

