import styled from 'styled-components';

import { themes } from '../../styles/themes.style';

type ContainerProps = {
  $typeMessage: 'error' | 'success' | '';
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  color: ${(props) =>
    props.$typeMessage === 'error' ? `${themes.error}` : `${themes.success}`};
  border: 1px solid
    ${(props) =>
      props.$typeMessage === 'error' ? `${themes.error}` : `${themes.success}`};
  width: 60vw;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
`;
