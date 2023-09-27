import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const Title = styled.h1`
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 3.4rem;
  &:hover {
    color: var(--color-primary-dark);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1em;
  width: 100%;
  input,
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-family: monospace, "Courier New", Courier;
    color: var(--color-primary);
    transition: border-color 0.25s;
    background-color: var(--background-primary);
  }
  input {
    width: 100%;
    font-weight: 500;
  }
  input::placeholder {
    text-align: start;
    color: var(--color-primary-dark);
  }
  button {
    font-weight: 700;
  }
  button:hover,
  input:hover {
    border-color: var(--color-primary);
  }
  button:focus,
  button:focus-visible,
  input:focus,
  input:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
