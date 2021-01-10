import React, { useState } from "react";

import PerfectScrollbar from "react-perfect-scrollbar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { CardCustom, ImageContent, ContentText, ContentButton } from "./styles";
import { Button, Typography, IconButton, Chip } from "@material-ui/core";
import ModalCandidato from "../../components/ModalCandidato";
export default function Index({ candidato }) {
  const k = 0;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { skills } = candidato;

  function openLink() {
    window.open(candidato.linkedin);
  }
  return (
    <>
      <ModalCandidato
        isOpen={isOpenModal}
        handler={(data) => console.log(data)}
        closeModal={() => setIsOpenModal(false)}
        initialData={{ ...candidato }}
        isEdit={true}
      />
      <CardCustom>
        <ImageContent
          alt="image "
          src={`https://ui-avatars.com/api/?size=128&name=${candidato.nome}&background=0D8ABC&color=fff`}
        />
        <ContentText>
          <Typography>{candidato.nome}</Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            gutterBottom
          >{`${candidato.idade} anos`}</Typography>
        </ContentText>
        <PerfectScrollbar style={{ maxWidth: "100%" }}>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            {skills.map((skill, j) => {
              return <Chip label={skill.name} style={{ margin: "2px" }} />;
            })}
          </Typography>
        </PerfectScrollbar>
        <ContentText style={{ width: "100%" }}>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            {candidato.email}
          </Typography>
          <Button
            variant="contained"
            size="small"
            style={{
              background: " rgb(17, 82, 147) ",
              color: "white",
              width: "95%",
            }}
            startIcon={<LinkedInIcon />}
            onClick={openLink}
          >
            Ver Linkedin
          </Button>
          <ContentButton style={{ marginTop: "2px" }}>
            <IconButton
              aria-label="add an alarm"
              title="Editar este Candidato"
              color="primary"
              onClick={() => setIsOpenModal(true)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              title="Remover este Candidato"
              color="secondary"
            >
              <DeleteIcon />
            </IconButton>
          </ContentButton>
        </ContentText>
      </CardCustom>
    </>
  );
}
