import styled from "styled-components";
import { Paper, Container } from "@material-ui/core";

export const ContainerCustom = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Header = styled.div`
  min-height: 100px;
  .MuiToolbar-root {
    display: flex;
    justify-content: space-between;
  }
`;
export const Content = styled(Paper)`
  border: 1px solid black;
  width: 90%;
`;

export const Footer = styled.div``;
