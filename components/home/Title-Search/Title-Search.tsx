import { Form, Title } from "./Title-Search.styles";

const Title_Search = () => {
  return (
    <div>
      <Title>LEVO UM CASAQUINHO?</Title>
      <Form>
        <input type="text" name="searchInput" placeholder="Nome da cidade" />
        <button type="submit">Buscar</button>
      </Form>
    </div>
  );
};

export default Title_Search;
