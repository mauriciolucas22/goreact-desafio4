import React from 'react';

import LoadingIcon from '../../assets/loading.svg';

import { Spinner, Container } from './styles';

const Loading = () => (
  <Container>
    <Spinner src={LoadingIcon} alt="Carregando" />
  </Container>
);

export default Loading;
