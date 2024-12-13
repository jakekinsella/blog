import ABookAWeek from './ABookAWeek';
import TheJSuite from './TheJSuite';

export interface T {
  Title: string;
  Path: string;
  PostedAt: Date;
  Component: React.FunctionComponent;
}

const _AllArticles = [
  ABookAWeek,
  TheJSuite
]

export const AllArticles = _AllArticles.sort((x, y) => x.PostedAt.getTime() - y.PostedAt.getTime()).reverse()
