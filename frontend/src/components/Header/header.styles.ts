import styled from 'styled-components';

import { themes } from '../../styles/themes.style';

export const Container = styled.div`
  background-color: ${themes.navColor};
  color: ${themes.textColor};
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #31383d;

  h1 {
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    list-style-type: none;
    font-size: 0.9rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 10px;
    transition: 0.2s;

    &:hover {
      background-color: ${themes.hoverColor};
    }
  }

  li svg {
    font-size: 1rem;
  }

  button {
    color: ${themes.black};
    cursor: pointer;
    background-color: ${themes.primaryColor};
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    opacity: 0.7;
    color: ${themes.white};

    &:hover {
      opacity: 1;
    }
  }

  button#btn-register {
    background: none;
    color: ${themes.white};
    border: 1px solid ${themes.primaryColor};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
