import React from "react";
import { Button } from "@material-ui/core";
import { ContainerCustom, CardCustom, ImageContent } from "./styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function DashboardPage() {
  return (
    <ContainerCustom>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
      <CardCustom></CardCustom>
    </ContainerCustom>
  );
}
