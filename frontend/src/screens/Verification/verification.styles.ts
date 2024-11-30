import styled from 'styled-components';

import { themes } from '../../styles/themes.style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  button {
    background-color: ${themes.primaryColor};
    border: 0;
    padding: 0.5rem;
    color: ${themes.white};
    margin-top: 1rem;
    border-radius: 10px;
    width: 20%;
    cursor: pointer;
  }
`;
