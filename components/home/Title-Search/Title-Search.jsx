import { useState } from "react";
import { Container, Form, Title } from "./Title-Search.styles";

const Title_Search = ({ city, setCity, errorMsg }) => {
  const [cityInput, setCityInput] = useState(city);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(cityInput);
  };

  const handleInput = (event) => {
    if (event.target.value.length < 5) event.target.style.borderBottom = "1px solid crimson";
    else event.target.style.borderBottom = "1px solid cyan";
    setCityInput(event.target.value);
  };

  return (
    <Container>
      <Title>LEVO UM CASAQUINHO?</Title>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          minLength={5}
          placeholder="Nome da cidade"
          onChange={(event) => handleInput(event)}
        />
        <button type="submit">Buscar</button>
      </Form>
      <p>{errorMsg}</p>
    </Container>
  );
};

export default Title_Search;
