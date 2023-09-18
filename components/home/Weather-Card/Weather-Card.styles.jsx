import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.2em;
  border-radius: 8px;
  background-color: var(--background-primary);
  border-right: 6px solid ${({ backgroundcolor }) => backgroundcolor};
  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    color: var(--color-primary);
  }
  h2 {
    font-size: 1.1rem;
    font-weight: 600;
  }
  h1 span,
  h2 span {
    color: var(--color-primary);
    font-family: monospace, "Courier New", Courier;
    letter-spacing: -0.04rem;
    font-weight: 500;
  }
`;

export const CityInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: 500;
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }
  h1::after,
  h2::after {
    content: "°C";
  }
`;
