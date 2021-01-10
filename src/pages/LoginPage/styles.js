import styled from "styled-components";
import { Container, Card } from "@material-ui/core";

export const ContainerCustom = styled(Container)`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const CardCustom = styled(Card)`
  width: 50%;
  min-width: 320px;
  max-width: 400px;
  padding-bottom: 2%;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .MuiTextField-root {
    width: 80%;
  }
`;
export const ImageContent = styled.img`
  margin: 15px;
  border-radius: 10%;
`;

export const SpanError = styled.span`
    margin-bottom: 10px;
    color: red;
}`;
