import React from "react";
import { Grid, TablePagination } from "@material-ui/core";
import { ContainerCustom } from "./styles";
import CardCandidato from "../../components/CardCandidato";
import PerfectScrollbar from "react-perfect-scrollbar";
export default function DashboardPage() {
  return (
    <ContainerCustom>
      {/* <PerfectScrollbar conponent="div" style={{height:"100%"}}> */}
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
      {/* </PerfectScrollbar> */}
    </ContainerCustom>
  );
}
