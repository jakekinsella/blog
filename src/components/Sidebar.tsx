import React from 'react';
import styled from '@emotion/styled';

import * as Articles from '../routes/articles';

const Container = styled.div`
  width: 100%;

  font-size: 14px;
`;

const Header = styled.b`
  font-size: 16px;
  font-weight: 400;
`;

const ArticleList = styled.div`
  margin-top: 20px;
`;

const ArticleElement = styled.a`
  display: block;

  margin-left: 5px;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

function Sidebar() {
  return (
    <Container>
      Hi, I’m Jake Kinsella. I’m a senior software engineer + tech lead blogging about my work at ChaosSearch, my personal projects, and chronicling my journey in starting my own company.

      <ArticleList>
        <Header>Recent</Header>
        {Articles.All.map((article) => <ArticleElement href={article.Path}>{article.Title}</ArticleElement>)}
      </ArticleList>
    </Container>
  );
}

export default Sidebar;
