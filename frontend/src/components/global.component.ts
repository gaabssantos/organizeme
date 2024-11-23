import styled from 'styled-components';

import { themes } from '../styles/themes.style';

export const Flex = styled.div`
  display: flex;
`;

export const LoginRegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 9px rgba(0, 0, 0, 0.2);
  width: 40%;
  margin: 2rem auto;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: 1rem;
  }

  input {
    display: block;
    margin: 1rem auto;
    padding: 0.5rem;
    border: 2px solid #e0e2e7;
    width: 70%;
  }

  button {
    background-color: ${themes.primaryColor};
    color: ${themes.white};
    border: 0;
    width: 70%;
    padding: 0.5rem 0;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    opacity: 0.8;
    transition: 0.3s;
  }

  button:hover {
    opacity: 1;
  }

  a {
    opacity: 0.7;
    color: ${themes.primaryColor};
  }

  a:hover {
    opacity: 1;
  }

  a:visited {
    color: ${themes.primaryColor};
  }
`;

export const Divisor = styled.div`
  width: 75%;
  height: 2px;
  border: 1px solid #e0e2e7;
  margin: 2rem auto;
`;
