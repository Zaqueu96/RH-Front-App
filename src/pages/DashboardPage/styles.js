import styled from "styled-components";
import { Container, Paper } from "@material-ui/core";

export const ContainerCustom = styled(Container)`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 100vh; */
  form {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
  }
`;

export const ContentSkill = styled.div`
  display: flex;
  flex-flow: wrap;
  .MuiChip-root{
    margin:2px;
  }
`;

export const ContentFilter = styled(Paper)`
  width: 95%;
  margin-bottom: 2%;
  padding: 15px;
`;
