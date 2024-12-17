import React from 'react';

import Skeleton from '../components/Skeleton';
import * as Articles from './articles';

interface Props {
  articles: Articles.T[]
}

function ShowArticles({ articles }: Props) {
  return (
    <Skeleton>
      {articles.map(article => <article.Component />)}
    </Skeleton>
  );
}

export default ShowArticles;
