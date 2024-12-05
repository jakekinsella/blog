import React from 'react';
import styled from '@emotion/styled';

import './global-styles';
import { colors } from './constants';

import Header from './components/Header';
import Article from './components/Article';
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
          <Article.Container>
            <Article.Title>
              Very Long Test Title
            </Article.Title>

            <Article.Subtitle>
              Published on this date
            </Article.Subtitle>

            <Article.Body>
              Left Column
            </Article.Body>
          </Article.Container>
        </ColumnLayout.Left>

        <ColumnLayout.Right>
          Right Column
        </ColumnLayout.Right>
      </ColumnLayout.Container>
    </Container>
  );
}

export default App;
