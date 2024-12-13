import React from 'react';
import styled from '@emotion/styled';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ColumnLayout from '../components/common/ColumnLayout';
import * as Articles from './articles';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
`;

interface Props {
  articles: Articles.T[]
}

function ShowArticles({ articles }: Props) {
  return (
    <Container>
      <Header />

      <Content>
        <ColumnLayout.Container>
          <ColumnLayout.Left>
            {articles.map(article => <article.Component />)}
          </ColumnLayout.Left>

          <ColumnLayout.Right>
            <Sidebar />
          </ColumnLayout.Right>
        </ColumnLayout.Container>
      </Content>
    </Container>
  );
}

export default ShowArticles;
