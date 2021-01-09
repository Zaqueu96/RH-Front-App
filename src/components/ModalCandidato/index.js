import React, { useState, useCallback, useEffect } from "react";
import { Modal, Button, Chip } from "@material-ui/core";
import {
  Container,
  ContentButton,
  Information,
  FieldSetBox,
  Legend,
  ContentError,
} from "./styles";

import DoneIcon from "@material-ui/icons/Done";
import Form from "../Form";
import TextField from "../TextInput";
import schema from "./schema";
import PropTypes from "prop-types";
export default function ModalCandidato({
  isOpen,
  handler,
  closeModal,
  initialData,
}) {
  const [skillData, setSkillData] = useState([
    { id: 0, description: "Angular", isSelected: false },
    { id: 1, description: "jQuery", isSelected: false },
    { id: 2, description: "Polymer", isSelected: false },
    { id: 3, description: "React", isSelected: false },
    { id: 4, description: "Vue.js", isSelected: false },
  ]);

  const submit = useCallback(
    async (data) => {
      const selecteds = skillData.filter((v) => v.isSelected === true);
      await handler({ ...data, skills: selecteds });
    },
    [skillData]
  );

  useEffect(() => {
    function init() {
      const { skills } = initialData;
      if (!skills) return;
      skills.forEach((skl) => {
        setSkillData((data) => {
          return data.map((v) => {
            if (skl.description === v.description) {
              v.isSelected = !v.isSelected;
            }
            return v;
          });
        });
      });
    }
    init();
  }, []);

  const setSkill = useCallback((skill) => {
    setSkillData((data) => {
      return data.map((v) => {
        if (skill.description === v.description) {
          v.isSelected = !v.isSelected;
        }
        return v;
      });
    });
    return;
  }, []);

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        console.log("Fechou");
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Information>
          <span>Registrar Novo Candidato</span>
        </Information>
        <Form
          onSubmit={submit}
          schema={schema}
          initialData={{
            nome: "Zaqueu",
            email: "joao@maili",
            idade: "45",
            ...initialData,
          }}
        >
          <TextField name="nome" label="Nome" />
          <TextField name="email" label="Email" />
          <TextField name="linkedin" label="Linkedin" />
          <TextField name="idade" label="Idade" type="number" min="1" />
          <FieldSetBox>
            <Legend> Escolha as Skills</Legend>
            {skillData.map((v) => {
              return (
                <Chip
                  key={v.id}
                  clickable
                  color="primary"
                  label={v.description}
                  clickable
                  icon={v.isSelected ? <DoneIcon /> : null}
                  onClick={() => setSkill(v)}
                />
              );
            })}
          </FieldSetBox>
          <ContentError>
            <p class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error">
              Escolha ao menos uma Skill
            </p>
          </ContentError>
          <ContentButton>
            <Button type="submit" variant="contained" color="primary">
              Salvar
            </Button>
            <Button variant="contained" color="secondary" onClick={closeModal}>
              Cancelar
            </Button>
          </ContentButton>
        </Form>
      </Container>
    </Modal>
  );
}

ModalCandidato.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  initialData: PropTypes.object.isRequired,
};
ModalCandidato.defaultProps = {
  initialData: {},
};
