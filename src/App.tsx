import React from 'react';
import styled from '@emotion/styled';

import './global-styles';

import Header from './components/Header';
import ColumnLayout from './components/common/ColumnLayout';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <Header />

      <ColumnLayout.Container>
        <ColumnLayout.Left>
          Left Column
        </ColumnLayout.Left>

        <ColumnLayout.Right>
          Right Column
        </ColumnLayout.Right>
      </ColumnLayout.Container>
    </Container>
  );
}

export default App;
