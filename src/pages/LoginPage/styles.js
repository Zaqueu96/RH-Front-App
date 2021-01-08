import styled from "styled-components";
import { Container, Card, TextField, Button } from "@material-ui/core";

export const ContainerCustom = styled(Container)`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: calc(100vh - 120px); */
  height: 100vh;
`;
export const CardCustom = styled(Card)`
  width: 50%;
  min-width:320px;
  max-width: 400px;
  height: 50%;
  max-height: 500px;
  min-height:320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

  .MuiTextField-root{
      width:80%;
  }
`;
