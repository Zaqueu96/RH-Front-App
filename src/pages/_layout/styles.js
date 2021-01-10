import styled from "styled-components";
import { Paper, Container } from "@material-ui/core";

export const ContainerCustom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: -webkit-center;
`;
export const Header = styled.div`
  min-height: 100px;
  .MuiToolbar-root {
    display: flex;
    justify-content: space-between;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 15vh);
`;

export const Footer = styled.div``;
