import styled from "styled-components";
import { Container, Card } from "@material-ui/core";

export const ContainerCustom = styled(Container)`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
`;
export const CardCustom = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align-last: center;
  flex-direction: column;
  height: 100%;
  padding: 5px;
  h6 {
    text-align: center;
    word-wrap: break-word;
  }
`;
export const ImageContent = styled.img`
  margin: 15px;
  width: 35%;
  border-radius: 50%;
`;

export const ContentText = styled.div``;
export const ContentButton = styled.div``;