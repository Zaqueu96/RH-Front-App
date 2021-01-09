import React from "react";
import {
  Button,
  Typography,
  Grid,
  ButtonGroup,
  IconButton,
} from "@material-ui/core";
import {
  ContainerCustom,
  CardCustom,
  ImageContent,
  ContentText,
  ContentButton
} from "./styles";
import PerfectScrollbar from "react-perfect-scrollbar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
export default function DashboardPage() {
  return (
    <ContainerCustom>
      <Grid container spacing={3}>
        {Array(15)
          .fill()
          .map((v, k) => {
            return (
              <Grid key={`${k}_${v}`} item xs={6} sm={3}>
                <CardCustom>
                  <ImageContent
                    alt="image "
                    src={`https://ui-avatars.com/api/?size=128&name=${k}&background=0D8ABC&color=fff`}
                  />
                  <ContentText>
                    <Typography>{`Candidato nº ${k}`}</Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      gutterBottom
                    >{`${k + 20} anos`}</Typography>
                  </ContentText>
                  <PerfectScrollbar style={{ maxWidth: "100%" }}>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      gutterBottom
                    >
                      {Array(Math.round(Math.random() * 25))
                        .fill()
                        .map((i, j) => {
                          return `Skill${j}`;
                        })
                        .join(", ")}
                    </Typography>
                  </PerfectScrollbar>
                  <ContentText style={{ width: "100%" }}>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      gutterBottom
                    >{`${k}C@mail.com`}</Typography>
                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        background: " rgb(17, 82, 147) ",
                        color: "white",
                        width: "95%",
                      }}
                      startIcon={<LinkedInIcon />}
                    >
                      Ver Linkedin
                    </Button>
                    <ContentButton 
                      style={{ marginTop: "2px" }}
                    >
                      <IconButton aria-label="add an alarm" title="Editar este Candidato" color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete" title="Remover este Candidato" color="secondary">
                        <DeleteIcon />
                      </IconButton>
                    </ContentButton>
                  </ContentText>
                </CardCustom>
              </Grid>
            );
          })}
      </Grid>
    </ContainerCustom>
  );
}
