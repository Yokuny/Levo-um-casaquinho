import { useState } from "react";
import { Form, Title } from "./Title-Search.styles";

const Title_Search = ({ city, setCity }) => {
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
    <div>
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
    </div>
  );
};

export default Title_Search;
