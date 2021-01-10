import styled from "styled-components";
import { Container as ContainerMD } from "@material-ui/core";
export const Container = styled(ContainerMD)`
  background: #fff;
  /* height: 50%; */
  width: 50%!important;
  border-radius: 2%;
  padding: 15px;
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
  width: 100%;
`;
