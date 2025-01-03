import styled from 'styled-components';

import { themes } from '../../styles/themes.style';

type BoardColorType = {
  $color: string;
};

export const Container = styled.aside`
  background-color: ${themes.sideColor};
  color: ${themes.textColor};
  width: 30%;
  padding: 1rem;
  height: 93vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 800px) {
    width: 30%;
  }
`;

export const SideItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
  }

  svg:hover {
    background-color: ${themes.hoverColor};
    border-radius: 5px;
  }
`;

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

export const BoardColor = styled.div<BoardColorType>`
  background-color: ${(props) => props.$color};
  width: 20px;
  height: 20px;
`;

export const BoardText = styled.p`
  font-size: 0.8rem;
`;
