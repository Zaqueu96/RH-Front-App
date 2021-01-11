import styled, { css } from "styled-components";
import { Container as ContainerMD } from "@material-ui/core";
export const Container = styled(ContainerMD)`
  background: #fff;
  width: 50% !important;
  max-width: 600px;
  border-radius: 2%;
  padding: 15px;

  .MuiContainer-root {
    border: none !important;
  }
  
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .MuiFormControl-root {
      width: 100%;
      margin: 5px 0;
    }
  }
`;

export const Information = styled.div`
  text-align: center;
  font-size: 25px;
  margin: 6% 3%;
  font-weight: 400;
`;

export const ContentButton = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export const FieldSetBox = styled.fieldset`
  width: 95%;
  border-radius: 2%;
  .MuiChip-root {
    margin: 5px;
  }
`;
export const Legend = styled.legend``;
export const ContentError = styled.div`
  display: none;
  width: 100%;
  ${(props) =>
    props.isError &&
    css`
      p {
        display: inline;
        color: red;
      }
    `}
`;
