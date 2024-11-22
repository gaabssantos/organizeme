import styled from 'styled-components';

import { themes } from '../../styles/themes.style';

export const Container = styled.div`
  padding: 1rem;
  background-color: #a4527b;
  color: ${themes.white};
  width: 80%;

  @media (max-width: 800px) {
    width: 70%;
  }
`;

export const BoardHeader = styled.main`
  background-color: rgba(0, 0, 0, 0.3);
  margin-top: -1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 1rem;
  font-size: 0.7rem;
`;

export const BoardLists = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  white-space: nowrap;
  height: 90%;
  margin: 0 -1rem;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const List = styled.div`
  color: ${themes.textColor};
  margin-top: 1rem;
  background-color: ${themes.listColor};
  padding: 1rem;
  border-radius: 10px;
  min-width: 300px;
  height: max-content;
  margin: 1rem;

  h3 {
    font-size: 0.9rem;
  }

  button {
    background: none;
    border: 0;
    color: ${themes.textColor};
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: 0.2s;
    padding: 0.5rem;
    border-radius: 10px;
    width: 100%;
  }

  button:hover {
    background-color: ${themes.hoverColor};
  }

  button svg {
    font-size: 1.2rem;
  }
`;

export const Card = styled.div`
  background-color: ${themes.cardColor};
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
`;
