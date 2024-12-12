import LoremIpsum from './LoremIpsum';

export interface T {
  Title: string;
  Path: string;
  PostedAt: Date;
  Component: React.FunctionComponent;
}

const _AllArticles = [
  LoremIpsum
]

export const AllArticles = _AllArticles.sort((x, y) => x.PostedAt.getTime() - y.PostedAt.getTime()).reverse()
