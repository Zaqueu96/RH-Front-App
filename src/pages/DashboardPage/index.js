import React from "react";
import { Grid } from "@material-ui/core";
import { ContainerCustom } from "./styles";
import CardCandidato from "../../components/CardCandidato";
export default function DashboardPage() {
  return (
    <ContainerCustom>
      <Grid container spacing={3}>
        {Array(15)
          .fill()
          .map((v, k) => {
            return (
              <Grid key={`${k}_${v}`} item xs={6} sm={3}>
                <CardCandidato />
              </Grid>
            );
          })}
      </Grid>
    </ContainerCustom>
  );
}
