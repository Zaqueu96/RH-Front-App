import React, { useCallback, useState } from "react";
import { Button } from "@material-ui/core";
import { ContainerCustom, CardCustom, ImageContent } from "./styles";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PassIcon from "@material-ui/icons/LockOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import Form from "../../components/Form";
import schema from "./schema";
import TextField from "../../components/TextInput";
import { useHistory } from "react-router";
// import { TextField } from "unform-material-ui";
import auth from "../../services/auth";
import store from "../../services/store";
import { SpanError } from "./styles";
export default function LoginPage() {
  const history = useHistory();
  const [isError, setIsError] = useState(false);
  const authSubmit = useCallback(
    async ({ email, password }) => {
      console.log("ada: ", { email, password });
      const { data } = await auth.login({ email, password });
      if (data.error && !data.access_token) {
        setIsError(true);
        return;
      }
      store.setToken(data.access_token.token);
      history.push("/dashboard");
      return;
    },
    [history]
  );
  return (
    <ContainerCustom>
      <CardCustom>
        <Form id="form" onSubmit={authSubmit} schema={schema}>
          <ImageContent
            alt="image "
            src="https://ui-avatars.com/api/?size=128&name=RH&background=0D8ABC&color=fff"
          />
          <h1>Login RH</h1>

          {isError && <SpanError>Usuário ou senhas inválidas</SpanError>}
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
