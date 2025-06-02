import HelloWorld from './HelloWorld';
import Links1 from './Links1';
import Links2 from './Links2';

export interface T {
  Title: string;
  Subtitle: string;
  Path: string;
  PostedAt: Date;
  Component: React.FunctionComponent;
}

const _AllArticles : T[] = [
  HelloWorld,
  Links1,
  Links2,
]

export const All = _AllArticles.sort((x, y) => x.PostedAt.getTime() - y.PostedAt.getTime()).reverse();
