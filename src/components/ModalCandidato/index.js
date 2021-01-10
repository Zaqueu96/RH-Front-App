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
import { toast } from "react-toastify";
import DoneIcon from "@material-ui/icons/Done";
import Form from "../Form";
import TextField from "../TextInput";
import schema from "./schema";
import PropTypes from "prop-types";
import skillApi from "../../services/skillApi";
import candidateApi from "../../services/candidateApi";
export default function ModalCandidato({
  isOpen,
  isEdit,
  handler,
  closeModal,
  initialData,
}) {
  const [skillData, setSkillData] = useState([]);
  const [isErrorSkill, setIsErrorSkill] = useState(false);

  const submit = useCallback(
    async (data) => {
      try {
        const selecteds = skillData.filter((v) => v.isSelected === true);
        if (selecteds.length <= 0) {
          toast.error("Informe ao menos uma Skill...");
          return;
        }
        if (isEdit) {
          await candidateApi.update(initialData.id, {
            ...data,
            skills: selecteds,
          });
        }
        if (!isEdit) {
          await candidateApi.store({
            ...data,
            skills: selecteds,
          });
        }
        toast.success("Ação realizada com sucesso...");
        document.location.reload();
        await handler();
      } catch (err) {
        toast.error(
          isEdit
            ? "Ocorreu um erro ao tentar atualizar este candidato...."
            : "Ocorreu um erro ao criar este usuário"
        );
      }
    },
    [skillData, handler, isEdit, initialData.id, setIsErrorSkill]
  );

  useEffect(() => {
    async function init() {
      const { skills } = initialData;
      const { data: dataR } = await skillApi.list();
      setSkillData(dataR);
      console.log(skillData);
      if (!skills) return;
      skills.forEach((skl) => {
        setSkillData((data) => {
          return data.map((v) => {
            if (skl.id === v.id) {
              v.isSelected = true;
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
        if (skill.id === v.id) {
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
          <span>{`${!isEdit ? "Registrar Novo" : "Editar"} Candidato`}</span>
        </Information>
        <Form onSubmit={submit} schema={schema} initialData={initialData}>
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
                  label={v.name}
                  clickable
                  icon={v.isSelected ? <DoneIcon /> : null}
                  onClick={() => setSkill(v)}
                />
              );
            })}
          </FieldSetBox>
          <ContentError isError={isErrorSkill}>
            <p className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error">
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
  isEdit: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  initialData: PropTypes.object.isRequired,
};
ModalCandidato.defaultProps = {
  initialData: {},
  isEdit: false,
};
