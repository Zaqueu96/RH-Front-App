import React, { useState, useCallback, useEffect } from "react";
import {
  Grid,
  Container,
  Button,
  FormControl,
  InputLabel,
  Select,
  Chip,
  MenuItem,
} from "@material-ui/core";
import { toast } from "react-toastify";
import { ContainerCustom, ContentSkill, ContentFilter } from "./styles";
import CardCandidato from "../../components/CardCandidato";
import TextField from "../../components/TextInput";
import Form from "../../components/Form";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import candidateApi from "../../services/candidateApi";
import skillApi from "../../services/skillApi";
export default function DashboardPage() {
  const [names, setNames] = useState([]);
  const [selected, setSelected] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [candidates, setCandidates] = useState([]);
  const handleChange = (event) => {
    console.log("event.target.value", event.target.value);
    setSelected(event.target.value);
  };

  const handlerFilter = useCallback(async () => {
    console.log("filters");
    const { data: dataR } = await candidateApi.list({
      nameOrEmail: searchText,
      skills: selected.map((v) => v.id).join(","),
    });
    setCandidates(dataR);
  }, [searchText, selected]);

  useEffect(() => {
    async function getSkills() {
      try {
        const { data: dSkill } = await skillApi.list();
        setNames(dSkill);
      } catch (err) {
        toast.error("Ocorreu um error ao carregar a lista de skills");
      }
    }
    async function get() {
      try {
        const { data } = await candidateApi.list({});
        setCandidates(data);
      } catch (err) {
        toast.error("Ocorreu um error ao carregar a lista de candidatos");
      }
    }
    get();
    getSkills();
  }, []);

  return (
    <ContainerCustom>
      <ContentFilter>
        <Container>
          <Form>
            <TextField
              style={{ width: "40%" }}
              size="small"
              name="nome"
              label="Nome ou E-mail"
              variant="standard"
              onChange={(evt) => setSearchText(evt.target.value)}
            />
            <FormControl style={{ width: "40%" }}>
              <InputLabel id="label01l">Pesquisar pela Skill</InputLabel>
              <Select
                label="Skill"
                labelId="label01l"
                multiple
                value={selected}
                onChange={handleChange}
                renderValue={(v) => (
                  <ContentSkill>
                    {v.map((value) => (
                      <Chip key={value.name} label={value.name} />
                    ))}
                  </ContentSkill>
                )}
              >
                {names.map((name) => (
                  <MenuItem key={name.name} value={name}>
                    {name.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              onClick={handlerFilter}
              endIcon={<SearchIcon />}
            >
              Pesquisar
            </Button>
          </Form>
        </Container>
      </ContentFilter>
     
      <Grid container spacing={3}>
        {candidates.map((candidato, k) => {
          return (
            <Grid key={`${k}_${candidato.id}`} item xs={6} sm={3}>
              <CardCandidato
                key={`${k}_${candidato.id}_${candidato.email}`}
                candidato={candidato}
              />
            </Grid>
          );
        })}
      </Grid>
    </ContainerCustom>
  );
}
