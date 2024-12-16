import RSSReader from './RSSReader';
import BooksInAYear from './BooksInAYear';
import TheJSuite from './TheJSuite';

export interface T {
  Title: string;
  Subtitle: string;
  Path: string;
  PostedAt: Date;
  Component: React.FunctionComponent;
}

const _AllArticles = [
  RSSReader,
  BooksInAYear,
  TheJSuite,
]

export const All = _AllArticles.sort((x, y) => x.PostedAt.getTime() - y.PostedAt.getTime());
