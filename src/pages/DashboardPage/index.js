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
import { ContainerCustom, ContentSkill, ContentFilter } from "./styles";
import CardCandidato from "../../components/CardCandidato";
import TextField from "../../components/TextInput";
import Form from "../../components/Form";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import candidateApi from "../../services/candidateApi";
export default function DashboardPage() {
  const names = Array(9)
    .fill()
    .map((b, k) => {
      return `Skill nº${k}`;
    });
  const [selected, setSelected] = useState([]);
  const [filters, setFilters] = useState({
    nameOrEmail: null,
    skills: null,
  });
  const [candidates, setCandidates] = useState([]);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    async function get() {
      const { data, error, status } = await candidateApi.list(filters);
      console.log("data,error,status", { data, error, status });
      setCandidates(data);
    }
    get();
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
                      <Chip key={value} label={value} />
                    ))}
                  </ContentSkill>
                )}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" endIcon={<SearchIcon />}>
              Pesquisar
            </Button>
          </Form>
        </Container>
      </ContentFilter>
      <Grid container spacing={3}>
        {candidates.map((candidato, k) => {
          return (
            <Grid key={`${k}`} item xs={6} sm={3}>
              <CardCandidato candidato={candidato} />
            </Grid>
          );
        })}
      </Grid>
    </ContainerCustom>
  );
}
