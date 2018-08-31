import styled from 'styled-components';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  height: 100%;
  width: 1200px;

  ${Spinner} {
    height: 100px;
    width: 100px;
  }
`;
