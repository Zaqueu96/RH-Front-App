import React from "react";
import { Button } from "@material-ui/core";
import { ContainerCustom, CardCustom,ImageContent } from "./styles";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PassIcon from "@material-ui/icons/LockOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import Form from '../../components/Form'
import schema from './schema';
import TextField from '../../components/TextInput'
// import { TextField } from "unform-material-ui";

export default function LoginPage() {
  return (
    <ContainerCustom>
      <CardCustom> 
        <Form id="form" onSubmit={(data) => console.log(data)} schema={schema}>
          <ImageContent  alt="image " src="https://ui-avatars.com/api/?size=128&name=RH&background=0D8ABC&color=fff" />
          <h1>Login RH</h1>
          <TextField
            label="E-mail"
            name="email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <br />
          <TextField
            label="Senha"
            name="password"
            variant="outlined"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PassIcon />
                </InputAdornment>
              ),
            }}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "80%" }}
            type="submit"
          >
            Entrar
          </Button>
        </Form>
      </CardCustom>
    </ContainerCustom>
  );
}
