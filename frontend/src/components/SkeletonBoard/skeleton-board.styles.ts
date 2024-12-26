import styled from 'styled-components';

import { themes } from '../../styles/themes.style';

export const Board = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
  margin-left: -1rem;
  width: 116%;
  cursor: pointer;

  &.active {
    background-color: #637380;
  }

  &:hover {
    background-color: ${themes.hoverColor};
  }
`;
