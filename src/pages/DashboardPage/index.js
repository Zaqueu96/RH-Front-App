import React, { useState } from "react";
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
export default function DashboardPage() {
  const names = Array(9)
    .fill()
    .map((b, k) => {
      return `Skill nº${k}`;
    });
  const [selected, setSelected] = useState([]);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

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
